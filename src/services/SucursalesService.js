import axios from "axios";

const PORT = "8080";
const ROUTE = "/admin/sucursales";
const SUCURSAL_API_BASE_URL = "http://localhost:" + PORT + ROUTE;

var options = {
  method: "GET",
  url: SUCURSAL_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
};

class SucursalesService {
    async getSucursales() {
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

export default new SucursalesService();