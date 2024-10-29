import { Treemap, Tooltip, ResponsiveContainer, Cell } from "recharts";
import css from "./TreeCharts.module.css";

const data = [
  { name: "Bardzo często", size: 324, uv: 18, fill: "#ff7474" },
  { name: "Często", size: 390, uv: 22, fill: "#3485C8" },
  { name: "Rzadko", size: 345, uv: 19, fill: "#9a34ffcb" },
  { name: "Bardzo rzadko", size: 416, uv: 23, fill: "#ffc658" },
  { name: "Nigdy", size: 303, uv: 17, fill: "#82ca9d" },
];

const FrequencyTreemap = ({ inView }) => {
  return (
    <div className={css.fieldBox}>
      <p className={css.labelLast}>
        Jak często korzystasz z narzędzi generatywnej AI?{" "}
      </p>
      <div className={css.smalllBox}>
        {" "}
        <ResponsiveContainer width="100%" height={220}>
          <Treemap
            data={data}
            dataKey="size"
            nameKey="name"
            ratio={4 / 3}
            isAnimationActive={inView}
            
            animationDuration={2000}
            animationEasing="ease-out"
            stroke="#130066cb"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.fill} /> 
            ))}
            <Tooltip
              formatter={(value, name, props) => {
                switch (name) {
                  case "Bardzo często":
                    return [
                      `Bardzo często, conajmniej 3 razy w tygodniu: ${value} (${props.payload.uv}%)`,
                    ];
                  case "Często":
                    return [
                      `Często, 1-2 razy w tygodniu: ${value} (${props.payload.uv}%)`,
                    ];
                  case "Rzadko":
                    return [
                      `Rzadko, przynajmniej 2 razy w miesiącu: ${value}(${props.payload.uv}%)`,
                    ];
                  case "Bardzo rzadko":
                    return [
                      `Bardzo rzadko, raz na miesiąc lub rzadziej: ${value}(${props.payload.uv}%)`,
                    ];
                  case "Nigdy":
                    return [
                      `Nigdy nie korzystałem/am: ${value}(${props.payload.uv}%)`,
                    ];
                  default:
                    return [value];
                }
              }}
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
  );
};

export default FrequencyTreemap;
