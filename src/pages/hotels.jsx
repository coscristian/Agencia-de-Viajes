import React, { useEffect, useState } from "react";
import Sidebar from "components/Sidebar";
import Table from "components/table/Table";
import InformationLayout from "layouts/private_layout/InformationLayout";
import EntityForm from "components/EntityForm";
import FormGridHeader from "components/form/FormGridHeader";
import FormInput from "components/form/FormInput";
import FormInputSelect from "components/form/FormInputSelect";
import TableBody from "components/table/TableBody";
import TableHeader from "components/table/TableHeader";
import TableRow from "components/table/TableRow";
import TableHeaderColumn from "components/table/TableHeaderColumn";
import SidebarOption from "components/SidebarOption";

const hotelsBackend = [
  {
    id: 1,
    name: "Movich",
    address: "Cerritos",
    phone: "3207101556",
  },
  {
    id: 2,
    name: "DeCameron",
    address: "La virginia",
    phone: "3207101556",
  },
  {
    id: 3,
    name: "Panamá",
    address: "Cuba",
    phone: "3207101556",
  },
  {
    id: 4,
    name: "Movich",
    address: "Cerritos",
    phone: "3207101556",
  },
];

const Hotels = () => {
  const [showTable, setShowTable] = useState(true);
  const [hotels, setHotels] = useState([]);

  useEffect(()=>{
    setHotels(hotelsBackend);
  }, []);

  return (
    <div className="flex flex-row bg-gray-100">
      <Sidebar>
        <SidebarOption optionText="Filter by" />
        <SidebarOption optionText="Order By" />
        <SidebarOption optionText="Etc" />
      </Sidebar>
      <InformationLayout
        tableTitle="Available Hotels"
        buttonTableText="Create Hotel"
        formTitle="Creating Hotel"
        buttonFormText="Show All Hotels"
        showTable={showTable}
        setShowTable={setShowTable}
        table={<HotelTable hotels={hotels} setShowTable={setShowTable} />}
        form={
          <EntityForm
          entities={hotels}
          setEntities={setHotels}
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
              labelText="Hotel Name"
            />
            <FormInputSelect name="city" labelText="City" required={true}>
              <option>Pereira</option>
              <option>Cali</option>
              <option>Medellín</option>
            </FormInputSelect>
            <FormInput
              type="tel"
              name="phone"
              placeholder=""
              required={true}
              editingInfo={false}
              labelText="Phone"
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
};

const HotelTable = ({hotels, setShowTable}) => {
  console.log(hotels)
  return (
    <>
      <Table>
        <TableHeader>
          <TableHeaderColumn text="ID" />
          <TableHeaderColumn text="Name" />
          <TableHeaderColumn text="Address" />
          <TableHeaderColumn text="Phone" />
          <TableHeaderColumn text="Edit" />
        </TableHeader>
        <TableBody>
          {hotels.map((hotel)=>{
            return(<TableRow entity={hotel} setShowTable={setShowTable}/>)
          })}

        </TableBody>
      </Table>
    </>
  );
};

export default Hotels;
