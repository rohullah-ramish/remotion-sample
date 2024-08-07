import { PropsWithChildren } from "react";

function CaptionsWrapper(props: PropsWithChildren) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingTop: "350px",
      }}
    >
      {props.children}
    </div>
  );
}

export default CaptionsWrapper;
