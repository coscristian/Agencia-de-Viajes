import React, { useEffect, useState, useRef } from "react";
import admin1 from "media/admin1.png";
import admin2 from "media/admin2.jpg";
import admin3 from "media/admin3.jpeg";
import admin4 from "media/admin4.jpg";
import SucursalCard from "components/SucursalCard";
import Sidebar from "components/Sidebar";
import { Link, Outlet } from "react-router-dom";

const Admins = () => {
  const [showTable, setShowTable] = useState(true);
  const [titleText, setTitleText] = useState("Available Sucursal Admins");
  const [buttonText, setButtonText] = useState("Add Admin");

  useEffect(() => {
    if (showTable) {
      setTitleText("Available Sucursal Admins");
      setButtonText("Add Admin");
    } else {
      setTitleText("Create Sucursal Admin");
      setButtonText("Show All Admins");
    }
  }, [showTable]);

  return (
    <div className="flex flex-row bg-gray-100 h-screen">
      <Sidebar>
        <li className="py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl">
          Filter by
        </li>
        <li className="py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl">
          Order by
        </li>
      </Sidebar>

      <div className="flex flex-col my-5 w-full justify-center items-center mb-16">
        <div className="flex w-full justify-evenly">
          <h2 className="text-2xl my-5 font-sans font-bold">{titleText}</h2>
          <button
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => {
              setShowTable(!showTable);
            }}
          >
            {buttonText}
          </button>
        </div>
        {showTable ? <SucursalAdminsTable /> : <FormCreateAdmin />}
      </div>
    </div>
  );
};

const FormCreateAdmin = () => {
  return (
    <form>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="name"
            id="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="name"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="lastName"
            id="floating_last_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="lastName"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
      </div>
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            name="phoneNumber"
            id="floating_phone"
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
          <select
            name="gender"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            defaultValue={0}
            required
          >
            <option disabled value={0}>Select an option</option>
            <option>M</option>
            <option>F</option>
          </select>
          <label
            for="gender"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Gender
          </label>
        </div>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_email"
          class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create Suc Admin
      </button>
    </form>
  );
};

const SucursalAdminsTable = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              F Name
            </th>
            <th scope="col" class="px-6 py-3">
              L Name
            </th>
            <th scope="col" class="px-6 py-3">
              Gender
            </th>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>

          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Juan Carlos
            </th>
            <td class="px-6 py-4">Ramirez</td>
            <td class="px-6 py-4">Masculino</td>
            <td class="px-6 py-4">Pinares, UTP</td>
            <td class="px-6 py-4">juan_ramirez@gmail.com</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Admins;
