class TokenService {
    getLocalRefreshToken() {
        // @ts-ignore
        const refresh = JSON.parse(localStorage.getItem("refresh"));
        console.log('hit inside Token service getLocalRefreshToken with user:', refresh)
        return refresh;
    }

    getLocalAccessToken() {
        // @ts-ignore
        const access = JSON.parse(localStorage.getItem("access"));
        console.log('hit inside Token service getLocalAccessToken with access:', access)
        return access;
    }

    updateLocalAccessToken(token: any) {
        // @ts-ignore
        localStorage.setItem("access", JSON.stringify(token));
        console.log('hit inside Token service updateLocalAccessToken with token:', token)
    }

    setTokens(access: any, refresh: any) {
        localStorage.setItem("access", JSON.stringify(access));
        localStorage.setItem("refresh", JSON.stringify(refresh));
        console.log('hit inside Token service setUser with access:', access, 'and refresh ',refresh)
    }

    removeUser() {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
    }
}

export default new TokenService();