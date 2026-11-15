import { corsHeaders } from '../_shared/cors.ts';

Deno.serve(async (req) => {
    const preflightResponse = handleCors(req);
    if (preflightResponse) return preflightResponse;

    


})