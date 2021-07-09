exports.min = function min(num) {
    if (!num || !num.length) {
        return 0;
    }
    let min = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] < min) {
            min = num[i];
        }
    }
    return min;
};

exports.max = function max(num) {
    if (!num || !num.length) {
        return 0;
    }
    let max = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max;
};

exports.avg = function avg(num) {
    if (!num || !num.length) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum / num.length;
};
