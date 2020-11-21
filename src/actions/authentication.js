export const login = (payload) => {
    return {
        type: 'LOGIN',
        payload
    }
}

export const logout = (payload) => {
    return {
        type: 'LOGOUT',
        payload
    }
}

export const checkAuth = (payload) => {
    return {
        type: 'CHECK_AUTH',
        payload
    }
}