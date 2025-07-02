const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiFetch = async(path: string, options?: RequestInit) => {

    if (options?.body) {
        options.headers = {
            ...options.headers,
            "Content-Type": "application/json; charset=utf-8"
        }
    }

    return fetch(`${NEXT_PUBLIC_API_BASE_URL}${path}`, options)
        .then(res => res.json())
}

export default apiFetch;