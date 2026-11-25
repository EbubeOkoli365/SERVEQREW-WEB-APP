import { errorResponse } from "./response.ts";

interface RateLimitEntry { 
    count: number;
    resetAt: number;
}

export interface rateLimitOPtions {
    maxRequests?: number;
    windowMs?: number;
    prefix?: string;
}

const store = new Map<string, RateLimitEntry>();

export function checkRateLimit(
    req: Request,
    options: rateLimitOPtions = {}    
): Response | null {
    try {
        const maxRequests = options.maxRequests ?? 3; 
        const windowMs = options.windowMs ?? 60_000;
        const prefix = options.prefix ?? "global";

        const forwadedFor = req.headers.get("x-forwaded-for");
        const clientIp = forwadedFor ? forwadedFor.split(",")[0].trim() : "unknown";
        const key = `${prefix}:${clientIp}`;

        const now = Date.now();
        const entry = store.get(key);

        if (!entry || now > entry.resetAt) {
            store.set(key, { count: 1, resetAt: now + windowMs });
            return null;
        }

        entry.count += 1;
        return null;

    } catch (err) {
        console.error ("Rate limiter error: ", err);
        return null;
    }
}
