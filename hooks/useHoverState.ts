import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useHover = <T = undefined>(): [
  MutableRefObject<T | null>,
  boolean
] => {
  const [value, setValue] = useState(false);
  const ref = useRef<T | null>(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current as Element;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [] // Recall only if ref changes
  );

  return [ref, value];
};
