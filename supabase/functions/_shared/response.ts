import { corsHeaders } from "./cors.ts";

export function jsonResponse(data: unknown, status = 200): Response {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
        },
    });
}

export function errorResponse(
    message: string,
    status = 400,
    errors?: Record<string, string>
): Response {
    return jsonResponse(
        {
            message,
            ...(errors ? { errors } : {}),
        },
        status
    );
}
