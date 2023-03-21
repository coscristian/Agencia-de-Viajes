const TableHeaderColumn = (props) => {
  return (
    <th scope="col" class="px-6 py-3">
      {props.text}
    </th>
  );
};

export default TableHeaderColumn;
