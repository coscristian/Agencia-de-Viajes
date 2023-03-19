import React from "react";
import { useRef } from "react";

const EntityForm = (
  props
  /*
  adminsList,
  setShowTable,
  setAdmins,
  editAdminInfo,
  defaultSucAdminInfo,
  submitInfoText,*/
) => {
  const form = useRef(null);

  const submitCreateEntity = (e) => {
    /*
    e.preventDefault();
    const fd = new FormData(form.current);
    const newAdmin = {};

    fd.forEach((value, key) => {
      newAdmin[key] = value;
    });

    setShowTable(true);
    setAdmins([...adminsList, newAdmin]);
    */
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

export default EntityForm;
