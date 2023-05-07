import Sidebar from "components/Sidebar";
import SidebarOption from "components/SidebarOption";
import InformationLayout from "layouts/private_layout/InformationLayout";
import { useEffect, useRef, useState } from "react";
import FormGridHeader from "components/form/FormGridHeader";
import FormInput from "components/form/FormInput";
import Table from "components/table/Table";
import TableBody from "components/table/TableBody";
import TableHeader from "components/table/TableHeader";
import TableRow from "components/table/TableRow";
import TableHeaderColumn from "components/table/TableHeaderColumn";
import CustomerForm from "components/form/customers/CustomerForm";
import axios from "axios";

const Customers = () => {
  const [showTable, setShowTable] = useState(true);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    if (showTable) {
      var options = {
        method: "GET",
        url: "http://localhost:8080/admin/turistas",
        headers: { "Content-Type": "application/json" },
      };

      axios
        .request(options)
        .then(function (response) {
          setCustomers(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [showTable]);

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
        table={
          <CustomersTable customers={customers} setShowTable={setShowTable} />
        }
        form={
          <CustomerForm
            entities={customers}
            setEntities={setCustomers}
            setShowTable={setShowTable}
          >
            <FormGridHeader>
              <FormInput
                type="text"
                name="codigo"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="Código"
              />
              <FormInput
                type="text"
                name="nombre"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="Nombre"
              />
            </FormGridHeader>
            <FormInput
              type="text"
              name="apellidos"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Apellidos"
            />
            <FormInput
              type="tel"
              name="telefono"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Telefono"
            />
            <FormInput
              type="text"
              name="direccion"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Calle"
            />
            <FormInput
              type="text"
              name="ciudad"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Ciudad"
            />
          </CustomerForm>
        }
      />
    </div>
  );
};

const CustomersTable = ({ customers, setShowTable }) => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableHeaderColumn text="Código" />
          <TableHeaderColumn text="Nombre" />
          <TableHeaderColumn text="Apellidos" />
          <TableHeaderColumn text="Dirección" />
          <TableHeaderColumn text="Ciudad" />
          <TableHeaderColumn text="Telefono" />
          <TableHeaderColumn text="Activo" />
          <TableHeaderColumn text="Edit" />
        </TableHeader>
        <TableBody>
          {customers.map((customer) => {
            const c = {
              codigo: customer["codigo"],
              nombre: customer["nombre"],
              apellidos: customer["apellidos"],
              direccion: customer["direccion"],
              ciudad: customer["ciudad"],
              telefono: customer["telefono"],
              activo: customer["activo"],
            };
            return <TableRow entity={c} setShowTable={setShowTable} />;
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Customers;
