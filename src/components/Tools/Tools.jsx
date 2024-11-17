import css from "./Tools.module.css";
import DataTable from "react-data-table-component";
import Reveal from "../Reveal/Reveal";
import { useEffect, useState } from "react";
import { wrap } from "framer-motion";

const data = [
  {
    name: "Adobe Firefly",
    creator: "Adobe Inc.",
    description:
      "Adobe Firefly to zestaw narzędzi, który pozwala na tworzenie i edytowanie obrazów oraz efektów tekstowych na podstawie wprowadzonych słów kluczowych lub opisów. Narzędzie integruje się z aplikacjami Adobe, umożliwiając tworzenie grafik wektorowych i tekstów.",
    pricing: ["Darmowa (limit 25 kredytów na generowanie obrazów)", "Płatna"],
  },
  {
    name: "Beautiful.ai",
    creator: "Beautiful.ai",
    description:
      "Narzędzie oparte na technologii Design AI, która wykorzystuje do tworzenia i edycji prezentacji. Możliwość wyboru szablonów lub projektowanie przy pomocy bota AI.",
    pricing: ["Darmowa wersja próbna", "Płatna subskrypcja"],
  },
  {
    name: "Bing Image Creator",
    creator: "Microsoft",
    description:
      "Narzędzie do generowania obrazów na podstawie opisów tekstowych (promptów). Wykorzystuje model DALL-E 3 firmy Open AI.",
    pricing: ["Darmowe 15 obrazów na dzień.", "Płatna wersja rozszerzona"],
  },
  {
    name: "Character AI",
    creator: "Noam Shazeer, Daniel de Freitas",
    description:
      "Narzędzie pozwala tworzyć chatboty bez wiedzy technicznej oraz rozmawiać z chatbotami stworzonymi przez innych. Umożliwia generowanie fikcyjnych postaci lub postaci opartych na rzeczywistych osobach.",
    pricing: ["Darmowa", "Płatna wersja rozszerzona"],
  },
  {
    name: "ChatGPT",
    creator: "OpenAI",
    description:
      "Zaawansowany chatbot oparty na rodzinie modeli AI, w tym GPT-4, GPT-4o i GPT-4o mini. Odpowiada na pytania, generuje teksty i obrazy, wyjaśnia zagadnienia, pisze i edytuje kod w różnych językach oraz tłumaczy teksty, wszystko na podstawie podanych przez użytkownika promptów.",
    pricing: ["Darmowa wersja (GPT-3.5.)", "Płatna subskrypcja (GPT-4 i inne)"],
  },
  {
    name: "Chatsonic",
    creator: "Chatsonic (Samanyou Garg)",
    description:
      "Chatbot oparty na sztucznej inteligencji, będący alternatywą dla ChatGPT. Chatsonic wyróżnia się m.in. szybkim przeszukiwaniem sieci w czasie rzeczywistym, generowaniem obrazów, generowanie mowy z tekstu.",
    pricing: ["Darmowa wersja próbna", "Płatna subskrypcja"],
  },
  {
    name: "Claude",
    creator: "Anthropic",
    description:
      "Chatbot, który stanowi alternatywę dla ChatGPT. Claude jest szkolony do prowadzenia konwersacji opartych na tekście i wykonywania zadań.",
    pricing: ["Darmowa wersja", "Płatna subskrypcja"],
  },
  {
    name: "Colormind",
    creator: "Colormind (Daniella Cano Vega)",
    description:
      "Narzędzie, służące do generowania palet kolorów. Potrafi uczyć się stylów i kolorów ze zdjęć czy filmów.",
    pricing: ["Darmowe"],
  },
  {
    name: "Connected Papers",
    creator:
      "Alex Tarnavsky Eitan, Eddie Smolyansky, Itay Knaan Harpaz, Sahar Perets",
    description:
      "Narzędzie analizuje relacje między pracami badawczymi, umożliwiając znalezienie podobnych badań i wizualny przegląd danej dziedziny. Wybiera artykuły o najsilniejszych powiązaniach z pracą źródłową, układając je według podobieństwa, nawet jeśli nie cytują się nawzajem.",
    pricing: ["Darmowy (5 wykresów na miesiąc)", "Płatna subskrypcja"],
  },
  {
    name: "Consensus",
    creator: "Christian Salem, Eric Olson",
    description:
      "Consensus to akademicka wyszukiwarka AI, która wykorzystuje modele językowe i wyszukiwanie wektorowe do odpowiadania na pytania badawcze. Umożliwia tworzenie szkiców treści z dokładnymi cytatami z wiarygodnych artykułów naukowych.",
    pricing: ["Darmowa", "Płatna wersja rozszerzona w formie subskrypcji"],
  },
  {
    name: "Copilot",
    creator: "Microsoft",
    description:
      "Narzędzie wykorzystuje sztuczną inteligencję do wspomagania użytkowników w różnych aplikacjach pakietu Microsoft 365, takich jak Word, Excel, PowerPoint, Outlook i inne.",
    pricing: ["Darmowa", "Płatna wersja rozszerzona"],
  },
  {
    name: "Copy.ai",
    creator: "Copy.ai",
    description:
      "Narzędzie zbudowane na bazie modelu GPT-3 (LLM) OpenAI. Generuje różne typy treści, w tym nagłówki na bloga, wiadomości e-mail, treści do mediów społecznościowych, treści internetowe i inne.",
    pricing: ["Darmowa", "Płatna wersja rozszerzona"],
  },
  {
    name: "DALL-E 3",
    creator: "OpenAI",
    description:
      "Narzędzie służące do generowania obrazów z tekstu (promptów).",
    pricing: ["Darmowa", "Płatna wersja rozszerzona"],
  },
  {
    name: "Designs.ai",
    creator: "Designs.ai",
    description:
      "Służy do tworzenia różnych treści, w tym: grafik, wideo, logo i innych na podstawie sztucznej inteligencji.",
    pricing: ["Darmowa wersja próbna", "Płatna subskrypcja"],
  },
  {
    name: "Elicit",
    creator: "Ought",
    description:
      "Elicit wykorzystuje duże modele językowe (LLM) do automatyzacji procesów badawczych. Po wprowadzeniu pytania wyszukuje najważniejsze artykuły, podsumowuje wnioski i wyodrębnia kluczowe informacje, nawet przy niedokładnym dopasowaniu słów kluczowych.",
    pricing: ["Darmowa wersja próbna", "Płatna subskrypcja"],
  },
  {
    name: "Gemini",
    creator: "Google",
    description:
      "Google Gemini, wcześniej znany jako Bard, to chatbot AI służący do odpowiadania na pytania w formie tekstu, kodu lub obrazów. Integruje się z aplikacjami Google, korzystając z danych wyszukiwarki Google do generowania odpowiedzi.",
    pricing: ["Darmowa wersja próbna", "Płatna wersja rozszerzona"],
  },
  {
    name: "GitHub Copilot",
    creator: "GitHub, OpenAI",
    description:
      "Narzędzie pełni rolę asystenta programowania, który opiera się na modelu językowym Codex. Działa jak wtyczka do środowisk programistycznych tj. Visual Studio Code. Narzędzie analizuje kod i generuje sugestie.",
    pricing: [
      "Darmowa wersja próbna",
      "Darmowy program dla osób studiujących",
      "Płatna subskrypcja",
    ],
  },
  {
    name: "Illustroke",
    creator: "Fabio Carbone",
    description:
      "Narzędzie służy do tworzenia grafik wektorowych (SVG) na podstawie opisów tekstowych (promptów).",
    pricing: ["Darmowa wersja próbna", "Płatna"],
  },
  {
    name: "Midjourney",
    creator: "Midjourney, Inc.",
    description:
      "Działa podobnie jak DALL-E, wykorzystując modele AI do tworzenia grafik i ilustracji, na podstawie opisów tekstowych (promptów).",
    pricing: ["Płatna"],
  },
  {
    name: "Murf.ai",
    creator: "Murf AI",
    description:
      "Narzędzie wykorzystuje sztuczną inteligencję do syntezowania głosu i tworzenia lektora na podstawie tekstu.",
    pricing: ["Darmowa wersja próbna", "Płatna subskrypcja"],
  },
  {
    name: "Notion AI",
    creator: "Notion Labs, Inc.",
    description:
      "Narzędzie do generowania i edycji tekstu. Użytkownicy mają możliwość tworzenia tekstów na podstawie dostępnych szablonów czy generowania pomysłów.",
    pricing: ["Darmowa", "Płatna wersja rozszerzona"],
  },
  {
    name: "Novel AI",
    creator: "Anlatan",
    description:
      "Narzędzie do pisania opowiadań i powieści, wykorzystujące przetwarzanie języka naturalnego (NLP) oraz modele AI trenowane na literaturze. Umożliwia generowanie spójnych narracji w stylu literackim, dostosowując styl i ton do potrzeb użytkowników.",
    pricing: ["Darmowa wersja próbna", "Płatna"],
  },
  {
    name: "Perplexity",
    creator: "Aravind Srinivas",
    description:
      "Perplexity to wyszukiwarka oparta na dużych modelach językowych (GPT-4, Claude 3), łącząca funkcje Google i ChatGPT. Działa jak chatbot, odpowiadając na pytania użytkownika na podstawie codziennie indeksowanych artykułów. Zamiast listy stron, dostarcza podsumowanie odpowiedzi z odnośnikami do źródeł.",
    pricing: [
      "Darmowa",
      "Płatna wersja rozszerzona w formie subskrypcji (Perplexity Pro)",
    ],
  },
  {
    name: "Poe",
    creator: "Quora",
    description:
      "Platforma, która umożliwia użytkownikom bezpośrednie zadawanie pytań do różnych modeli AI np. ChatGPT.",
    pricing: ["Darmowa", "Płatna wersja rozszerzona"],
  },
  {
    name: "Research Rabbit",
    creator: "Krishnan Chandra, Ben Slater, Michael Ma",
    description:
      "Narzędzie do mapowania literatury, które wykorzystuje cytaty i wizualizacje, aby pomóc badaczom znaleźć podobne artykuły i naukowców. Użytkownik zaczyna od wybranych artykułów, a narzędzie wyszukuje powiązane prace.",
    pricing: ["Darmowy"],
  },
  {
    name: "Runway",
    creator: "Runway",
    description:
      "Narzędzie do edytowania i generowania treści wideo. Jedno z narzędzi, Runway Gen-2 pełni rolę generatora wideo z tekstu (promptów).",
    pricing: ["Darmowa i płatna wersja"],
  },
  {
    name: "Scholarcy",
    creator: "Phil Gooch",
    description:
      "Scholarcy to narzędzie do automatycznego streszczania tekstów, które skanuje materiały i tworzy karty podsumowań z kluczowymi punktami. Użytkownicy mogą je czytać, udostępniać i edytować, korzystając z rozszerzeń przeglądarkowych (Chrome, Edge, Firefox).",
    pricing: ["Darmowa (3 podsumowania na dzień)", "Płatna subskrypcja"],
  },

  {
    name: "Semantic Scholar",
    creator: "Allen Institute for Artificial Intelligence",
    description:
      "Semantic Scholar to narzędzie do przeszukiwania literatury akademickiej, które wykorzystuje uczenie maszynowe do identyfikowania powiązań i kluczowych koncepcji w artykułach. Umożliwia filtrowanie wyników i oferuje skrócone podsumowania (TL;DR), ułatwiając szybkie zrozumienie treści.",
    pricing: ["Darmowy"],
  },
  {
    name: "Stable Diffusion",
    creator: "Runway, CompVis i Stability AI",
    description:
      "Narzędzie, które wykorzystuje model deep learning do tworzenia obrazów na podstawie tekstowych opisów (promptów).",
    pricing: [
      "Darmowa wersja (10 obrazów na dzień)",
      "Płatna wersja rozszerzona",
    ],
  },
  {
    name: "Synthesia",
    creator: "Synthesia",
    description:
      "Narzędzie, które generuje filmy z awatarami AI na podstawie tekstu.",
    pricing: ["Darmowa wersja próbna", "Płatna wersja rozszerzona"],
  },
];

