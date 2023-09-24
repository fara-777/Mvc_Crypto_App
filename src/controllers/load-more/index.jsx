import { useSearchParams } from "react-router-dom";
import LoadMoreView from "../../views/load-more";

export default function LoadMoreController() {
  const [params, setParams] = useSearchParams();
  const handleClick = () => {
    // guncel sayfa sayisini alir
    const pageNumber = params.get("page");
    //url'deki sayfa sayisina 1 ekler
    setParams({ page: +pageNumber + 15 });
  };
  return (
    <>
      <LoadMoreView handleClick={handleClick} />
    </>
  );
}
