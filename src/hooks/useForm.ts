import { createSignal } from "solid-js";

export function useForm<T extends Record<string, unknown>>(init: T) {
  const [values, setValues] = createSignal(init);

  function handleControlChange(field: keyof T) {
    return (e: any) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  return { values, setValues, handleControlChange };
}
