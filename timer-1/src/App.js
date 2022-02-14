import React, { useState, useEffect } from "react";
export default function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSecond((prev) => prev + 1), 1000);
    console.log("running");
    if (minute >= 5 && second >= 5) {
      setHour((prev) => prev + 1);
      setMinute(0);
      setSecond(0);
      console.log("running ho");
    }
    if (second >= 5) {
      setMinute((prev) => prev + 1);
      setSecond(0);
      console.log("running mi");
    }
    return () => clearInterval(id);
  }, [second]);

  return (
    <div>
      <h1>
        {`${hour < 9 ? "0" : ""}${hour}:${minute < 9 ? "0" : ""}${minute}:${
          second < 9 ? "0" : ""
        }${second}`}
        {/* { {hour < 9 ? '0' : ''}:{minute < 9 ? '0' : '':{second < 9 ? '0' : ''{second}}} */}
      </h1>
    </div>
  );
}
