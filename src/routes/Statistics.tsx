import { VictoryHistogram, VictoryChart } from "victory";
import { DATA } from "../data/data";

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const HISTOGRAM_BINS = MONTHS.map((month) => new Date(2022, month, 1));

export default function Statistics() {
  return (
    <main style={{ margin: "100px auto", maxWidth: "768px" }}>
      <h2 style={{ textAlign: "center" }}>Posts</h2>
      <VictoryChart>
        <VictoryHistogram
          style={{
            data: {
              fill: "hsl(355, 88%, 67%)",
              stroke: "hsl(355, 10%, 25%)",
            },
          }}
          cornerRadius={5}
          data={DATA}
          bins={HISTOGRAM_BINS}
          x="day"
        />
      </VictoryChart>
    </main>
  );
}
