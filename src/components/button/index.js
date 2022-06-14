import React from "react";

import { Button } from "./style";

export default function ButtonComponent({
  children,
  buttonBackground,
  buttonColor,
  buttonBorder,
  buttonMarginDesk,
  onClick,
}) {
  return (
    <Button
      buttonBackground={buttonBackground}
      buttonColor={buttonColor}
      buttonBorder={buttonBorder}
      buttonMarginDesk={buttonMarginDesk}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

Button.defaultProps = {
  buttonBackground: "#E76316",
  buttonBorder: "none",
  buttonMarginDesk: 0,
  buttonColor: "#FFF",
};
