
import RomanNumeralsAPI from '../api/RomanNumeralsAPI';

export function toRoman(inputNumber) {
    return RomanNumeralsAPI.toRoman(inputNumber).then(result => {
        return result;
    }).catch(error => {
        throw (error);
    });
}

export function fromRoman(inputRoman) {
    return RomanNumeralsAPI.fromRoman(inputRoman).then(result => {
        return result;
    }).catch(error => {
        throw (error);
    });
}