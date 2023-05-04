const SellerRow = ({ entity, setShowTable }) => {
  const data = Object.values(entity);

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {data.map((value) => {
        if (value === true) {
          return (
            <td class="px-6 py-4">
              <span class="flex w-3 h-3 bg-green-500 rounded-full"></span>
            </td>
          );
        } else if (value === false) {
          return (
            <td class="px-6 py-4">
              <span class="flex w-3 h-3 bg-red-500 rounded-full"></span>
            </td>
          );
        }
        return <td class="px-6 py-4">{value}</td>;
      })}

      <td class="px-6 py-4 text-right">
        <a        
          onClick={() => {
            // Aquí mostrar modal con informacion de la asignacion del trabajo
            setShowTable(false);
          }}
          href="#"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Ver
        </a>
      </td>

      <td class="px-6 py-4 text-right">
        <a
          onClick={() => {
            setShowTable(false);
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

export default SellerRow;
