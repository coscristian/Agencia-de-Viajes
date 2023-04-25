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
    email: "juanjosequesadacossio@gmail.com",
    sucursal: "Pereira",
  },
];

const Admins = () => {

  const [showTable, setShowTable] = useState(true);
  const [sucursalAdmins, setSucursalAdmins] = useState([]);

  useEffect(() => {
    setSucursalAdmins(sucursalAdminsBackend);
  }, []);
  
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

export default Admins;
