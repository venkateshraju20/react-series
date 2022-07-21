import axios from "axios";
import { useEffect, useState } from "react";

function useCustomAPI(url) {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(url);
    setDatas(res.data);
  };

  useEffect(() => fetchData, [url]);

  return [datas];
}

export default useCustomAPI;
