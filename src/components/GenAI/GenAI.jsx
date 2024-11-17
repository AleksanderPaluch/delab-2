import css from "./GenAI.module.css";
import Reveal from "../Reveal/Reveal";
import GenAIBarChart from "../Recharts/GenAIRechart/GenAIBarChart";

const GenAI = () => {
  return (
    <>
      <section className={css.section} id="generatywna-ai">
        <Reveal>
          <h2 className={css.title}>Generatywna AI</h2>
        </Reveal>
        <Reveal>
          <h2 className={css.subTitle}>
            Co powinniśmy o niej wiedzieć i dlaczego jest to istotne?
          </h2>
        </Reveal>

        <div className={css.videoBox}>
          <div className={css.textBox}>
            <Reveal>
              {" "}
              <p className={css.text}>
                <span className={css.span}>
                  Generatywna sztuczna inteligencja (genAI)
                </span>
                to ogólne określenie dla modeli, takich jak ChatGPT, które mogą
                tworzyć nowe treści: teksty, dźwięki, kod programistyczny,
                obrazy czy filmy. Ostatnie przełomowe odkrycia w tej dziedzinie
                mają potencjał, by znacząco wpłynąć na nasze podejście do
                automatyzacji tworzenia treści.
              </p>
            </Reveal>
            <Reveal>
              <p className={css.text}>
                <span className={css.span}>Uczenie maszynowe,</span>
                którego jednym z przykładów jest generatywna AI, od lat zmienia
                przemysł, usługi, naukę i nasze codzienne życie. Algorytmy
                rekomendacyjne pomagają odkrywać nowe filmy czy piosenki,
                znajdują zastosowanie w analizie medycznej, automatyzacji
                produkcji, personalizacji treści marketingowych, czy wykrywaniu
                anomalii w danych finansowych. Prawdopodobnie korzystałeś z AI
                nawet o tym nie wiedząc – asystenci głosowi, tacy jak Siri,
                działają w oparciu o tę technologię, podobnie jak chatboty,
                które pomagają znaleźć odpowiedzi na pytania dotyczące usług
                online. Bardzo możliwe, że AI była również stosowana wobec
                Ciebie, wykorzystując Twoje dane lub wspomagając podejmowanie
                decyzji (np. przy analizie ryzyka kredytowego).
              </p>
            </Reveal>
          </div>

          <iframe
            width={window.innerWidth < 768 ? "355" : "550"}
            height={window.innerWidth < 768 ? "200" : "310"}
            src="https://www.youtube-nocookie.com/embed/i6ssUfaSbg4?si=23CdvTsBDQOqaiNo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className={css.box}>
          <div className={css.smallBox}>
            <Reveal>
              {" "}
              <p className={css.text}>
                Jeszcze do niedawna uczenie maszynowe było wykorzystywane
                głównie w modelach predykcyjnych, które analizowały wzorce w
                danych, wspierając zadania takie jak klasyfikacja czy
                klastrowanie. Przykładem problemu, który tego typu algorytmy
                mogą rozwiązać, jest analiza dużej liczby zdjęć, aby nauczyć się
                rozpoznawać klasy obiektów (np. wieloryby na zdjęciach
                lotniczych) i wykrywać je na kolejnych zdjęciach (co wspiera
                badanie i monitoring tych zwierząt). Przełomem było pojawienie
                się generatywnej AI, która nie tylko rozpoznaje wzorce, ale
                także potrafi samodzielnie tworzyć treści.
              </p>
            </Reveal>
            <Reveal>
              {" "}
              <p className={css.text}>
                Pierwsze modele uczenia maszynowego przetwarzające tekst były
                trenowane do klasyfikacji danych na podstawie etykiet nadawanych
                przez człowieka. Przykładowo, model mógł uczyć się, jak oznaczać
                posty w mediach społecznościowych jako pozytywne lub negatywne.
                Ten typ uczenia nazywany jest nadzorowanym, ponieważ to człowiek
                nadzoruje proces, wskazując modelowi, jak powinien interpretować
                dane i podejmować decyzje.
              </p>
            </Reveal>
            <Reveal>
              {" "}
              <p className={css.text}>
                Nowsze modele wykorzystują tzw.
                <span className={css.span}>uczenie samonadzorowane.</span>W
                takim podejściu modele tekstowe są trenowane na ogromnych
                zbiorach danych, takich jak fora internetowe, książki czy
                artykuły naukowe, co pozwala im samodzielnie generować
                predykcje. Na przykład modele takiej jak GPT, na podstawie kilku
                słów, potrafią przewidzieć sensowne zakończenie zdania w niemal
                dowolnym kontekście.
              </p>
            </Reveal>
          </div>
          <div className={css.smallBox}>
            <Reveal>
              <p className={css.text}>
                Pojawiają się pierwsze badania, które rzucają światło na wpływ
                generatywnej AI na pracę różnych grup zawodowych. Elondou et al.
                (2023), czyli zespół związany z OpenAI, przewiduje, że jedna
                piąta pracowników może doświadczyć wpływu modeli GPT na połowę
                wykonywanych zadań zawodowych. Automatyzacja przestaje obejmować
                jedynie zadania rutynowe, czyli te wykonywane według
                powtarzalnych, łatwych do zaprogramowania, procedur. Dzięki
                modelom AI zakres automatyzowalnych zadań rozszerza się także na
                te, które wymagają kreatywności lub analitycznego myślenia. W
                efekcie temat automatyzacji zaczyna dotykać nowe grupy
                pracowników, w tym badaczy oraz nauczycieli akademickich. Jednak
                grupa naukowców z ILO podkreśla, że GPT mają większy potencjał
                wspierać niż zastępować pracę (Gmyrek et al. 2023). Wzrost
                produktywności przy użyciu generatywnej AI został już zbadany
                eksperymentalnie, np. w kontekście zadań pisemnych (Noy, Zhang
                2023), programowania (Peng et al. 2023), czy obsługi klienta
                (Brynjolfsson et al. 2023). Generatywna AI ma potencjał
                wyrównywania efektów pracy między mniej a bardziej
                wykwalifikowanymi pracownikami - zarówno Noy i Zhang (2023), jak
                i Brynjolfsson et al. (2023) odnotowali większe korzyści z
                używania generatywnej AI podczas wykonywania zadań wśród osób o
                mniejszym doświadczeniu zawodowym.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {/* <GenAIBarChart /> */}
    </>
  );
};

export default GenAI;
