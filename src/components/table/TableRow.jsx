const TableRow = ({ entity, setShowTable }) => {
  const data = Object.values(entity);

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {data.map((value) => {
        return <td class="px-6 py-4">{value}</td>;
      })}

      <td class="px-6 py-4 text-right">
        <a
          onClick={() => {
            
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
