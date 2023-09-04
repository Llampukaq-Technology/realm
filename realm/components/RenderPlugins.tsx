import React, { ReactNode } from "react";

function RenderPlugins({
  plugins,
  children,
}: {
  children: ReactNode;
  plugins?: ReactNode[];
}) {
  const renderPluginTree: any = (
    plugins: ReactNode[] | undefined,
    children: ReactNode
  ) => {
    if (!plugins || plugins.length === 0) {
      return null;
    }
    const lastIndex = plugins.length - 1;
    return plugins.map((Plugin: ReactNode, index) =>
      React.cloneElement(
        Plugin as React.ReactElement,
        {},
        index === lastIndex
          ? children
          : renderPluginTree(plugins[index + 1] as ReactNode[], children)
      )
    );
  };

  return <>{renderPluginTree(plugins, children)}</>;
}

export default RenderPlugins;
