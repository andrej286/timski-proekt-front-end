import api from "../api";
import TokenService from "../auth/token-service";

class DataApiService {

    getPurchase(id: any) {
        return api.get(`/purchase/${id}/`, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }});
    }

    getPurchases() {
        return api.get(`/purchase/`, { withCredentials: true, headers: {
            "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }
         }).then(response => {
            console.log("in DataApiService getPurchases with response : ", response)
        }).catch(err => console.log("error in DataApiService getPurchases with :", err));
    }

    getAddition(id: any) {
        return api.get(`/addition/${id}/`, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }});
    }

    getAdditions() {
        return api.get(`/addition/`, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }});
    }

    sendCSVFilePurchases(CSVFile: any) {
        return api.post("/purchase/upload/", {CSVFile}, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }});
    }

    sendCSVFileAddition(CSVFile: any) {
        return api.post("/addition/upload/", {CSVFile}, { withCredentials: true, headers: {
                "Authorization": `Bearer ${TokenService.getLocalAccessToken()}`
            }});
    }
}

export default new DataApiService();