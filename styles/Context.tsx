import { useApp } from "@/realm";
import React, { PropsWithChildren } from "react";

function Context(props: PropsWithChildren<{ name: string }>) {
  return <div>{props.children}</div>;
}

export default Context;
