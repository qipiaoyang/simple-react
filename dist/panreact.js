(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.preact = factory());
}(this, (function () { 'use strict';

    function h(tag, attrs) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        var tagName = typeof tag === "function" ? tag() : {
            tag: tag,
            attrs: attrs,
            children: children
        };
        return tagName;
    }

    function render(vnode, container) {
        console.log(vnode, 'vnode=====');
        // 如果是字符串
        if (typeof vnode === "string") {
            var textNode = document.createTextNode(vnode);
            return container.appendChild(textNode);
        }
        var dom = document.createElement(vnode.tag);
        if (vnode.children) {
            vnode.children.forEach(function (child) { return render(child, dom); });
        }
        if (vnode.attrs) {
            Object.keys(vnode.attrs).map(function (k, v) {
                setAttribute(dom, k, v);
            });
        }
        return container.appendChild(dom);
    }
    function setAttribute(dom, key, value) {
        if (key === "style") {
            dom.cssText = value || "";
        }
        else {
            console.log(dom.__proto__, "dom========");
            dom.setAttribute(key, value);
        }
    }
    var index = {
        h: h,
        render: render
    };

    return index;

})));
