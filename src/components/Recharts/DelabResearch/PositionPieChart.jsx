import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import css from "./PieCharts.module.css";

const data = [
  { name: "Studenci i studentki", count: 1222, uv: 69 },
  { name: "Pracownicy i pracowniczki naukowo dydaktyczne", count: 421, uv: 24 },
  { name: "Doktoranci i doktorantki", count: 135, uv: 8 },
];
const COLORS = [
  "#4B4E6D",  // ciemny szary
  "#A8A8A8",  // średni szary
  "#3485C8",  // jasny szary
  "#C0392B",  // intensywny czerwony
  "#2980B9"   // intensywny niebieski
];


const PositionPieChart = ({ inView }) => (
  <>
    <p className={css.label} >Stanowisko na UW</p>
    <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 270 : 390}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="name"
          cx="45%"
          cy={window.innerWidth < 1440 ? "54%" : "50%"}
          innerRadius={window.innerWidth < 1440 ? 30 : 60}
          outerRadius={window.innerWidth < 1440 ? 80 : 120}
         
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
