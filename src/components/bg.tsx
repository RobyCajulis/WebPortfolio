import { useEffect, useRef } from 'react';
import Chill from "../assets/Chill.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Modern browsers block autoplay until a user interacts with the page.
    // This attempt to play handles that restriction gracefully.
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay was prevented. Waiting for user interaction.", error);
        });
      }
    };

    // Try to play immediately
    playAudio();

    // Fallback: Play on first user click if browser blocked autoplay
    window.addEventListener('click', playAudio, { once: true });

    return () => {
      window.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={Chill} // Replace with your actual audio path
      loop
      autoPlay
      className="hidden" // Tailwind utility to hide the element completely
    />
  );
}