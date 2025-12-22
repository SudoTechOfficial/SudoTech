import { useMemo } from 'react';

interface BlinkingTextProps {
  text: string;
  blinkChance?: number;
}

export default function BlinkingText({ text, blinkChance = 0.25 }: BlinkingTextProps) {
  const characters = useMemo(() => {
    return text.split('').map((char, index) => ({
      char,
      shouldBlink: Math.random() < blinkChance && char.trim() !== '',
      delay: Math.random() * 4,
      duration: 1.5 + Math.random() * 2,
    }));
  }, [text, blinkChance]);

  return (
    <>
      {characters.map((item, index) => (
        <span
          key={index}
          className={item.shouldBlink ? 'char-blink' : ''}
          style={
            item.shouldBlink
              ? {
                  animationDelay: `${item.delay}s`,
                  animationDuration: `${item.duration}s`,
                }
              : undefined
          }
        >
          {item.char}
        </span>
      ))}
    </>
  );
}
