import { h } from "./h";

function render(vnode, container) {
    // 如果是字符串
    if(typeof vnode === "string") {
        const textNode = document.createTextNode(vnode);
        return container.appendChild(textNode)
    }
    const dom = document.createElement(vnode.tag);
    if(vnode.children) {
        vnode.children.forEach(child => render(child, dom));
    }
    if(vnode.attrs) {
        Object.keys(vnode.attrs).map((k,v) => {
            setAttribute(dom, k, v);
        })
    }
    return container.appendChild(dom);
}

function setAttribute(dom, key, value) {
    if(key === "style") {
        dom.cssText = value || "";
    } else {
        if(key !== 'class' && key in dom) {
            dom[key] = value;
        }
        if(value) {
            dom.setAttribute(key, value);
        } else {
            dom.removeAttribute(key);
        }
    }
}
export default {
    h,
    render
}