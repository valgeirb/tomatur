import { Howl } from "howler";

export default function useSound(url) {
  const play = () => {
    const sound = new Howl({
      src: url,
    });
    return sound.play();
  };

  return {
    play,
  };
}
