import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import css from "./GenAIBarChart.module.css";
import { useInView } from "react-intersection-observer";

const data1 = [
  {
    statement: "pozwala mi zaoszczędzić czas",
    "Zgadzam się": 80,
    "Ani się nie zgadzam, ani zgadzam": 9,
    "Nie zgadzam się": 11,
  },
  {
    statement: "wykręcza mnie w wykonywaniu żmudnych, mało kreatywnych zadań",
    "Zgadzam się": 62,
    "Ani się nie zgadzam, ani zgadzam": 14,
    "Nie zgadzam się": 24,
  },
  {
    statement: "podnosi moje kompetencje cyfrowe",
    "Zgadzam się": 47,
    "Ani się nie zgadzam, ani zgadzam": 21,
    "Nie zgadzam się": 32,
  },
  {
    statement: "pozwoli mi osiągać lepsze wyniki na studiach",
    "Zgadzam się": 37,
    "Ani się nie zgadzam, ani zgadzam": 28,
    "Nie zgadzam się": 35,
  },
];

const data2 = [
  {
    statement: "poprawia mój warsztat pisarski",
    "Zgadzam się": 32,
    "Ani się nie zgadzam, ani zgadzam": 19,
    "Nie zgadzam się": 49,
  },
  {
    statement: "pozwoli mi osiągać lepsze wyniki w karierze",
    "Zgadzam się": 29,
    "Ani się nie zgadzam, ani zgadzam": 43,
    "Nie zgadzam się": 28,
  },
  {
    statement: "podnosi moje kompetencje badawcze",
    "Zgadzam się": 22,
    "Ani się nie zgadzam, ani zgadzam": 27,
    "Nie zgadzam się": 51,
  },
  {
    statement: "podnosi moje kompetencje dydaktyczne",
    "Zgadzam się": 21,
    "Ani się nie zgadzam, ani zgadzam": 28,
    "Nie zgadzam się": 51,
  },
];

const FieldBarChart = () => {
  const { ref: bar, inView } = useInView();

  const [responsiveSettings, setResponsiveSettings] = useState(getResponsiveSettings());

  function getResponsiveSettings() {
    const width = window.innerWidth;
    return {
      yAxisWidth: width < 1440 ? 150 : 240,
      fontSize: width < 768 ? 11 : width > 1439 ? 14 : 12.5,
      containerWidth: width < 768 ? "100%" : "50%",
      containerHeight1: width < 768 ? 328 : 400,
      containerHeight2: width < 768 ? 400 : 328,
      showLegend: width > 768,
      showLegend2: width < 768,
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
    <section ref={bar} className={css.section}>
      <p className={css.label}>Generatywna AI ...</p>

      <ResponsiveContainer
        className={css.responsiveContainer}
        width={responsiveSettings.containerWidth}
        height={responsiveSettings.containerHeight1}
      >
        <BarChart data={data1} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis
            className={css.yaxis}
            dataKey="statement"
            type="category"
            width={responsiveSettings.yAxisWidth}
            tick={{
              fontSize: responsiveSettings.fontSize,
            }}
            tickLine={false}
          />
          <Tooltip
            formatter={(value, name) => [`${value}%`, name]}
            contentStyle={{
              backgroundColor: "#f0eff4d2",
              borderRadius: "12px",
              color: "#130066cb",
            }}
            labelStyle={{ color: "#130066CC" }}
          />
          {responsiveSettings.showLegend && <Legend layout="vertical" />}
          <Bar
            dataKey="Zgadzam się"
            stackId="a"
            fill="#4B4E6D"
            isAnimationActive={inView}
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Bar
            dataKey="Ani się nie zgadzam, ani zgadzam"
            stackId="a"
            fill="#7B7F9C"
            isAnimationActive={inView}
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Bar
            dataKey="Nie zgadzam się"
            stackId="a"
            fill="#3485C8"
            isAnimationActive={inView}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer
        width={responsiveSettings.containerWidth}
        height={responsiveSettings.containerHeight2}
      >
        <BarChart data={data2} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis
            dataKey="statement"
            type="category"
            width={responsiveSettings.yAxisWidth}
            tick={{
              fontSize: responsiveSettings.fontSize,
            }}
            tickLine={false}
          />
          <Tooltip
            formatter={(value, name) => [`${value}%`, name]}
            contentStyle={{
              backgroundColor: "#f0eff4d2",
              borderRadius: "12px",
              color: "#130066cb",
            }}
            labelStyle={{ color: "#130066CC" }}
          />
             {responsiveSettings.showLegend2 && <Legend layout="vertical" />}
          <Bar
            dataKey="Zgadzam się"
            stackId="a"
            fill="#4B4E6D"
            isAnimationActive={inView}
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Bar
            dataKey="Ani się nie zgadzam, ani zgadzam"
            stackId="a"
            fill="#7B7F9C"
            isAnimationActive={inView}
            animationDuration={1500}
            animationEasing="ease-out"
          />
          <Bar
            dataKey="Nie zgadzam się"
            stackId="a"
            fill="#3485C8"
            isAnimationActive={inView}
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default FieldBarChart;