const columns = [
  {
    name: "Nazwa", // Заголовок колонки
    selector: (row) => row.name, // Як отримати дані для цієї колонки
    sortable: true, // Додати сортування
    wrap: true,
    width: "20%"
  },
  {
    name: "Twórca",
    selector: (row) => row.creator,
    sortable: true,
    wrap: true,
    width: "25%"
  },

  {
    name: "Czy płatne?",
    selector: (row) => row.pricing.join(", "), // Об’єднуємо масив у рядок
    wrap: true,
   width: "45%"
   
  },
];

const baseCustomStyles = {
  table: {
    style: {
      minWidth: "648px"
    },
  },
  rows: {
    style: {},
  },
  header: {
    style: {
      fontSize: "18px",
      color: "var(--blue)",
    },
  },
  headCells: {
    style: {},
  },
};

// Функція для оновлення стилів на основі розміру вікна
const getResponsiveStyles = () => {
  if (window.innerWidth >= 1440) {
    return {
      ...baseCustomStyles,
      table: {
        style: {
          maxWidth: "100%"
        },
      },
      rows: {
        style: {
          fontSize: "15.5px", // Збільшений розмір шрифту для рядків
        },
      },
      header: {
        style: {
          fontSize: "22px", // Збільшений розмір шрифту для заголовка
          color: "var(--blue)",
        },
      },
      headCells: {
        style: {
          fontSize: "13px", // Збільшений розмір шрифту для заголовків колонок
        },
      },
    };
  }
  return baseCustomStyles;
};

