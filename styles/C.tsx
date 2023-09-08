import React, { PropsWithChildren } from "react";

function C(props: PropsWithChildren) {
  return <div>{props.children}</div>;
}

export default C;
