import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2"

function getEnv(name: string): string {
    const value = Deno.env.get(name);
    if (!value) {
        throw new Error(`Missing required environment variables: ${name}`);
    }
    return value;
}

export function createUserClient(req?: Request): SupabaseClient {
    const authHeader = req?.headers.get("Authorization");

    return createClient(
        getEnv("SUPABASE_URL"),
        getEnv("SUPABASE_ANON_KEY"),
        authHeader
        ? {
            global: {
                headers: { Authorization: authHeader },
            },
        }
        : undefined
    );
}

export function createAdminClient(): SupabaseClient {
    return createClient(
        getEnv("SUPABASE_URL"),
        getEnv("SUPABASE_ANON_KEY"),
        {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
            },
        }
    );
}