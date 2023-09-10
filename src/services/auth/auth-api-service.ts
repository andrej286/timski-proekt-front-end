import api from "../api";
import TokenService from "./token-service";

class AuthService {
    login(email: any, password: any) {
        return api
            .post("/customer/login/", {
                email,
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

    register(password: any,password2: any, email: any,  first_name: any, last_name: any, date_of_birth: any) {
        return api.post("/customer/register/", {
            password,
            password2,
            email,
            first_name,
            last_name,
            date_of_birth,
        });
    }

    getCurrentUser() {
        return TokenService.getUser();
    }
}

export default new AuthService();