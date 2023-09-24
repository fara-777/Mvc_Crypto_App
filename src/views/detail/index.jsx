import millify from "millify";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function DetailView({ model }) {
  return (
    <div className="container">
      <div className=" row gap-3">
        {model.infoFields.map((info, i) => (
          <div
            key={i}
            className="bg-warning col-3 rounded text-dark text-center  "
          >
            <p className=" fs-3">{info.icon}</p>
            <h3>{info.label}</h3>
            <p className="fs-4">{millify(info.value)}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 w-100">
        <Line data={model.chartData} />
      </div>
    </div>
  );
}
