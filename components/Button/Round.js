import React from "react";
import { Button } from "antd";
export const Round = (props) => {
  return (
    <Button
      shape="round"
      style={{
        padding: "10px",
        alignItems: "center",
        height: "100%",
        borderColor: "black",
        borderWidth: "2px",
      }}
      {...props}
    >
      {props.title}
    </Button>
  );
};
