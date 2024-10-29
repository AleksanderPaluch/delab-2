import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import css from "./DelabResearch.module.css";

const genderData = [
  { gender: "Kobieta", count: 896, uv: 50 },
  { gender: "Mężczyzna", count: 756, uv: 43 },
  { gender: "Odmowa/Inna", count: 126, uv: 7 },
];

const COLORS = ["#ff7474", "#3485C8", "#9a34ffcb"]; // Custom colors for each gender category

const GenderPieChart = ({ inView }) => {
  return (
    <>
      <p className={css.label} >Płeć</p>
      <ResponsiveContainer width="100%" height={340}>
        <PieChart>
          <Pie
            data={genderData}
            dataKey="count"
            nameKey="gender"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            isAnimationActive={inView}
            animationDuration={1500}
            animationBegin={1300}
            animationEasing="ease-out"
            label={(entry) => `${entry.uv}%`}
            labelLine={false}
          
          >
            {genderData.map((entry, index) => (
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

export default GenderPieChart;
