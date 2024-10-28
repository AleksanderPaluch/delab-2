import Reveal from "../Reveal/Reveal";
import css from "./Recomendations.module.css";

const Recomendations = () => {
  return (
    <section className={css.section}>
        <Reveal   amount="0.99">
          <h1 className={css.title} id="rekomendacje">
            Rekomendacje
          </h1>
        </Reveal>
      <div className={css.recomendBox}>
      
        <div>
          <Reveal >
            {" "}
            <h2 className={css.subTitle} id="Dla całego środowiska UW">
              Dla całego środowiska UW
            </h2>
          </Reveal>
          <Reveal slide="false" >
            {" "}
            <ul className={css.list}>
              <li className={css.item}>
                Zapoznaj się z wytycznymi UW dotyczącymi korzystania z narzędzi
                sztucznej inteligencji w procesie kształcenia, które zostały
                zawarte w{" "}
                <a
                  href="https://dokumenty.uw.edu.pl/dziennik/DURK/Lists/Dziennik/Attachments/134/DURK.2023.98.UURK.98.pdf"
                  target="_blank"
                >
                  Uchwale nr 98 Uniwersyteckiej Rady ds. Kształcenia
                </a>{" "}
                z dnia z dnia 8 grudnia 2023 r. (dalej nazywanej Uchwałą) →{" "}
                <a href="wytyczne/">więcej</a>
              </li>
              <li className={css.item}>
                <p>
                  Sprawdź, czy Rada Dydaktyczna w Twojej dyscyplinie lub Twoja
                  jednostka określa dodatkowe zasady korzystania z narzędzi
                  generatywnej AI. → <a href="">więcej</a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Nie wprowadzaj żadnych danych poufnych a także danych
                  osobowych (np. imię, nazwisko, numer indeksu, telefonu, pesel
                  itp.) do narzędzi generatywnej AI. Pamiętaj, że dane i treści
                  wytwarzane przez osoby studiujące (np. prace zaliczeniowe,
                  egzaminy), jak i pracujące na UW (np. prezentacje z wykładów,
                  artykuły czy materiały do nauki) objęte są ochroną. →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.2d5hqv1oe4hq">
                    więcej
                  </a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Jeśli nie masz pewności w kwestii polityki prywatności i
                  bezpieczeństwa danego narzędzia generatywnej AI, załóż, że
                  wprowadzone oraz wygenerowane treści mogą zostać udostępnione
                  dalej.
                  <a href="">więcej</a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Poświęć chwilę na zastanowienie się nad etycznymi wyzwaniami
                  związanymi z narzędziami generatywnej AI i ustosunkowanie się
                  – w oparciu o dostępne materiały i argumenty – do tych wyzwań.
                  → <a href="">więcej</a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Bądź na bieżąco z praktykami i zastosowaniami narzędzi
                  generatywnej AI w swojej dziedzinie. Zapoznaj się z
                  przykładowym użyciem narzędzi genAI w →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.xcfdgul8tfx9">
                    pracy badawczej
                  </a>
                  , →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.5yvs245bdvqg">
                    dydaktycznej
                  </a>{" "}
                  i →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.9e1k5yz7z9kz">
                    podczas studiowania
                  </a>
                  .
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Śledź i zapisuj swoje sposoby korzystania z narzędzi
                  generatywnej AI podczas studiowania i pracy na Uniwersytecie.
                  Pamiętaj, że możesz być zobowiązany/a do zaraportowania
                  takiego użycia.
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.i2m7nday8l8d">
                    więcej
                  </a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Podchodź krytycznie i sprawdzaj treści produkowane z użyciem
                  generatywnej AI. Pamiętaj, że jesteś w pełni odpowiedzialny/a
                  za treści, które promujesz i publikujesz. →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.o0hryh652ogk">
                    więcej
                  </a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Pamiętaj, że treści wygenerowane przez generatywną AI powinny
                  być odpowiednio cytowane. Uważaj na problem
                  “nieintencjonalnego plagiatu”. →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.61bocp21ptvz">
                    więcej
                  </a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Korzystanie z narzędzi generatywnej AI wymaga odpowiednich
                  kompetencji. Zapoznaj się z materiałami przygotowanymi przez
                  DELab UW i INNE OŚRODKI??? →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.lgsm2y6ly6qc">
                    więcej
                  </a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Pamiętaj, że generatywna AI to technologia, która dopiero się
                  rozwija, a przedstawione rekomendacje dotyczą jej możliwości
                  na dzień XXXXX. Rekomendacje mogą ulec zmianie, zarówno w
                  związku z regulacjami prawnymi, jak i rozszerzającymi się
                  możliwościami technologii.
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
        <div>
          <Reveal slide="true">
            {" "}
            <h2 className={css.subTitle} id="Dla dydaktyków i dydaktyczek">
              Dla dydaktyków i dydaktyczek
            </h2>
          </Reveal>
          <Reveal slide="false" >
            {" "}
            <ul  className={css.list}>
              <li className={css.item}>
                <p>
                  Przemyśl i przeformułuj swoje kursy tak, aby uwzględniały
                  zmiany zachodzące w związku z możliwościami generatywnej AI. →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.r23rp2jnxfsg">
                    więcej
                  </a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Na początku każdego kursu jasno określ swoje oczekiwania
                  dotyczące korzystania z generatywnej AI przez studentów/ki i
                  uwzględnij je w sylabusie. Jeśli sam/a używasz generatywnej AI
                  w nauczaniu, poinformuj o tym swoich studentów. →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.r23rp2jnxfsg">
                    więcej
                  </a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Zwróć uwagę na dostępność narzędzi generatywnej AI. Płatne
                  wersje zazwyczaj generują “lepsze” treści, jednak nie każdy
                  student może mieć do nich dostęp. Niektóre narzędzia
                  generatywnej AI posiadają także ograniczenia wiekowe. →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.r23rp2jnxfsg">
                    więcej
                  </a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Pamiętaj, że rozwiązania wykrywające użycie generatywnej AI
                  często podają błędną ocenę. Nie opieraj swojej oceny wyłącznie
                  na wynikach przez nie wygenerowanych. →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.k7ou8i3loh83">
                    więcej
                  </a>
                </p>
              </li>
            </ul>
          </Reveal>
          <Reveal slide="true">
            {" "}
            <h2 className={css.subTitle} id="Dla studentów i studentek">
              Dla studentów i studentek
            </h2>
          </Reveal>
          <Reveal slide="false" >
            <ul className={css.list}>
              <li className={css.item}>
                <p>
                  Zapoznaj się z zasadami korzystania generatywnej AI w ramach
                  różnych etapów kursu: na zajęciach, podczas wykonywania prac
                  domowych, zaliczeniowych i egzaminu. W przypadku jakichkolwiek
                  niepewności – dopytaj osoby prowadzącej zajęcia. →{" "}
                  <a  href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.9e1k5yz7z9kz">
                    więcej
                  </a>
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Jeżeli prowadzący/a nie podaje informacji o sposobach
                  korzystania z narzędzi generatywnej AI w ramach kursu,
                  postępuj zgodnie z{" "}
                  <a href="https://dokumenty.uw.edu.pl/dziennik/DURK/Lists/Dziennik/Attachments/134/DURK.2023.98.UURK.98.pdf">
                    Uchwałą
                  </a>{" "}
                  →
                </p>
              </li>
              <li className={css.item}>
                <p>
                  Pamiętaj, aby rozwijać swoje kompetencje związane z
                  narzędziami generatywnej AI, ponieważ mogą być kluczowe na
                  rynku pracy. →{" "}
                  <a href="https://docs.google.com/document/d/1AT2ocGuGsHhxnWGehLP9QVdYcwX0Fuuvkv6p-7MM0oE/edit#bookmark=id.lgsm2y6ly6qc">
                    więcej
                  </a>
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Recomendations;
