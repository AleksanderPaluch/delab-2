import React, { useState, useEffect } from "react";
import css from "./TreeCharts.module.css";
import { Treemap, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Nauki Społeczne", size: 736, uv: 41, fill: "#4B4E6D" },
  { name: "Nauki Humanistyczne", size: 556, uv: 31, fill: "#7B7F9C" },
  { name: "Nauki Ścisłe i Przyrodnicze", size: 486, uv: 28, fill: "#3485C8" },
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

const FieldTreemap = ({ inView }) => {
  const [responsiveSettings, setResponsiveSettings] = useState(getResponsiveSettings());

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
      <p className={css.label}>Dziedzina</p>

      <ResponsiveContainer width="100%" height={responsiveSettings.containerHeight}>
        <Treemap
          data={data}
          dataKey="size"
          nameKey="name"
          ratio={3 / 3}
          isAnimationActive={inView}
          animationDuration={2000}
          animationBegin={500}
          animationEasing="ease-out"
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
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.fill} />
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
    </>
  );
};

export default FieldTreemap;
