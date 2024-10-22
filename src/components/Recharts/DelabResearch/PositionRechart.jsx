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

const PositionRechart = ({inView}) => {
  return (
    <>
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
            animationDuration={2500}
            isAnimationActive={inView}
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
    </>
  );
};

export default PositionRechart;
