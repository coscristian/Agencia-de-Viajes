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
import SellerRow from "components/form/sellers/SellerRow";
import TableHeaderColumn from "components/table/TableHeaderColumn";
import SucursalesService from "services/SucursalesService";
import axios from "axios";


const sellersBackend = [
  {
    dni: "1087489",
    name: "Camila",
    lastName: "Montoya",
    phone: "320456987",
    sucursal: "Medellín",
    address: "Pinares"
    
  },
  {
    dni: "1189635",
    name: "Andrea",
    lastName: "Gallardo",
    phone: "320456987",
    sucursal: "Pereira",
    address: "Pinares"
    
  },
  {
    dni: "4785212",
    name: "Camilo",
    lastName: "Perez",
    phone: "320456987",
    sucursal: "Bogotá",
    address: "Pinares"
  },
];

const Sellers = () => {
  const [showTable, setShowTable] = useState(true);
  const [sellers, setSellers] = useState([]);
  const [sucursales, setSucursales] = useState([]);

  useEffect(() => {
    setSellers(sellersBackend);
    SucursalesService.getSucursales().then(AsyncSucursales =>{
      setSucursales(AsyncSucursales);
    });
    //setSucursales(SucursalesService.getSucursales());
    console.log(sucursales);
    console.log("Hola")
    //console.log(SucursalesService.getSucursales())
    /*
    var options = {
      method: "GET",
      url: "http://localhost:8080/admin/sucursales",
      headers: { "Content-Type": "application/json" },
    };

    axios
      .request(options)
      .then(function (response) {
        setSucursales(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
      */
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
              <FormInput
                type="text"
                name="apellidos"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="Apellidos"
              />
              <FormInputSelect
                name="cod_sucursal"
                labelText="Sucursal"
                required={true}
              >{
                sucursales.map((sucursal) => {
                  return <option>{sucursal["ciudad"]}</option>
                })
              }

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
          <TableHeaderColumn text="Código" />
          <TableHeaderColumn text="Nombre" />
          <TableHeaderColumn text="Apellido" />
          <TableHeaderColumn text="Telefono" />
          <TableHeaderColumn text="Sucursal" />
          <TableHeaderColumn text="Dirección" />
          <TableHeaderColumn text="Info Trabajo" />
          {/*
          <TableHeaderColumn text="correo" />
          <TableHeaderColumn text="Asignado por" />
          <TableHeaderColumn text="Fecha Asignación" />
          <TableHeaderColumn text="Fecha Inicio" />
          <TableHeaderColumn text="Fecha Fin" />
          */
        }
          <TableHeaderColumn text="Edit" />
        </TableHeader>
        <TableBody>
          {sellers.map((seller) => {
            return <SellerRow entity={seller} setShowTable={setShowTable} />;
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Sellers;
