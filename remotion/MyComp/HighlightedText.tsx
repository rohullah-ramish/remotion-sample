import { Fragment, useEffect, useMemo, useState } from "react";

type HighlightedTextProps = {
  text: string;
  duration: number;
};

function HighlightedText(props: HighlightedTextProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const timeoutDuration = useMemo(() => {
    const length = props.text.split(" ").length;

    return props.duration / length;
  }, [props.text, props.duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, timeoutDuration * 1000);

    return () => clearInterval(interval);
  }, [timeoutDuration]);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {props.text.split(" ").map((word, index) => (
          <Fragment key={index}>
            <span
              className={`fancy-word ${index === activeIndex ? "active" : ""}`}
            >
              {word}
            </span>
            &nbsp;
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default HighlightedText;
