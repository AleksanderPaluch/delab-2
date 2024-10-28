import css from "./DelabResearch.module.css";
import { Treemap, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Nauki Społeczne", size: 736, uv: 41 },
  { name: "Nauki Humanistyczne", size: 556, uv: 31 },
  { name: "Nauki Ścisłe i Przyrodnicze", size: 486, uv: 28 },
];

const COLORS = ["#ee1a1a84", "#3485C8", "#130066cb"]; // Kolory podobne do tych z PieChart

const FieldTreemap = ({ inView }) => {
  return (
    <>
      <div className={css.treeBox}>
        <p className={css.label}>Dziedzina</p>
        <div className={css.smallBox}>
          <ResponsiveContainer width="100%" height={150}>
            <Treemap
              data={data}
              dataKey="size"
              nameKey="name"
              ratio={4 / 3}
              isAnimationActive={inView}
              animationDuration={2000}
              animationBegin={2000}
              animationEasing="ease-out"
              stroke="#130066cb"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
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
            </Treemap>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default FieldTreemap;
