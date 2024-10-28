
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

  const ageData = [
    { age: "18-24", count: 1002, uv: 56 },
    { age: "25-34", count: 323, uv: 18 },
    { age: "35-44", count: 195, uv: 11 },
    { age: "45-54", count: 165, uv: 9 },
    { age: "55+", count: 93, uv: 5 },
  ];
  

const AgeReachart = ({inView}) => {
  return (
  <>
    <p style={{ textAlign: "center", color: "#3485C8" }}>Wiek</p>
            <ResponsiveContainer width="100%" height={145}>
              <BarChart data={ageData}>
                <XAxis
                  dataKey="age" // Oś X będzie teraz kategorii, bo to pionowy wykres
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
                      return [
                        `${value}  (${props.payload.uv}%)`,
                        "Liczba osób",
                      ];
                    }
                  }}
                  contentStyle={{
                    backgroundColor: "#f0eff4d2",
                    borderRadius: "12px",
                    color: "#130066cb",
                  }}
                  labelStyle={{ color: "#130066CC" }}
                />
                <CartesianGrid stroke="#3485C8" strokeDasharray="3 3" />
                <Bar
                  dataKey="count"
                  fill="#ee1a1a84"
                  barSize={50}
                  radius={[10, 10, 0, 0]}
                  animationDuration={1000}
                  isAnimationActive={inView}
                >
                  <LabelList
                    dataKey="uv"
                    position="top" // Na pionowym wykresie procenty są wyświetlane nad słupkami
                    formatter={(value) => `${value}%`}
                    style={{ fontSize: 13, fontWeight: 600, fill: "#130066cb" }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
  </>
  )
}

export default AgeReachart
