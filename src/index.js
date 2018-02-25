module.exports = function makeExchange(currency) {
    result = {};
    if (!currency) return result;
    if (currency > 10000) return 0;

    num = {"H": 50, "Q": 25, "D": 10, "N": 5, "P": 1};

    while (currency > 0) {
        for (let a in num) {
            if (num[a] <= currency) {
                result[a] = result[a] || 0;
                result[a]++;
                currency -= num[a];
                break;
            }
        }
    }

    return result;
};
