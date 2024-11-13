import { Treemap, Tooltip, ResponsiveContainer, Cell } from "recharts";
import css from "./TreeCharts.module.css";
import { useEffect, useState } from "react";

const data = [
  { name: "Bardzo często", size: 324, uv: 18, fill: "#4B4E6D" },
  { name: "Często", size: 390, uv: 22, fill: "#7B7F9C" },
  { name: "Rzadko", size: 345, uv: 19, fill: "#A6AAB0" },
  { name: "Bardzo rzadko", size: 416, uv: 23, fill: "#C0C4CC" },
  { name: "Nigdy", size: 303, uv: 17, fill: "#3485C8" },
];

const CustomLabel = ({ x, y, width, height, uv, name, fontSize }) => {
  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      textAnchor="middle"
      fontSize={fontSize}
      dominantBaseline="central"
    >
      {`${name} ${uv}%`}
    </text>
  );
};

const FrequencyTreemap = ({ inView }) => {
  const [responsiveSettings, setResponsiveSettings] = useState(
    getResponsiveSettings()
  );

  function getResponsiveSettings() {
    const width = window.innerWidth;
    return {
      containerHeight: width < 1440 ? 146 : 210,
      fontSize: width < 1440 ? "11px" : "16px",
    };
  }

  useEffect(() => {
    const handleResize = () => {
      setResponsiveSettings(getResponsiveSettings());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <p className={css.label}>
        Jak często korzystasz z narzędzi generatywnej AI?
      </p>
      <ResponsiveContainer
        width="100%"
        height={responsiveSettings.containerHeight}
      >
        <Treemap
          data={data}
          dataKey="size"
          nameKey="name"
          ratio={4 / 3}
          isAnimationActive={inView}
          animationDuration={2000}
          stroke="#130066cb"
          content={({ depth, x, y, width, height, index }) =>
            depth === 1 ? (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={data[index].fill}
                  stroke="#ffffff"
                />
                <CustomLabel
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  uv={data[index].uv}
                  name={data[index].name}
                  fontSize={responsiveSettings.fontSize}
                />
              </g>
            ) : null
          }
        >
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
    </>
  );
};

export default FrequencyTreemap;
