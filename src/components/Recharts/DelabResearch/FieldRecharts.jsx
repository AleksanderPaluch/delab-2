import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LabelList,
} from "recharts";

const data = [
  { name: "Group A", value: 400, uv: 25 },
  { name: "Group B", value: 300, uv: 30 },
  { name: "Group C", value: 300, uv: 20 },
];

const COLORS = ["#3485C8", "#ee1a1a84", "#130066cb", "#f0eff4d2"];

const FieldRecharts = ({ inView }) => (
  <>
    <p style={{ textAlign: "center", color: "#3485C8" }}>Dziedzina </p>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={60}
          fill="#3485C8"
          paddingAngle={5}
          animationDuration={1000}
          isAnimationActive={inView}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <LabelList
            dataKey="uv" // Wyświetlanie procentów
            position="outside"
            formatter={(value) => `${value}%`}
            style={{ fontSize: 13, fontWeight: 600, fill: "#130066cb" }}
          />
        </Pie>
        <Tooltip
          formatter={(value, name, props) => {
            return [`${value}  (${props.payload.uv}%)`, "Liczba osób"];
          }}
          contentStyle={{
            backgroundColor: "#f0eff4d2",
            borderRadius: "12px",
            color: "#130066cb",
          }}
          labelStyle={{ color: "#130066cb" }}
        />
      </PieChart>
    </ResponsiveContainer>
  </>
);

export default FieldRecharts;
