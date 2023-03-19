import Sidebar from "components/Sidebar";
import SidebarOption from "components/SidebarOption";
import InformationLayout from "layouts/private_layout/InformationLayout";
import { useEffect, useState, useRef } from "react";
import EntityForm from "components/EntityForm";
import FormGridHeader from "components/form/FormGridHeader";
import FormInput from "components/form/FormInput";
import FormInputSelect from "components/form/FormInputSelect";

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
          <SucursalsTable sucursals={sucursals} setShowTable={setShowTable} />
        }
        form={
          <EntityForm
            entities={sucursals}
            setEntities={setSucursals}
            setShowTable={setShowTable}
          >
            <FormGridHeader>
              <FormInput
                type="number"
                name="id"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="ID"
              />
              <FormInput
                type="text"
                name="name"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="City"
              />
              <FormInputSelect name="admin" labelText="Admin" required={false}>
                <option>Cristian Quesada</option>
                <option>Samir Nasri</option>
                <option>Cal Newport</option>
              </FormInputSelect>
              <FormInput
                type="tel"
                name="phone"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="Phone"
              />
              <FormInput
                type="number"
                name="employees"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="# Employees"
              />
              <FormInput
                type="number"
                name="hotels"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="# Hotels"
              />
            </FormGridHeader>

            <FormInput
              type="text"
              name="address"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Address"
            />
          </EntityForm>
        }
      />
    </div>
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

export default Sucursales;
