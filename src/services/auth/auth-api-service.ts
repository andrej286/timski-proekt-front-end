import {api} from "../../services/api";
import TokenService from "./token-service";

class AuthService {
    login(email: any, password: any) {
        return api
            .post("/customer/login/", {
                email,
                password
            })
            .then(response => {
                console.log("in AuthService login with response : ", response)

                if (response.data.access) {
                    TokenService.setTokens(response.data.access, response.data.refresh);
                }

                return response.data;
            })
            .catch(err => {
                console.log('we have an error in login, err: ', err);
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
        }).then(response => {
                console.log("in AuthService register with response : ", response)
            });
    }
}

export default new AuthService();