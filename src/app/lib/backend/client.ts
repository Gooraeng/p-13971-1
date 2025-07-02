const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiFetch = async(path: string) => {
    return fetch(`${NEXT_PUBLIC_API_BASE_URL}${path}`)
        .then(res => res.json())
}

export default apiFetch;