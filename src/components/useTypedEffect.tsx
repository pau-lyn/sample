import { useState, useEffect } from "react";

const useTypedEffect = (
  words: string[],
  typeSpeed: number,
  backSpeed: number
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingInterval, setTypingInterval] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const currentLength = displayedText.length;

      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, currentLength - 1));
        setTypingInterval(backSpeed);
      } else {
        setDisplayedText(currentWord.substring(0, currentLength + 1));
        setTypingInterval(typeSpeed);
      }

      if (!isDeleting && currentLength === currentWord.length) {
        setTypingInterval(2000); // Pause before deleting
        setIsDeleting(true);
      } else if (isDeleting && currentLength === 0) {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTypingInterval(500); // Pause before typing next word
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingInterval);

    return () => clearTimeout(typingTimeout);
  }, [
    displayedText,
    isDeleting,
    typingInterval,
    wordIndex,
    words,
    typeSpeed,
    backSpeed,
  ]);

  return displayedText;
};

export default useTypedEffect;
