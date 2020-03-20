class RomanNumeralsAPI {
    static toRoman(inpNumber) {
        return new Promise((resolve, reject) => {
            let roman = "";
            let number = Number(inpNumber);
            const romanNumList = {
                M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50,
                XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
            };
            let validator;
            if (number < 1 || number > 3999)
                roman = -1;
            else {
                for (let key in romanNumList) {
                    validator = Math.floor(number / romanNumList[key]);
                    if (validator >= 0) {
                        for (let i = 0; i < validator; i++) {
                            roman += key;
                        }
                    }
                    number = number % romanNumList[key];
                }
            }
            resolve(roman);
        });
    }

    static fromRoman(inpRoman) {
        return new Promise((resolve, reject) => {
            let roman = inpRoman.toUpperCase(),
                lookup = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 },
                number = 0,
                i = roman.length;
            let validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;

            if (validator.test(roman)) {
                while (i--) {
                    if (lookup[roman[i]] < lookup[roman[i + 1]])
                        number -= lookup[roman[i]];
                    else
                        number += lookup[roman[i]];
                }
            }
            resolve(number);
        });
    }
}

export default RomanNumeralsAPI;