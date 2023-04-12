import Sidebar from "components/Sidebar";
import SidebarOption from "components/SidebarOption";
import InformationLayout from "layouts/private_layout/InformationLayout";
import { useEffect, useState } from "react";
import EntityForm from "components/EntityForm";
import FormGridHeader from "components/form/FormGridHeader";
import FormInput from "components/form/FormInput";
import FormInputSelect from "components/form/FormInputSelect";
import Table from "components/table/Table";
import TableBody from "components/table/TableBody";
import TableHeader from "components/table/TableHeader";
import TableRow from "components/table/TableRow";
import TableHeaderColumn from "components/table/TableHeaderColumn";

const sellersBackend = [
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

const Sellers = () => {
  const [showTable, setShowTable] = useState(true);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    setSellers(sellersBackend);
  }, []);

  return (
    <div className="flex flex-row bg-gray-100">
      <Sidebar>
        <SidebarOption optionText="Filter by" />
        <SidebarOption optionText="Order By" />
        <SidebarOption optionText="Etc" />
      </Sidebar>
      <InformationLayout
        tableTitle="Available Sellers"
        buttonTableText="Create Seller"
        formTitle="Creating Seller"
        buttonFormText="Show All Sellers"
        showTable={showTable}
        setShowTable={setShowTable}
        table={<SellersTable sellers={sellers} setShowTable={setShowTable} />}
        form={
          <EntityForm
            entities={sellers}
            setEntities={setSellers}
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
};

const SellersTable = ({ sellers, setShowTable }) => {
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
          {sellers.map((seller) => {
            return <TableRow entity={seller} setShowTable={setShowTable} />;
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Sellers;
