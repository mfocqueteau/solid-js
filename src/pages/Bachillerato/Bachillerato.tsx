import css from "./BachilleratoStyle.module.css";
import { useForm } from "../../hooks/useForm";
import { LETTERS } from "./BachilleratoConstants";
import { Button } from "@suid/material";
import { createSignal } from "solid-js";
import { formatTime } from "./BachilleratoUtils";
import { AddCircle, RemoveCircle } from "@suid/icons-material";

export function Bachillerato() {
  const gameLetters = useForm(LETTERS);
  const [currentLetter, setCurrentLetter] = createSignal("");
  const [stopTime, setStopTime] = createSignal(90);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [loading, setLoading] = createSignal(false);
  const alarm = new Audio("/alarm.mp3");

  function toggleLetter(letter: keyof typeof LETTERS) {
    return () => gameLetters.setValues((prev) => ({ ...prev, [letter]: !prev[letter] }));
  }

  function removeLetter(letter: keyof typeof LETTERS) {
    gameLetters.setValues((prev) => ({ ...prev, [letter]: false }));
  }

  function pickRandomLetter() {
    const remainingLetters = Object.entries(gameLetters.values())
      .filter(([_letter, status]) => status)
      .map(([letter, _status]) => letter);
    const randomLetter = remainingLetters[Math.floor(Math.random() * remainingLetters.length) % remainingLetters.length];
    removeLetter(randomLetter as keyof typeof LETTERS);
    setCurrentLetter(randomLetter);
  }

  function nextRound() {
    setCurrentTime(3);
    setLoading(true);
    const headsupTime = setInterval(() => {
      setCurrentTime((prev) => prev - 1);
      if (currentTime() == 0 && loading()) {
        pickRandomLetter();
        setLoading(false);
        setCurrentTime(stopTime);
      } else if (currentTime() == 0) {
        alarm.play();
        clearInterval(headsupTime);
      }
    }, 1_000);
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
        <div style={{ "align-items": "center", display: "flex", "font-size": "x-large", gap: "1rem", "justify-content": "center" }}>
          <RemoveCircle fontSize="large" onClick={() => setStopTime((prev) => prev - 10)} style={{ cursor: "pointer" }} />
          {formatTime(stopTime())}
          <AddCircle fontSize="large" onClick={() => setStopTime((prev) => prev + 10)} style={{ cursor: "pointer" }} />
        </div>
        <div style={{ "align-items": "center", display: "flex", "font-size": "x-large", gap: "1rem", "justify-content": "center" }}>
          {formatTime(currentTime())}
        </div>
        <div class={css.currentLetter}>{loading() ? <></> : currentLetter()}</div>
        <Button onclick={nextRound} style={{ color: "var(--accent)" }}>
          Siguiente letra
        </Button>
        <audio src="./alarm"></audio>
      </div>
    </>
  );
}
