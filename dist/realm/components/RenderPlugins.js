import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
function RenderPlugins({ plugins, children, }) {
    const renderPluginTree = (plugins, children) => {
        if (!plugins || plugins.length === 0) {
            return children;
        }
        const lastIndex = plugins.length - 1;
        return plugins.reduceRight((acc, Plugin, index) => {
            if (index === lastIndex) {
                return React.cloneElement(Plugin, {}, acc);
            }
            else {
                return React.cloneElement(Plugin, {}, acc);
            }
        }, children);
    };
    return _jsx(_Fragment, { children: renderPluginTree(plugins, children) });
}
export default RenderPlugins;
