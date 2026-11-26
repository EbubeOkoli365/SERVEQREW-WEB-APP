import { errorResponse } from "./response.ts";

interface RateLimitEntry {
    count: number;
    resetAt: number;
}

export interface RateLimitOptions {
    maxRequests?: number;
    windowMs?: number;
    prefix?: string;
}

const store = new Map<string, RateLimitEntry>();

export function checkRateLimit(req: Request, options: RateLimitOptions): Response | null {
    const maxRequests = options.maxRequests ?? 3;
    const windowMs = options.windowMs ?? 60_000;
    const prefix = options.prefix ?? "global";

    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";
    const key = `${prefix}:${clientIp}`;

    const now = Date.now();
    const entry = store.get(key);

    if (!entry || now > entry.resetAt) {
        store.set(key, { count: 1, resetAt: now + windowMs });
        return null;
    }

    if (entry.count >= maxRequests) {
        return errorResponse("Too many attempts. PLease try again after 1 minute.", 429);
    }

    entry.count += 1;
    return null;
}