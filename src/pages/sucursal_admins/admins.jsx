import Sidebar from "components/Sidebar";
import SidebarOption from "components/SidebarOption";
import InformationLayout from "layouts/private_layout/InformationLayout";
import { useEffect, useState } from "react";
import EntityForm from "components/EntityForm";
import FormGridHeader from "components/form/FormGridHeader";
import FormInput from "components/form/FormInput";
import Table from "components/table/Table";
import TableBody from "components/table/TableBody";
import TableHeader from "components/table/TableHeader";
import TableRow from "components/table/TableRow";
import TableHeaderColumn from "components/table/TableHeaderColumn";
import FormInputSelect from "components/form/FormInputSelect";

const sucursalAdminsBackend = [
  {
    id: "1297685647",
    name: "Juan Carlos",
    lastName: "Ramirez",
    gender: "Masculino",
    address: "Pinares",
    email: "juan_ramirez@gmail.com",
    sucursal: "Pereira",
  },
  {
    id: "2787585646",
    name: "Sebastian",
    lastName: "Mena Quezada",
    gender: "Masculino",
    address: "Medellín",
    email: "sebastian@gmail.com",
    sucursal: "Medellín",
  },
  {
    id: "1498685647",
    name: "Yuldavis",
    lastName: "Cossio Perea",
    gender: "Femenino",
    address: "Tinajas",
    email: "yulda2007@gmail.com",
    sucursal: "Bogotá",
  },
  {
    id: "1497685647",
    name: "Juan José",
    lastName: "Quesada Cossio",
    gender: "Masculino",
    address: "Tinajas",
    email: "juan_gg@gmail.com",
    sucursal: "Pereira",
  },
];

const Admins = () => {
  /*
  const [showTable, setShowTable] = useState(true);
  const [titleText, setTitleText] = useState("Available Sucursal Admins");
  const [buttonText, setButtonText] = useState("Add Admin");
  const [editAdminInfo, setEditAdminInfo] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [sucusarlAdminInfo, setSucursalAdminInfo] = useState({});
  const [idAdmin, setIdAdmin] = useState(0);
  const [submitInfoText, setSubmitInfoText] = useState("Create Suc Admin");
*/
  const [showTable, setShowTable] = useState(true);
  const [sucursalAdmins, setSucursalAdmins] = useState([]);

  useEffect(() => {
    setSucursalAdmins(sucursalAdminsBackend);
  }, []);
  /*
  useEffect(()=>{
    if(editAdminInfo){
      setSubmitInfoText("Update Suc Admin");
    }else{
      setSubmitInfoText("Create Suc Admin");
    }
  },[editAdminInfo]);

  useEffect(() => {
    setAdmins(backendData);
  }, []);

  useEffect(() => {
    if (showTable) {
      setTitleText("Available Sucursal Admins");
      setButtonText("Add Admin");
      setEditAdminInfo(false);
    } else {
      setTitleText("Create Sucursal Admin");
      setButtonText("Show All Admins");
    }
  }, [showTable]);
*/
  return (
    <div className="flex flex-row bg-gray-100">
      <Sidebar>
        <SidebarOption optionText="Filter by" />
        <SidebarOption optionText="Order By" />
        <SidebarOption optionText="Etc" />
      </Sidebar>
      <InformationLayout
        tableTitle="Available Sucursal Admins"
        buttonTableText="Create Sucursal Admin"
        formTitle="Creating Sucursal Admin"
        buttonFormText="Show All Sucursal Admins"
        showTable={showTable}
        setShowTable={setShowTable}
        table={
          <SucursalAdminsTable
            sucursalAdmins={sucursalAdmins}
            setShowTable={setShowTable}
          />
        }
        form={
          <EntityForm
            entities={sucursalAdmins}
            setEntities={setSucursalAdmins}
            setShowTable={setShowTable}
          >
            <FormGridHeader>
              <FormInput
                type="text"
                name="dni"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="DNI"
              />
              <FormInput
                type="text"
                name="name"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="Name"
              />
              <FormInput
                type="text"
                name="lastname"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="Last Name"
              />
              <FormInputSelect name="gender" labelText="Gender" required={true}>
                <option>Male</option>
                <option>Female</option>
              </FormInputSelect>
            </FormGridHeader>
            <FormInputSelect
              name="sucursal"
              labelText="Sucursal"
              required={true}
            >
              <option>Pereira</option>
              <option>Cali</option>
              <option>Medellín</option>
              <option>Bogotá</option>
            </FormInputSelect>
            <FormInput
              type="text"
              name="address"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Address"
            />
            <FormInput
              type="email"
              name="email"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Email"
            />
          </EntityForm>
        }
      />
    </div>
  );
};

const SucursalAdminsTable = ({ sucursalAdmins, setShowTable }) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderColumn text="DNI" />
        <TableHeaderColumn text="Name" />
        <TableHeaderColumn text="Last Name" />
        <TableHeaderColumn text="Gender" />
        <TableHeaderColumn text="Address" />
        <TableHeaderColumn text="Email" />
        <TableHeaderColumn text="Sucursal" />
        <TableHeaderColumn text="Edit" />
      </TableHeader>
      <TableBody>
        {sucursalAdmins.map((sucursalAdmin) => {
          return (
            <TableRow entity={sucursalAdmin} setShowTable={setShowTable} />
          );
        })}
      </TableBody>
    </Table>
  );
};
/*
const FormCreateAdmin = ({
  adminsList,
  setShowTable,
  setAdmins,
  editAdminInfo,
  defaultSucAdminInfo,
  submitInfoText,
}) => {
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
            defaultValue={editAdminInfo ? defaultSucAdminInfo.id : ""}
            disabled={editAdminInfo ? true : false}
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
            defaultValue={editAdminInfo ? defaultSucAdminInfo.name : ""}
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
            defaultValue={editAdminInfo ? defaultSucAdminInfo.lastName : ""}
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
    </form>
  );
};


const SucursalAdminsTable = ({
  setShowTable,
  adminsList,
  setEditAdminInfo,
  setSucursalAdminInfo,
}) => {
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
              Last Name
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
              Sucursal
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {adminsList.map((currentAdmin) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {currentAdmin.id}
                </th>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {currentAdmin.name}
                </td>
                <td class="px-6 py-4">{currentAdmin.lastName}</td>
                <td class="px-6 py-4">{currentAdmin.gender}</td>
                <td class="px-6 py-4">{currentAdmin.address}</td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {currentAdmin.sucursal}
                </td>
                <td class="px-6 py-4">{currentAdmin.email}</td>
                <td class="px-6 py-4 text-right">
                  <a
                    onClick={() => {
                      setEditAdminInfo(true);
                      setShowTable(false);
                      setSucursalAdminInfo({
                        id: currentAdmin.id,
                        name: currentAdmin.name,
                        lastName: currentAdmin.lastName,
                        gender: currentAdmin.gender,
                        address: currentAdmin.address,
                        sucursal: currentAdmin.sucursal,
                        email: currentAdmin.email,
                      });
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
*/
export default Admins;
