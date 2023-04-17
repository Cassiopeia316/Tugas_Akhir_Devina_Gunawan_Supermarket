import LocalStorage from "../utils/localStorage";

export default function authHeader(contentType: 'application/json' | 'multipart/form-data') {
    const userCached = LocalStorage.get("credentials");

    if (userCached) {
        return {
            headers: {
                "Authorization" : "Bearer " + userCached.apiToken,
                'Content-Type': contentType,
            },
        };
    }
    return {}
}