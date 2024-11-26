import React, { useState, useMemo } from "react";
import Table from "./Table";

const TableWrapper = (props) => {
  const { name, rowData, clickedRow, setClickedRow } = props;

  const isDisabled = (p) => {
    return (
      clickedRow &&
      clickedRow.name !== rowData.name &&
      clickedRow.row.data.make === p.data.make
    );
  };

  const isChecked = (p) => {
    return (
      clickedRow &&
      clickedRow.name === rowData.name &&
      clickedRow.row.data.make === p.data.make
    );
  };

  const MySelect = (p) => {
    return (
      <>
        <input
          title={
            isDisabled(p)
              ? "This is duplicate record, hence can't be compared"
              : ""
          }
          name={name}
          type="radio"
          disabled={isDisabled(p)}
          value={p.data.value}
          checked={isChecked(p)}
          onChange={() => {}}
        />
      </>
    );
  };

  // Column Definitions: Defines the columns to be displayed.
  const colDefs = useMemo(() => {
    return [
      { field: "selected", cellRenderer: MySelect },
      { field: "make" },
      { field: "model" },
      { field: "price" },
      { field: "electric" },
    ];
  }, [clickedRow]);

  return (
    <Table
      rowData={rowData.data}
      colDefs={colDefs}
      tableName={name}
      setClickedRow={setClickedRow}
    />
  );
};

export default TableWrapper;
