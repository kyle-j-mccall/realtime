const SUPABASE_URL = 'https://fjaehedvvvybjlsfvqgr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqYWVoZWR2dnZ5Ympsc2Z2cWdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2MDg0ODUsImV4cCI6MTk3NjE4NDQ4NX0.dsN_ILXjZ95_XQNLlQmEOYG7ESTTWsf3gGjyev7SX-I';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    // do we have a user?
    if (!user) {
        // path is different if we are at home page versus any other page
        const authUrl = location.pathname === '/' ? './auth/' : '../auth/';
        // include the current url as a "redirectUrl" search param so user can come
        // back to this page after they sign in...
        location.replace(`${authUrl}?redirectUrl=${encodeURIComponent(location)}`);
    }

    // return the user so can be used in the page if needed
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
export async function createEvent(event) {
    const response = await client.from('events').insert(event);

    return checkError(response);
}

export async function getEvents() {
    const response = await client.from('events').select('*');

    return response.data;
}

export async function uploadEventImage(imageName, imgaeFile) {
    const bucket = await client.storage.from('event-image');

    const { data, error } = await bucket.upload(imageName, imageFile,
        {
            cacheControl: '3600',
            upsert: true,
        });
    
        if (error) {
            console.log(error);
            return null;
        }

        const url = `${SUPABASE_URL}/storage/v1/object/public/${data.Key}`
}

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}