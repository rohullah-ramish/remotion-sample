import React, { useMemo } from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { DURATION_IN_FRAMES } from "../../types/constants";

const outer: React.CSSProperties = {};

export const TextBounce: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const container: React.CSSProperties = useMemo(() => {
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    };
  }, []);

  const scale = spring({
    fps,
    from: 0.75,
    to: 1,
    frame,
    config: { damping: 100, stiffness: 1000, mass: 1 },
  });

  const content: React.CSSProperties = useMemo(() => {
    return {
      transform: `scale(${scale})`,
      transformOrigin: "center",
      fontFamily: '"Luckiest Guy", cursive',
      fontSize: "5.5rem",
      fontWeight: 400,
      width: "100%",
    };
  }, [scale]);

  return (
    <div style={container}>
      <div style={content}>{children}</div>
    </div>
  );
};
