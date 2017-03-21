/**
 * 自动获取焦点
 */
exports.focus = () => {
    return {
        inserted:(el, binding, vnode) => {
            el.focus();
        }
    };
};