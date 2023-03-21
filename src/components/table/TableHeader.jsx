const TableHeader = (props) => {
  return (
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>{props.children}</tr>
    </thead>
  );
};

export default TableHeader;
