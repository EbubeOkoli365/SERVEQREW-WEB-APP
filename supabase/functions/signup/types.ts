// What the user req body looks like (same as my validator.ts file).
export interface signupRequest {
    fullName: string;
    email: string;
    password: string;
}

// What the user object looks like after I create it in supabase.
export interface userRecord extends signupRequest {
    id: string;
    created_at: string;
}