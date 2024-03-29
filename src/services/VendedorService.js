import axios from "axios";

const PORT = "8080";

class VendedorService {
  async getVendedores() {
    var options = {
      method: "GET",
      url: "http://localhost:" + PORT + "/admin/vendedores",
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

  async postVendedor(vendedorDataToSend) {
    var options = {
      method: "POST",
      url: "http://localhost:" + PORT + "/admin/vendedor/crear",
      headers: { "Content-Type": "application/json" },
      data: vendedorDataToSend,
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

export default new VendedorService();
