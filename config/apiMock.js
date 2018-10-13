var generateApi = function () {
    var phones = [];
    var temping = [];
    var temp = [];

    for (var i = 0; i < 60; i++) {
        let number = (i + 5)*10 + (i + 7)
        if(number > 999){
            number = number/10;
        } else if (number < 100){
            number = number * 10;
        }
        temp[i] = number.toString() + "-"
    }

    for (var i = 0; i < 60; i++) {
        let v = temp[i] + temp[i + 1] + temp[i + 2].slice(0, -1);
        temping = {
            id: i,
            number: v
        };
        phones.push(temping);
        i = i + 2;
    }

    return { "phones": phones };
}

module.exports = generateApi;