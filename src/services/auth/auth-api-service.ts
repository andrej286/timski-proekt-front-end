import api from "../api";
import TokenService from "./token-service";

class AuthService {
    login(username: any, password: any) {
        return api
            .post("/customer/login", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    TokenService.setUser(response.data);
                }

                return response.data;
            });
    }

    logout() {
        TokenService.removeUser();
    }

    register(username: any, email: any, password: any) {
        return api.post(" /customer/register", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return TokenService.getUser();
    }
}

export default new AuthService();