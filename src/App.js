import "./App.css";
import { useState } from "react";
import TableWrapper from "./TableWrapper";

function App() {
  const [clickedRow, setClickedRow] = useState(null);
  // Row Data: The data to be displayed.
  const rowData1 = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Row Data: The data to be displayed.
  const rowData2 = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  const data1 = {
    name: "Table1",
    data: rowData1,
  };

  const data2 = {
    name: "Table2",
    data: rowData2,
  };

  return (
    <div className="App" style={{}}>
      <TableWrapper
        name="Table1"
        rowData={data1}
        clickedRow={clickedRow}
        setClickedRow={setClickedRow}
      />
      <TableWrapper
        name="Table2"
        rowData={data2}
        clickedRow={clickedRow}
        setClickedRow={setClickedRow}
      />
    </div>
  );
}

export default App;
