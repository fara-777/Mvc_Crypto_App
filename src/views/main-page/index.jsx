import millify from "millify";
import Loading from "../loading";
import LoadMoreController from "../../controllers/load-more";
import { useNavigate } from "react-router";

export default function MainPageView({ coins }) {
  const navigate = useNavigate();

  // Fiyat değişimine göre metin rengini ayarlayan bir fonksiyon
  const getChangeColor = (changePercent) => {
    return changePercent < 0 ? " text-danger " : "text-success";
  };

  return (
    <>
      <div className="container mt-5">
        {!coins && (
          <p className="d-flex align-items-center justify-content-center">
            <Loading />
          </p>
        )}

        {coins && (
          <table className="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Coin</th>
                <th>Fiyat</th>
                <th>Market Hacmi</th>
                <th>Degisim (24s)</th>
                <th>% Degisim (24s)</th>
              </tr>
            </thead>
            <tbody>
              {coins?.map((coin, i) => (
                <tr key={i} onClick={() => navigate(`/coin/${coin.id}`)}>
                  <td>{i + 1}</td>
                  <td>
                    <span
                      className={`text-warning me-1 ${getChangeColor(
                        coin.changePercent24Hr
                      )}`}
                    >
                      {coin.symbol}
                    </span>
                    <span className="coin-name">/{coin.name}</span>
                  </td>
                  <td>{millify(coin.priceUsd)}</td>
                  <td>{millify(coin.marketCapUsd)}</td>
                  <td>{millify(coin.volumeUsd24Hr)}</td>
                  <td className={getChangeColor(coin.changePercent24Hr)}>
                    %{millify(coin.changePercent24Hr)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <LoadMoreController />
      </div>
    </>
  );
}
