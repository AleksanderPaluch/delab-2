
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    LabelList,
  } from "recharts";

  const genderData = [
    { gender: "Kobieta", count: 896, uv: 50 },
    { gender: "Mężczyzna", count: 756, uv: 43 },
    { gender: "Odmowa/Inna", count: 126, uv: 7 },
  ];

const GenderRechart = ({inView}) => {
  return (
    <>   <p style={{ textAlign: "center", color: "#3485C8" }}>Płeć</p>
    <ResponsiveContainer width="100%" height={145}>
      <BarChart data={genderData}>
        <XAxis
          dataKey="gender" // Oś X będzie teraz kategorii, bo to pionowy wykres
          stroke="#3485C8"
          tick={{ fontSize: 12, fill: "#3485C8" }}
        />
        <YAxis
          type="number" // Zmieniamy oś Y na numeryczną
          stroke="#3485C8"
          tick={{ fontSize: 0, fill: "#3485C8" }}
        />
        <Tooltip
          formatter={(value, name, props) => {
            if (name === "count") {
              return [`${value}  (${props.payload.uv}%)`, "Liczba osób"];
            }
          }}
          contentStyle={{
            backgroundColor: "#f0eff4d2",
            borderRadius: "12px",
            color: "#130066cb",
          }}
          labelStyle={{ color: "#130066cb" }}
        />
        <CartesianGrid stroke="#3485C8" strokeDasharray="3 3" />
        <Bar
          dataKey="count"
          fill="#ee1a1a84"
          barSize={50}
          radius={[10, 10, 0, 0]}
          isAnimationActive={inView}
          animationDuration={1000} // Zmieniamy zaokrąglenie na odpowiednie dla pionowego wykresu
        >
          <LabelList
            dataKey="uv"
            position="top" // Na pionowym wykresie procenty są wyświetlane nad słupkami
            formatter={(value) => `${value}%`}
            style={{ fontSize: 13, fontWeight: 600, fill: "#130066cb" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer></>

   

  );
};

export default GenderRechart;
