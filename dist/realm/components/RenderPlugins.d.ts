import { ReactNode } from "react";
declare function RenderPlugins({ plugins, children, }: {
    children: ReactNode;
    plugins?: ReactNode[];
}): import("react/jsx-runtime").JSX.Element;
export default RenderPlugins;
