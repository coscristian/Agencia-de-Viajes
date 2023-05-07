import axios from "axios";

const PORT = "8080";
const ROUTE = "/admin/admins_general";
const SUCURSAL_API_BASE_URL = "http://localhost:" + PORT + ROUTE;

var options = {
  method: "GET",
  url: SUCURSAL_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
};

class AdminGeneral {
    async getAdminsGeneral() {
    return await axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        //console.error(error);
        return [];
      });
  }
}

export default new AdminGeneral();