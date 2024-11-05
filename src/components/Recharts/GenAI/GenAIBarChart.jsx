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
import { useInView } from "framer-motion";

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



  return (
    <section className={css.section}>
      <p className={css.label}>Generatywna AI ...</p>
      <div style={{ display: "flex", gap: "40px" }}>
        <ResponsiveContainer width="50%" height={400}>
          <BarChart
            data={data1}
            layout="vertical"

            // barSize={15}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis
              className={css.yaxis}
              dataKey="statement"
              type="category"
              width={240}
              tick={{ fontSize: 14 }}
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
            <Legend layout="vertical" />
            <Bar dataKey="Zgadzam się" stackId="a" fill="#4B4E6D"  />
            <Bar
              dataKey="Ani się nie zgadzam, ani zgadzam"
              stackId="a"
              fill="#7B7F9C"
            />
            <Bar dataKey="Nie zgadzam się" stackId="a" fill="#3485C8" />
          </BarChart>
        </ResponsiveContainer>

        {/* Second Column */}
        <ResponsiveContainer width="50%" height={328}>
          <BarChart
            data={data2}
            layout="vertical"

            // barSize={15}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis
              dataKey="statement"
              type="category"
              width={240}
              tick={{ fontSize: 14 }}
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

            <Bar dataKey="Zgadzam się" stackId="a" fill="#4B4E6D" />
            <Bar
              dataKey="Ani się nie zgadzam, ani zgadzam"
              stackId="a"
              fill="#7B7F9C"
            />
            <Bar dataKey="Nie zgadzam się" stackId="a" fill="#3485C8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default FieldBarChart;
