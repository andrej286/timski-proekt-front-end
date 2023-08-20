class TokenService {
    getLocalRefreshToken() {
        // @ts-ignore
        const user = JSON.parse(localStorage.getItem("user"));
        return user?.refreshToken;
    }

    getLocalAccessToken() {
        // @ts-ignore
        const user = JSON.parse(localStorage.getItem("user"));
        return user?.accessToken;
    }

    updateLocalAccessToken(token: any) {
        // @ts-ignore
        let user = JSON.parse(localStorage.getItem("user"));
        user.accessToken = token;
        localStorage.setItem("user", JSON.stringify(user));
    }

    getUser() {
        // @ts-ignore
        return JSON.parse(localStorage.getItem("user"));
    }

    setUser(user: any) {
        console.log(JSON.stringify(user));
        localStorage.setItem("user", JSON.stringify(user));
    }

    removeUser() {
        localStorage.removeItem("user");
    }
}

export default new TokenService();