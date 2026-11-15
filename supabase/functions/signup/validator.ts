import { signupRequest } from './types.ts';

export type ValidationResult = 
| { valid: true; data: signupRequest }
| { valid: false; errors: Record<string, string> };

export function validateSignupInput(input: unknown): ValidationResult {
    const errors: Record<string, string> = {};

    // 1. Checking if input is an object or is empty. 
    if (typeof input !== 'object' || !input) {
        return {valid: false, errors: {message: 'Invalid request body format'}};
    }

    // Casting input to a record so we can check properties safely.
    const body = input as Record<string, unknown>;

    // 2. Validating required fields. 
    // Full name.
    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : "";
    if (!fullName) {
        errors.fullName = "Full name is required.";
    } else if (fullName.length < 3 || fullName.length > 30) {
        errors.fullName = "Full name must be between 3 and 30 characters long.";
    }

    // Email.
    const email = typeof body.email === 'string' ? body.email.trim() : "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.email = "Email is required.";
    } else if (email.length < 3 || email.length > 70) {
        errors.email = "Email must be between 3 and 70 characters long.";
    } else if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
    }

    // Password.
    const password = typeof body.password === 'string' ? body.password.trim() : "";
    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 4 || password.length > 8) {
        errors.password = "Password must be between 4 and 8 characters long.";
    }

    // 3. Returning results.
    if (Object.keys(errors).length > 0) {
        return { valid: false, errors };
    }

    // Returning the validated data if all checks pass.
    return {
        valid: true,
        data: {
            fullName,
            email,
            password,    
    }};
}

