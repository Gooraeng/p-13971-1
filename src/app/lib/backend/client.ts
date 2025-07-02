const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiFetch = async(path: string, options?: RequestInit) => {

    if (options?.body) {
        const headers = new Headers(options.headers);
        if (!headers.get("Content-Type")) {
            headers.set("Content-Type", "application/json; charset=utf-8");
        }
        options.headers = headers;
    }

    return fetch(`${NEXT_PUBLIC_API_BASE_URL}${path}`, options)
        .then(res => res.json())
}