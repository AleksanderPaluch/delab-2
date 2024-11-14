import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import css from "./PieCharts.module.css";

const genderData = [
  { gender: "Kobieta", count: 896, uv: 50 },
  { gender: "Mężczyzna", count: 756, uv: 43 },
  { gender: "Odmowa/Inna", count: 126, uv: 7 },
];

const COLORS = [
  "#4B4E6D",  // ciemny szary
  "#A8A8A8",  // średni szary
  "#3485C8",  // jasny szary
  "#C0392B",  // intensywny czerwony
  "#2980B9"   // intensywny niebieski
];

const GenderPieChart = ({ inView }) => {
  const [responsiveSettings, setResponsiveSettings] = useState(
    getResponsiveSettings()
  );

  function getResponsiveSettings() {
    const width = window.innerWidth;
    return {
      containerHeight: width < 768 ? 270 : 360,
      cy: width < 768 ? "45%" : "55%",
      innerRadius: width < 1440 ? 30 : 60,
      outerRadius: width < 1440 ? 80 : 120,
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
      <p className={css.label}>Płeć</p>
      <ResponsiveContainer width="100%" height={responsiveSettings.containerHeight}>
        <PieChart>
          <Pie
            data={genderData}
            dataKey="count"
            nameKey="gender"
            cx="45%"
            cy={responsiveSettings.cy}
            innerRadius={responsiveSettings.innerRadius}
            outerRadius={responsiveSettings.outerRadius}
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
