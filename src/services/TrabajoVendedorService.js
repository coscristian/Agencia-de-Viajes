import axios from "axios";

const PORT = "8080";

class TrabajoVendedorService {
  async getTrabajoVendedor() {
    var options = {
      method: "GET",
      url: "http://localhost:" + PORT + "/admin/trabajo_vendedor",
      headers: { "Content-Type": "application/json" },
    };
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

  async postTrabajoVendedor(trabajoVendedorDataToSend) {
    var options = {
      method: "POST",
      url: "http://localhost:" + PORT + "/admin/trabajoVendedor/crear",
      headers: { "Content-Type": "application/json" },
      data: trabajoVendedorDataToSend,
    };
    return await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}

export default new TrabajoVendedorService();
