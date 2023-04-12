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

const customersBackend = [
  {
    dni: "1087489",
    name: "Camila",
    lastName: "Montoya",
    sucursal: "Medellín",
    address: "Pinares",
    phone: "320456987",
    email: "camila_montoya@gmail.com",
  },
  {
    dni: "1189635",
    name: "Andrea",
    lastName: "Gallardo",
    sucursal: "Pereira",
    address: "Pinares",
    phone: "320456987",
    email: "andrea_gallardo@gmail.com",
  },
  {
    dni: "4785212",
    name: "Camilo",
    lastName: "Perez",
    sucursal: "Bogotá",
    address: "Pinares",
    phone: "320456987",
    email: "camilo_perez@gmail.com",
  },
];

const Customers = () => {
  const [showTable, setShowTable] = useState(true);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(customersBackend);
  }, []);

  return (
    <div className="flex flex-row bg-gray-100">
      <Sidebar>
        <SidebarOption optionText="Filter by" />
        <SidebarOption optionText="Order By" />
        <SidebarOption optionText="Etc" />
      </Sidebar>
      <InformationLayout
        tableTitle="Available Customers"
        buttonTableText="Create Customer"
        formTitle="Creating Customer"
        buttonFormText="Show All Customers"
        showTable={showTable}
        setShowTable={setShowTable}
        table={<CustomersTable customers={customers} setShowTable={setShowTable} />}
        form={
          <EntityForm
            entities={customers}
            setEntities={setCustomers}
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
            </FormGridHeader>

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
            <FormInput
              type="tel"
              name="phone"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Phone"
            />
          </EntityForm>
        }
      />
    </div>
  );
}

const CustomersTable = ({customers, setShowTable}) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableHeaderColumn text="DNI" />
          <TableHeaderColumn text="Name" />
          <TableHeaderColumn text="Last Name" />
          <TableHeaderColumn text="Address" />
          <TableHeaderColumn text="Sucursal" />
          <TableHeaderColumn text="Phone" />
          <TableHeaderColumn text="Email" />
          <TableHeaderColumn text="Edit" />
        </TableHeader>
        <TableBody>
          {customers.map((customer) => {
            return <TableRow entity={customer} setShowTable={setShowTable} />;
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default Customers;