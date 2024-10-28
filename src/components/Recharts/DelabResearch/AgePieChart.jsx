import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import css from "./DelabResearch.module.css";

const ageData = [
  { age: "18-24", count: 1002, uv: 56 },
  { age: "25-34", count: 323, uv: 18 },
  { age: "35-44", count: 195, uv: 11 },
  { age: "45-54", count: 165, uv: 9 },
  { age: "55+", count: 93, uv: 5 },
];

const COLORS = ["#ee1a1a84", "#3485C8", "#130066cb", "#ffc658", "#82ca9d"]; // Custom colors for each age group

const AgePieChart = ({ inView }) => {
  return (
    <>
      <p className={css.label} >Wiek</p>
      <ResponsiveContainer width="100%" height={340}>
        <PieChart>
          <Pie
            data={ageData}
            dataKey="count"
            nameKey="age"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            isAnimationActive={inView}
            animationDuration={1500}
            animationBegin={900}
            animationEasing="ease-out"
            label={(entry) => `${entry.uv}%`}
            labelLine={false}
        
          >
            {ageData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
