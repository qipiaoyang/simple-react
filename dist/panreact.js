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
    //# sourceMappingURL=h.js.map

    function render(vnode, container) {
        // 当vnode为字符串时，渲染结果是一段文本
        if (typeof vnode === 'string') {
            var textNode = document.createTextNode(vnode);
            return container.appendChild(textNode);
        }
        var dom = document.createElement(vnode.tag);
        if (vnode.attrs) {
            Object.keys(vnode.attrs).forEach(function (key) {
                var value = vnode.attrs[key];
                setAttribute(dom, key, value); // 设置属性
            });
        }
        if (vnode.children) {
            vnode.children.forEach(function (child) { return render(child, dom); }); // 递归渲染子节点
        }
        return container.appendChild(dom); // 将渲染结果挂载到真正的DOM上
    }
    function setAttribute(dom, name, value) {
        // 如果属性名是className，则改回class
        if (name === 'className')
            name = 'class';
        // 如果属性名是onXXX，则是一个事件监听方法
        if (/on\w+/.test(name)) {
            name = name.toLowerCase();
            dom[name] = value || '';
            // 如果属性名是style，则更新style对象
        }
        else if (name === 'style') {
            if (!value || typeof value === 'string') {
                dom.style.cssText = value || '';
            }
            else if (value && typeof value === 'object') {
                for (var name_1 in value) {
                    // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
                    dom.style[name_1] = typeof value[name_1] === 'number' ? value[name_1] + 'px' : value[name_1];
                }
            }
            // 普通属性则直接更新属性
        }
        else {
            if (name !== 'class' && name in dom) {
                dom[name] = value || '';
            }
            if (value) {
                dom.setAttribute(name, value);
            }
            else {
                dom.removeAttribute(name);
            }
        }
    }

    exports.h = h;
    exports.render = render;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
