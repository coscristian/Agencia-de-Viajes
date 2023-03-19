import Sidebar from "components/Sidebar";
import SucursalCard from "components/SucursalCard";
import pereira from "media/pereira.jpg";
import cali from "media/cali.jpg";
import SidebarOption from "components/SidebarOption";
import InformationLayout from "layouts/private_layout/InformationLayout";
import { useEffect, useState, useRef } from "react";
import EntityForm from "components/EntityForm";

const sucursalsBackend = [
  {
    id: "1",
    name: "Pereira",
    address: "Pinares",
    phone: "3212458",
    employees: 8,
    hotels: 5,
    admin: "Cristian Quesada",
  },
  {
    id: "2",
    name: "Manizales",
    address: "Alameda",
    phone: "3104856",
    employees: 4,
    hotels: 3,
    admin: "Santiago Buitrago",
  },
  {
    id: "3",
    name: "Cali",
    address: "Jumbo",
    phone: "3692154",
    employees: 7,
    hotels: 2,
    admin: "Andres Felipe",
  },
];

function Sucursales() {
  const [sucursals, setSucursals] = useState([]);
  const [showTable, setShowTable] = useState(true);

  useEffect(() => {
    // Get Data from Backend
    setSucursals(sucursalsBackend);
  }, []);

  return (
    <div className="flex flex-row bg-gray-100">
      <Sidebar>
        <SidebarOption optionText="Filter by" />
        <SidebarOption optionText="Order by" />
        <SidebarOption optionText="Hola Bro" />
      </Sidebar>
      <InformationLayout
        tableTitle="Available Sucursals"
        buttonTableText="Create Sucursal"
        formTitle="Creating Sucursal"
        buttonFormText="Show All Sucursals"
        showTable={showTable}
        setShowTable={setShowTable}
        table={
          <SucursalsTable
            sucursals={sucursals}
            setShowTable={setShowTable}
          />
        }
        form={
          <EntityForm />
        }
      />
    </div>
  );
}

const ElementoPrueba = () => {
    return (
        <p>Elemento de prueba</p>
    );
}

const SucursalsTable = ({ sucursals, setShowTable }) => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
            <th scope="col" class="px-6 py-3">
              Phone
            </th>
            <th scope="col" class="px-6 py-3">
              # Employees
            </th>
            <th scope="col" class="px-6 py-3">
              # Hotels
            </th>
            <th scope="col" class="px-6 py-3">
              Admin
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sucursals.map((sucursal) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {sucursal.id}
                </th>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {sucursal.name}
                </td>
                <td class="px-6 py-4">{sucursal.address}</td>
                <td class="px-6 py-4">{sucursal.phone}</td>
                <td class="px-6 py-4">{sucursal.employees}</td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {sucursal.hotels}
                </td>
                <td class="px-6 py-4">{sucursal.admin}</td>
                <td class="px-6 py-4 text-right">
                  <a
                    onClick={() => {
                      //setEditAdminInfo(true);
                      setShowTable(false);
                      /*setSucursalAdminInfo({
                          id: currentAdmin.id, 
                          name: currentAdmin.name,
                          lastName: currentAdmin.lastName,
                          gender: currentAdmin.gender,
                          address: currentAdmin.address,
                          sucursal: currentAdmin.sucursal,
                          email: currentAdmin.email
                        });*/
                    }}
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormCreateSucursal= ({ adminsList, setShowTable, setAdmins, editAdminInfo, defaultSucAdminInfo, submitInfoText }) => {
  
    const form = useRef(null);
  
    const submitCreateAdminForm = (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
      const newAdmin = {};
  
      fd.forEach((value, key) => {
        newAdmin[key] = value;
      });
  
      setShowTable(true);
      setAdmins([...adminsList, newAdmin]);
    };
  
    return (
      <form ref={form} onSubmit={submitCreateAdminForm}>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="id"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={editAdminInfo ? defaultSucAdminInfo.id: ""}
              disabled={editAdminInfo ? true: false}
            />
            <label
              for="id"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ID
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={editAdminInfo ? defaultSucAdminInfo.name: ""}
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
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={editAdminInfo ? defaultSucAdminInfo.lastName: ""}
            />
            <label
              for="lastName"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <select
              name="gender"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={0}
              required
            >
              <option disabled value={0}>
                Select an option
              </option>
              <option>Masculino</option>
              <option>Femenino</option>
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
            defaultValue={editAdminInfo ? defaultSucAdminInfo.email: ""}
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
            defaultValue={editAdminInfo ? defaultSucAdminInfo.address: ""}
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
      </form>
    );
  };

export default Sucursales;
