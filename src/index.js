module.exports = function toReadable(number) {
    let arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number % 1 !== 0 || number < 0) {
        console.log('Enter a positive integer');
    }

    if (number === 0) {
        return "zero";
    }
    else if (number < 20) {
        return (arr[number]);
    }

    else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return arrDozens[Math.floor(number / 10)];
        }
        return (arrDozens[Math.floor(number / 10)] + " " + arr[number % 10]);
    }

    else if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return arr[Math.floor(number / 100)] + " hundred";
        }

        if (Math.floor(number % 100 / 10) == 1 && number % 10 !== 0) {
            return arr[Math.floor(number / 100)] + " hundred " + arr[number % 100];
        }
        if (Math.floor(number % 10 === 0)) {
            if (Math.floor(number % 100 === 10)) {
                return arr[Math.floor(number / 100)] + " hundred " + arr[number % 100];
            }
            return arr[Math.floor(number / 100)] + " hundred " + arrDozens[number % 100 / 10];
        }
        if (Math.floor(number / 10) % 10 === 0) {
            return arr[Math.floor(number / 100)] + " hundred " + arr[number % 100];
        }
        return arr[Math.floor(number / 100)] + " hundred " + arrDozens[Math.floor(number % 100 / 10)] + " " + arr[number % 10];
    }


}
