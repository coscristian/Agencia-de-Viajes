import React from "react";

const Table = (props) => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {props.children}
          {/*sucursals.map((sucursal) => {
            return (
              
            );
          })*/}
      </table>
    </div>
  );
};









export default Table;
