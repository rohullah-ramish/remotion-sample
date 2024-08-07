import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { images, stamps } from "../../types/constants";
import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";
import { TextBounce } from "./TextBounce";
import HighlightedText from "./HighlightedText";
import CaptionsWrapper from "./CaptionsWrapper";

loadFont();

const container: React.CSSProperties = {
  backgroundColor: "black",
  position: "relative",
};

export const Main = () => {
  const { fps } = useVideoConfig();

  let imageDuration = 0;
  let captionDuration = 0;

  return (
    <AbsoluteFill style={container}>
      {images.map((image, key) => (
        <Sequence
          key={key}
          from={(() => {
            const prev = imageDuration;
            imageDuration += image.duration;
            return prev * fps;
          })()}
          durationInFrames={image.duration * fps}
        >
          <div
            className="animate-span"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                scale: 1.5,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-20%",
                  left: "-20%",
                  width: "120%",
                  height: "120%",
                  zIndex: 2,
                  background: "black",
                  opacity: 0.15,
                }}
              ></div>
              {key % 2 ? (
                <img src={image.src} className="slide-left-image" />
              ) : (
                <img src={image.src} className="slide-top-image" />
              )}
            </div>
          </div>
        </Sequence>
      ))}
      {stamps.map((stamp, key) => (
        <Sequence
          key={key}
          from={(() => {
            const prev = captionDuration;
            captionDuration += stamp.duration;
            return prev * fps;
          })()}
          durationInFrames={stamp.duration * fps}
        >
          <CaptionsWrapper>
            <TextBounce>
              <HighlightedText text={stamp.title} duration={stamp.duration} />
            </TextBounce>
          </CaptionsWrapper>
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
