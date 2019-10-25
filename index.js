function getValue(obj, path) {
    const keys = path.split('.');

    let value = obj;

    for(let i = 0; i < keys.length; i++) {
        if (value) {
            value = value[keys[i]];
        }
        else {
            return undefined;
        }
    }

    return value;
}

module.exports = {
    getValue
};