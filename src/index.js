// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    result = {};
    const KEYS = ['H', 'Q', 'D', 'N', 'P'],
          COINS = { 
                H: 50,
                Q: 25,
                D: 10,
                N: 5,
                P: 1
        };
    while (currency > 0) {
        for (let a in config) {
            if (config[a] <= currency) {
                result[a] = result[a] || 0;
                result[a]++;
                currency -= config[a];
                break;
            }
        }
    }

    return result;
};
}
