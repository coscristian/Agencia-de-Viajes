import React from "react";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CustomerForm = (props) =>
  {
    const form = useRef(null);

    const submitCreateEntity = (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
      const newEntity = {};

      fd.forEach((value, key) => {
        newEntity[key] = value;
      });

      console.log(newEntity["codigo"])
      var options = {
        method: 'POST',
        url: 'http://localhost:8080/admin/turista/crear',
        headers: {'Content-Type': 'application/json'},
        data: {
          codigo: newEntity["codigo"],
          nombre: newEntity["nombre"],
          apellidos: newEntity["apellidos"],
          telefono: newEntity["telefono"],
          activo: true,
          direccion: newEntity["direccion"],
          ciudad: newEntity["ciudad"]
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        props.setShowTable(true);
        props.setAddedCustomer(true);
      }).catch(function (error) {
        console.error(error);
      });
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

export default CustomerForm;
