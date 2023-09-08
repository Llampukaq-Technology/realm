import React, { ReactNode, ReactElement } from "react";

function RenderPlugins({
  plugins,
  children,
}: {
  children: ReactNode;
  plugins?: ReactNode[];
}) {
  const renderPluginTree = (
    plugins: ReactNode[] | undefined,
    children: ReactNode
  ): ReactNode => {
    if (!plugins || plugins.length === 0) {
      return children;
    }
    const lastIndex = plugins.length - 1;
    return plugins.reduceRight(
      (acc: ReactNode, Plugin: ReactNode, index: number) => {
        if (index === lastIndex) {
          return React.cloneElement(Plugin as ReactElement, {}, acc);
        } else {
          return React.cloneElement(Plugin as ReactElement, {}, acc);
        }
      },
      children
    );
  };

  return <>{renderPluginTree(plugins, children)}</>;
}

export default RenderPlugins;
