
/**
 * 手机或固定电话验证
 */
exports.phone = () => {
    return {
        getMessage:(field) => '格式错误',
        validate: (value) => {
            let length = value.length;
            return (length == 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)) || (length == 12 && /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value));
        }
    };
};

