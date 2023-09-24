import { useEffect, useState } from "react";
import MainPageView from "../../views/main-page";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

axios.defaults.baseURL = "https://api.coincap.io/v2/assets";

export default function MainPageController() {
  const [coins, setCoins] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const page = params.get("page");
    // url'de sayfa parametresi yoksa apideki 0 verileri getir
    if (!page) {
      setParams({ page: "0" });
      return;
    }
    // ilgili sayfanin verilerini cekme
    axios
      .get(`/?limit=15&offset=${page}`)
      .then((res) => setCoins([...coins, ...res.data.data]));
  }, [params]);
  return (
    <>
      <MainPageView coins={coins} />
    </>
  );
}
