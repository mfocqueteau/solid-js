import css from "./BachilleratoStyle.module.css";
import { LETTERS } from "./BachilleratoConstants";
import { useForm } from "../../hooks/useForm";

type Props = {
  gameLetters: ReturnType<typeof useForm<Record<(typeof LETTERS)[number], boolean>>>;
};

export function LetterStrip(props: Props) {
  const { gameLetters } = props;

  function toggleLetter(letter: (typeof LETTERS)[number]) {
    return () => gameLetters.setValues((prev) => ({ ...prev, [letter]: !prev[letter] }));
  }

  return (
    <>
      {LETTERS.map((l) => (
        <>
          <span class={`${css.label} ${gameLetters.values()[l] ? css.activeLabel : ""}`} onclick={toggleLetter(l)}>
            {l}
          </span>
        </>
      ))}
    </>
  );
}
