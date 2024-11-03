import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import css from "./PieCharts.module.css";

const ageData = [
  { age: "18-24", count: 1002, uv: 56 },
  { age: "25-34", count: 323, uv: 18 },
  { age: "35-44", count: 195, uv: 11 },
  { age: "45-54", count: 165, uv: 9 },
  { age: "55+", count: 93, uv: 5 },
];

const COLORS = [
  "#4B4E6D",  // stonowany granat
  "#7B7F9C",  // jaśniejszy chłodny szary
  "#A6AAB0",  // średni szary
  "#C0C4CC",  // jasny szary
  "#3485C8"   // bardzo jasny szary
];


const AgePieChart = ({ inView }) => {
  return (
    <>
      <p className={css.label}>Wiek</p>
      <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 270 : 360}>
        <PieChart>
          <Pie
            data={ageData}
            dataKey="count"
            nameKey="age"
            cx="45%"
            cy="55%"
            innerRadius={window.innerWidth < 1440 ? 30 : 60}
            outerRadius={window.innerWidth < 1440 ? 80 : 120}
            isAnimationActive={inView}
            animationDuration={1500}
            animationBegin={900}
            animationEasing="ease-out"
            label={(entry) => `${entry.uv}%`}
            labelLine={false}
          >
            {ageData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) =>
              name !== "count"
                ? [`${value} (${props.payload.uv}%)`, "Liczba osób"]
                : value
            }
            contentStyle={{
              backgroundColor: "#f0eff4d2",
              borderRadius: "12px",
              color: "#130066cb",
            }}
            labelStyle={{ color: "#130066CC" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default AgePieChart;
