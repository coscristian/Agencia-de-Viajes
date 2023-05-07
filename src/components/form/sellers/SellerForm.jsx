import React from "react";
import { useRef } from "react";
import TrabajoVendedorService from "services/TrabajoVendedorService";
import VendedorService from "services/VendedorService";

const SellerForm = (props) => {
  const form = useRef(null);

  const submitCreateEntity = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
    const newEntity = {};

    fd.forEach((value, key) => {
      newEntity[key] = value;
    });
    props.setShowTable(true);

    const vendedorDataToSend = {
      codigo: newEntity["codigo"],
      nombre: newEntity["nombre"],
      apellidos: newEntity["apellidos"],
      telefono: newEntity["telefono"],
      codigoSucursal: parseInt(newEntity["cod_sucursal"]),
      codigoAdminGeneral: newEntity["cod_admin_general"],
      activo: true,
    };

    const trabajoVendedorDataToSend = {
      fechaInicio: newEntity["fecha_inicio"],
      fechaFin: newEntity["fecha_fin"],
      codigoVendedor: newEntity["codigo"],
      codigoAdminGeneral: newEntity["cod_admin_general"],
      codigoSucursal: parseInt(newEntity["cod_sucursal"]),
    };
    VendedorService.postVendedor(vendedorDataToSend);
    TrabajoVendedorService.postTrabajoVendedor(trabajoVendedorDataToSend);
  };

  return (
    <Form formRef={form} onSubmitFunc={submitCreateEntity}>
      {props.children}
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </Form>
  );
};

const Form = (props) => {
  return (
    <form ref={props.formRef} onSubmit={props.onSubmitFunc}>
      {props.children}
    </form>
  );
};

export default SellerForm;
