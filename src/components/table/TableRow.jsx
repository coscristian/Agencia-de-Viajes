const TableRow = (props) => {
    
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {sucursal.id}
      </th>
        {
            /*
        for(const property in props.rowData){
            <td class="px-6 py-4">{props.rowData[property]}</td>
        }*/
        }
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
};

export default TableRow;
