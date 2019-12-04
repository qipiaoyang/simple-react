export function h(tag, attrs, ...children) {
    const tagName = typeof tag === "function" ? tag() : {
        tag: tag,
        attrs,
        children
    };
    return tagName
}

