import React, { useState } from "react";

function ListData() {
  const [data, setData] = useState("");
  const [listData, setListData] = useState([]);

  const handleData = (e) => {
    const value = e.target.value;
    setData(value);
  };

  const handleList = () => {
    setListData([...listData, data]);
    setData("");
  };

  const deleteItem = (currentValue) => {
    const filterList = listData.filter((item) => item !== currentValue);
    setListData(filterList);
  };

  return (
    <>
      <center>
        <div>
          <input onChange={handleData} value={data}></input>{" "}
          <button onClick={handleList}>Add item</button>
          <ul>
            {listData.length > 0 &&
              listData.map((item, index) => (
                <li key={index} onClick={() => deleteItem(item)}>
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </center>
    </>
  );
}

export default ListData;
