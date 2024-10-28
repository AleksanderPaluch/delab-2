import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import css from "./DelabResearch.module.css";

const data = [
  { name: "Studenci i studentki", count: 1222, uv: 69 },
  { name: "Pracownicy i pracowniczki naukowo dydaktyczne", count: 421, uv: 24 },
  { name: "Doktoranci i doktorantki", count: 135, uv: 8 },
];

const COLORS = ["#ee1a1a84", "#3485C8", "#130066cb"]; // Colors for each segment

const PositionPieChart = ({ inView }) => (
  <>
    <p className={css.label} >Stanowisko на UW</p>
    <ResponsiveContainer width="100%" height={396}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          fill="#ee1a1a84"
          isAnimationActive={inView}
          animationDuration={1500} // Longer animation duration for smoothness
          animationBegin={500} // Delay at animation start
          animationEasing="ease-out"
          label={(entry) => `${entry.uv}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
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
        <Legend align="left"  />
      </PieChart>
    </ResponsiveContainer>
  </>
);

export default PositionPieChart;
