import dayjs from "dayjs";
import "./Live.scss";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";

dayjs.extend(relativeTime);

function Live() {
  // default value of countdown timer
  const [countdown, setCountdown] = useState("T-0:00:00:00");
  const [text, setText] = useState("Rozpoczęcie wydarzenia");
  const [imageDisplayState, setimageDisplayState] = useState("none");
  const [countdownDisplayState, setcountdownDisplayState] = useState("block");
  const [fD, setfD] = useState("column" as "row");

  // set leading zero
  const leadingZero = (n: number) => {
    return (n < 10 ? "0" : "") + n;
  };

  const then = Date.now() + 1000 * 15;
  // count down to a date
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      // const then = dayjs("2022-05-18 09:00:00").valueOf();
      const distance = then - now;

      // if date is in the past
      if (distance < 0) {
        setText("Oglądaj nas na żywo!");
        setimageDisplayState("block");
        setcountdownDisplayState("none");
        setfD("row" as "row");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown(
        `T-${days}:${leadingZero(hours)}:${leadingZero(minutes)}:${leadingZero(
          seconds
        )}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Live max-screen">
      <a
        href="https://twitch.tv/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ flexDirection: fD }}
      >
        <div
          className="live-image"
          style={{ display: imageDisplayState }}
        ></div>
        <div className="live-text">{text}</div>
        <div className="live-timer" style={{ display: countdownDisplayState }}>
          {countdown}
        </div>
      </a>
    </div>
  );
}

export default Live;
