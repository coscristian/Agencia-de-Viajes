import axios from "axios";

const TURISTA_API_BASE_URL = "http://localhost:8080/admin/turistas"

class TuristaService {
    getTuristas(){
        return axios.get(TURISTA_API_BASE_URL);
    }
}

export default new TuristaService();