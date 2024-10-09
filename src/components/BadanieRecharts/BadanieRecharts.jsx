import css from "./BadanieRecharts.module.css";
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

const data = [
  { name: "Studenci i studentki", count: 1222, uv: 69 },
  { name: "Pracownicy i pracowniczki naukowo dydaktyczne", count: 421, uv: 24 },
  { name: "Doktoranci i doktorantki", count: 135, uv: 8 },
];

const ageData = [
  { age: "18-24", count: 1002, uv: 56 },
  { age: "25-34", count: 323, uv: 18 },
  { age: "35-44", count: 195, uv: 11 },
  { age: "45-54", count: 165, uv: 9 },
  { age: "55+", count: 93, uv: 5 },
];

const genderData = [
  { gender: "Kobieta", count: 896, uv: 50 },
  { gender: "Mężczyzna", count: 756, uv: 43 },
  { gender: "Odmowa/Inna", count: 126, uv: 7 },
];

const BadanieRecharts = () => {
  return (
    <>
      <div className={css.rechartsBox}>
        <div className={css.occupancyBox}>
        <p style={{ textAlign: "center", color: "#3485C8" }}>Stanowisko na UW</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              layout="vertical" // Перетворюємо графік на горизонтальний
            >
              <XAxis
                type="number" // Змінюємо на числову вісь для горизонтального розташування
                stroke="#3485C8"
                tick={{ fontSize: 12, fill: "#3485C8" }}
              />
              <YAxis
                type="category" // Вісь Y тепер категорійна
                dataKey="name" // Ключ для відображення назв груп на осі Y
                stroke="#3485C8"
                tick={{ fontSize: 12, fill: "#3485C8" }}
                width={100} // Ширина для відображення довгих назв
              />
              <Tooltip
                formatter={(value, name, props) => {
                  if (name === "count") {
                    return [`${value}  (${props.payload.uv}%)`, "Liczba osób"]; // Використовуємо uv для відсотка
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
                radius={[0, 10, 10, 0]}
                animationDuration={1500}
              >
                <LabelList
                  dataKey="uv" // Відображаємо відсотки на стовпчиках з поля uv
                  position="right" // Відображаємо відсотки праворуч
                  formatter={(value) => `${value}%`} // Формат відсотків
                  style={{ fontSize: 13, fontWeight: 600, fill: "#130066cb" }} // Чорний колір для відсотків
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className={css.statsBox}>
          <div className={css.smallBox}>
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
                  labelStyle={{ color: "#130066cb" }}
                />
                <CartesianGrid stroke="#3485C8" strokeDasharray="3 3" />
                <Bar
                  dataKey="count"
                  fill="#ee1a1a84"
                  barSize={50}
                  radius={[10, 10, 0, 0]}
                  animationDuration={1500} // Zmieniamy zaokrąglenie na odpowiednie dla pionowego wykresu
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
          </div>
          <div className={css.smallBox}>
            <p style={{ textAlign: "center", color: "#3485C8" }}>Płeć</p>
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
                  labelStyle={{ color: "#130066cb" }}
                />
                <CartesianGrid stroke="#3485C8" strokeDasharray="3 3" />
                <Bar
                  dataKey="count"
                  fill="#ee1a1a84"
                  barSize={50}
                  radius={[10, 10, 0, 0]} 
                  animationDuration={1500}// Zmieniamy zaokrąglenie na odpowiednie dla pionowego wykresu
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BadanieRecharts;
