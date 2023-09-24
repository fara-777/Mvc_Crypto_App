import { useParams } from "react-router";
import DetailView from "../../views/detail";
import { useEffect, useState } from "react";
import axios from "axios";
import { InfoLabel } from "../../model/detail";

export default function DetailController() {
  const { id } = useParams();

  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState(null);

  useEffect(() => {
    axios.get(`/${id}`).then((res) => setCoin(res.data.data));
  }, []);

  useEffect(() => {
    const start = Math.floor(new Date("23.08.12").getTime() / 1000);
    const end = Math.floor(new Date().getTime() / 1000);
    axios
      .get(`/${id}/history?interval=d1`)
      .then((res) => setHistory(res.data.data));
  }, []);
  // model classindan ornek olusturma
  const model = new InfoLabel(coin, history);
  return (
    <>
      <DetailView model={model} />
    </>
  );
}
