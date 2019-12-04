(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.preact = {}));
}(this, (function (exports) { 'use strict';

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
        console.log(vnode, container, "2222");
        // 当vnode为字符串时，渲染结果是一段文本
        if (typeof vnode === 'string') {
            var textNode = document.createTextNode(vnode);
            return container.appendChild(textNode);
        }
        console.log(vnode, "11111");
        var dom = document.createElement(vnode.tag);
        // if (vnode.attrs) {
        //     Object.keys(vnode.attrs).forEach(key => {
        //         const value = vnode.attrs[key];
        //         setAttribute(dom, key, value);    // 设置属性
        //     });
        // }
        if (vnode.children) {
            vnode.children.forEach(function (child) { return render(child, dom); }); // 递归渲染子节点
        }
        return container.appendChild(dom); // 将渲染结果挂载到真正的DOM上
    }
    //# sourceMappingURL=index.js.map

    exports.h = h;
    exports.render = render;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
