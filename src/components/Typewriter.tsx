"use client";

import { useEffect, useState } from "react";

interface Props {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}

export function Typewriter({
  words,
  typeSpeed = 90,
  deleteSpeed = 45,
  pause = 1600,
  className = "",
}: Props) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          );
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, pause]);

  return <span className={`caret ${className}`}>{text}</span>;
}
