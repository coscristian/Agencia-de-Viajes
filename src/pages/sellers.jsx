import Sidebar from "components/Sidebar";
import SidebarOption from "components/SidebarOption";
import InformationLayout from "layouts/private_layout/InformationLayout";
import { useEffect, useState } from "react";
import FormGridHeader from "components/form/FormGridHeader";
import FormInput from "components/form/FormInput";
import FormInputSelect from "components/form/FormInputSelect";
import Table from "components/table/Table";
import TableBody from "components/table/TableBody";
import TableHeader from "components/table/TableHeader";
import SellerRow from "components/form/sellers/SellerRow";
import TableHeaderColumn from "components/table/TableHeaderColumn";
import SucursalesService from "services/SucursalesService";
import VendedorService from "services/VendedorService";
import AdminGeneralService from "services/AdminGeneralService";
import SellerForm from "components/form/sellers/SellerForm";

const Sellers = () => {
  const [showTable, setShowTable] = useState(true);
  const [sucursales, setSucursales] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  const [adminsGeneral, setAdminsGeneral] = useState([]);

  useEffect(() => {
    SucursalesService.getSucursales().then((AsyncSucursales) => {
      setSucursales(AsyncSucursales);
    });
    VendedorService.getVendedores().then((AsyncVendedores) => {
      setVendedores(AsyncVendedores);
      //console.log(AsyncVendedores);
    });
    AdminGeneralService.getAdminsGeneral().then((AsyncAdminsGeneral) => {
      setAdminsGeneral(AsyncAdminsGeneral);
    });

    //setSucursales(SucursalesService.getSucursales());
    console.log(sucursales);
    console.log("Hola");
    console.log(vendedores);
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
        table={
          <SellersTable sellers={vendedores} setShowTable={setShowTable} />
        }
        form={
          <SellerForm
            entities={vendedores}
            setEntities={vendedores}
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
              <FormInput
                type="tel"
                name="telefono"
                placeholder=""
                required={true}
                editingInfo={false}
                labelText="Telefono"
              />
              <FormInputSelect
                name="cod_sucursal"
                labelText="Sucursal"
                required={true}
              >
                {sucursales.map((sucursal) => {
                  return (
                    <option value={sucursal["codigo"]}>
                      {sucursal["ciudad"]}
                    </option>
                  );
                })}
              </FormInputSelect>
              <FormInputSelect
                name="cod_admin_general"
                labelText="Admin General"
                required={true}
              >
                {adminsGeneral.map((admin) => {
                  return (
                    <option value={admin["codigo"]}>{admin["nombre"]}</option>
                  );
                })}
              </FormInputSelect>
            </FormGridHeader>

            <FormInput
              type="date"
              name="fecha_inicio"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Fecha Inicio Contrato"
            />

            <FormInput
              type="date"
              name="fecha_fin"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Fecha Fin Contrato"
            />
          </SellerForm>
        }
      />
    </div>
  );
};

const SellersTable = ({ sellers, setShowTable }) => {
  const submitEdit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form onSubmit={submitEdit}>
      <Table>
        <TableHeader>
          <TableHeaderColumn text="Código" />
          <TableHeaderColumn text="Nombre" />
          <TableHeaderColumn text="Apellido" />
          <TableHeaderColumn text="Telefono" />
          <TableHeaderColumn text="Activo" />
          <TableHeaderColumn text="Info Trabajo" />
          {/*
          <TableHeaderColumn text="correo" />
          <TableHeaderColumn text="Asignado por" />
          <TableHeaderColumn text="Fecha Asignación" />
          <TableHeaderColumn text="Fecha Inicio" />
          <TableHeaderColumn text="Fecha Fin" />
          */}
          <TableHeaderColumn text="Edit" />
        </TableHeader>
        <TableBody>
          {sellers.map((seller) => {
            const s = {
              codigo: seller["codigo"],
              nombre: seller["nombre"],
              apellidos: seller["apellidos"],
              telefono: seller["telefono"],
              activo: seller["activo"],
            };

            return <SellerRow entity={s} setShowTable={setShowTable} />;
          })}
        </TableBody>
      </Table>
    </form>
  );
};

export default Sellers;
