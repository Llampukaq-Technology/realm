import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
function RenderPlugins({ plugins, children, }) {
    const renderPluginTree = (plugins, children) => {
        if (!plugins || plugins.length === 0) {
            return null;
        }
        const lastIndex = plugins.length - 1;
        return plugins.map((Plugin, index) => React.cloneElement(Plugin, {}, index === lastIndex
            ? children
            : renderPluginTree(plugins[index + 1], children)));
    };
    return _jsx(_Fragment, { children: renderPluginTree(plugins, children) });
}
export default RenderPlugins;
