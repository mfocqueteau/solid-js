import css from "./BachilleratoStyle.module.css";
import { useForm } from "../../hooks/useForm";
import { LETTERS } from "./BachilleratoConstants";
import { LetterStrip } from "./LetterStrip";
import { Button } from "@suid/material";
import { createSignal } from "solid-js";

export function Bachillerato() {
  const gameLetters = useForm(Object.fromEntries(LETTERS.map((l) => [l, true])));
  const [currentLetter, setCurrentLetter] = createSignal("");

  function removeLetter(letter: (typeof LETTERS)[number]) {
    gameLetters.setValues((prev) => ({ ...prev, [letter]: false }));
  }

  function nextNumber() {
    const remainingLetters = Object.entries(gameLetters.values())
      .filter(([_letter, status]) => status)
      .map(([letter, _status]) => letter);
    const randomLetter = remainingLetters[Math.floor(Math.random() * remainingLetters.length) % remainingLetters.length];
    removeLetter(randomLetter);
    setCurrentLetter(randomLetter);
  }

  return (
    <>
      <h1>Bachillerato</h1>

      <ul class={css.rules}>
        <li>La letras disponibles para jugar están en verde.</li>
        <li>Puedes deseleccionar las que no te interesa usar en el juego antes de partir.</li>
      </ul>

      <div class={css.control}>
        <Button
          onclick={() => gameLetters.setValues(Object.fromEntries(LETTERS.map((l) => [l, true])))}
          style={{ color: "var(--accent)", "z-index": 0 }}
        >
          Activar todas
        </Button>
        <Button onclick={() => gameLetters.setValues(Object.fromEntries(LETTERS.map((l) => [l, false])))} style={{ color: "var(--accent)" }}>
          Desactivar todas
        </Button>
      </div>

      <LetterStrip gameLetters={gameLetters} />

      <div style={{ display: "flex", "flex-direction": "column", margin: "2rem auto", width: "15rem" }}>
        <div class={css.currentLetter}>{currentLetter()}</div>
        <Button onclick={nextNumber} style={{ color: "var(--accent)" }}>
          Siguiente número
        </Button>
      </div>
    </>
  );
}