const ExpandableComponent = ({ data }) => (
  <div className={css.infoBox}>
    <p className={css.infoText}>
      <span className={css.span}>Zastosowanie:</span> {data.description}
    </p>
  </div>
);

const Tools = () => {
  const [customStyles, setCustomStyles] = useState(getResponsiveStyles());

  useEffect(() => {
    // Оновлюємо стилі при зміні розміру вікна
    const handleResize = () => {
      setCustomStyles(getResponsiveStyles());
    };

    window.addEventListener("resize", handleResize);

    // Очищення під час розмонтування
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={css.section} id="narzedzia-genai">
      <Reveal>
        <h2 className={css.title}>Wybrane narzędzia generatywnej AI</h2>
      </Reveal>
      <Reveal>
        <p className={css.text}>
          Poniżej przedstawiamy listę wybranych narzędzi opartych na
          generatywnej AI, wraz z opisem ich zastosowania. Narzędzia AI
          wyspecjalizowane do konkretnych zadań można również znaleźć tutaj:{" "}
          <a className={css.link} href="https://theresanaiforthat.com/">
            theresanaiforthat.com
          </a>
        </p>
      </Reveal>

      <div className={css.tableBox}>
        <DataTable
          className={css.table}
          title="GenAI Tools"
          columns={columns}
          data={data}
          pagination
          responsive
          striped
          customStyles={customStyles}
          expandableRows
          expandableRowsComponent={ExpandableComponent}
        />
      </div>
    </section>
  );
};

export default Tools;
