import css from "./BachilleratoStyle.module.css";
import { useForm } from "../../hooks/useForm";
import { LETTERS } from "./BachilleratoConstants";
import { Button } from "@suid/material";
import { createSignal } from "solid-js";

export function Bachillerato() {
  const gameLetters = useForm(LETTERS);
  const [currentLetter, setCurrentLetter] = createSignal("");

  function toggleLetter(letter: keyof typeof LETTERS) {
    return () => gameLetters.setValues((prev) => ({ ...prev, [letter]: !prev[letter] }));
  }

  function removeLetter(letter: keyof typeof LETTERS) {
    gameLetters.setValues((prev) => ({ ...prev, [letter]: false }));
  }

  function nextNumber() {
    const remainingLetters = Object.entries(gameLetters.values())
      .filter(([_letter, status]) => status)
      .map(([letter, _status]) => letter);
    const randomLetter = remainingLetters[Math.floor(Math.random() * remainingLetters.length) % remainingLetters.length];
    removeLetter(randomLetter as keyof typeof LETTERS);
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
        <Button onclick={() => gameLetters.setValues(LETTERS)} style={{ color: "var(--accent)" }}>
          Reset
        </Button>
      </div>

      {Object.keys(LETTERS).map((l) => (
        <span
          class={`${css.label} ${gameLetters.values()[l as keyof typeof LETTERS] ? css.activeLabel : ""}`}
          onclick={toggleLetter(l as keyof typeof LETTERS)}
        >
          {l}
        </span>
      ))}

      <div style={{ display: "flex", "flex-direction": "column", margin: "2rem auto", width: "15rem" }}>
        <div class={css.currentLetter}>{currentLetter()}</div>
        <Button onclick={nextNumber} style={{ color: "var(--accent)" }}>
          Siguiente letra
        </Button>
      </div>
    </>
  );
}
