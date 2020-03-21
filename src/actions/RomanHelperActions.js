
import RomanNumeralsAPI from '../api/RomanNumeralsAPI';

//toRoman converts integer to roman
export function toRoman(inputNumber) {
    return RomanNumeralsAPI.toRoman(inputNumber).then(result => {
        return result;
    }).catch(error => {
        throw (error);
    });
}

//fromRoman converts roman to integer
export function fromRoman(inputRoman) {
    return RomanNumeralsAPI.fromRoman(inputRoman).then(result => {
        return result;
    }).catch(error => {
        throw (error);
    });
}