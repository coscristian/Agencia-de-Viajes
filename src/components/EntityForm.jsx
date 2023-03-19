import React from "react";
import { useRef } from "react";

const EntityForm = ({/*
  adminsList,
  setShowTable,
  setAdmins,
  editAdminInfo,
  defaultSucAdminInfo,
  submitInfoText,*/
}) => {
  const form = useRef(null);

  const submitCreateAdminForm = (e) => {
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
<form ref={form} onSubmit={submitCreateAdminForm}>
      <FormGridHeader>
        <FormInput type="number" name="id" placeholder="" editingInfo={false} labelText="ID" />
        <FormInput type="text" name="city" placeholder="" editingInfo={false} labelText="City" />
        <FormInputSelect name="admin" labelText="Admin">
            <option>Cristian Quesada</option>
            <option>Samir Nasri</option>
            <option>Cal Newport</option>
        </FormInputSelect>
        <FormInput type="tel" name="phone" placeholder="" editingInfo={false} labelText="Phone" />
        <FormInput type="number" name="employees" placeholder="" editingInfo={false} labelText="# Employees" />
        <FormInput type="number" name="hotels" placeholder="" editingInfo={false} labelText="# Hotels" />
        
      </FormGridHeader>
      <FormInput type="text" name="address" placeholder="" editingInfo={false} labelText="Address" />
    </form>
  );
};


const FormInput = (props) => { 
  return (
    <div class="relative z-0 w-full mb-6 group">
      <input
        type={props.type}
        name={props.name}
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={props.placeholder}
        required
        defaultValue={props.editingInfo ? props.defaultInfo : ""}
        disabled={props.editingInfo ? true : false}
      />
      <label
        for={props.name}
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {props.labelText}
      </label>
    </div>
  );
};

const FormInputSelect = (props) => {
    return (
        <div class="relative z-0 w-full mb-6 group">
          <select
            name={props.name}
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue={0}
            required
          >
            <option disabled value={0}>
              Select an option
            </option>
            {props.children}
          </select>
          <label
            for={props.name}
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {props.labelText}
          </label>
        </div>
    );
}

const FormGridHeader = (props) => {
  return (
    <div class="grid md:grid-cols-2 md:gap-6">
        {props.children}
    </div>);
};

export default EntityForm;

/**
 *         <FormInputSelect name="gender" labelText="Gender">
            <option>Masculino</option>
            <option>Femenino</option>
        </FormInputSelect>
 */

/**
 *       <div class="relative z-0 w-full mb-6 group">
        <input
          type="tel"
          name="phoneNumber"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="phoneNumber"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone number (3207101556)
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          defaultValue={editAdminInfo ? defaultSucAdminInfo.email : ""}
        />
        <label
          for="email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="address"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          defaultValue={editAdminInfo ? defaultSucAdminInfo.address : ""}
        />
        <label
          for="address"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Address
        </label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <select
          name="sucursal"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          defaultValue={0}
          required
        >
          <option disabled value={0}>
            Select an option
          </option>
          <option>Pereira</option>
          <option>Bogotá</option>
          <option>Cali</option>
          <option>Manizales</option>
        </select>
        <label
          for="sucursal"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Sucursal
        </label>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {submitInfoText}
      </button>
 */