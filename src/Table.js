import React from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

const Table = (props) => {
  const { tableName, rowData, colDefs, setClickedRow } = props;
  const rowClickHandler = (p) => {
    setClickedRow({
      name: tableName,
      row: p,
    });
  };

  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 200 }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        onRowClicked={rowClickHandler}
      />
    </div>
  );
};

export default Table;
