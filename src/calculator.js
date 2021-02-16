import {
	isEmptyString,
	convertToArrayNumbers,
	checkNegativeNumber,
	calculateSum,
} from "./helpers";

export default class Calculator {
	add(stringNumbers) {
		if (isEmptyString(stringNumbers)) {
			const arrayNumbers = convertToArrayNumbers(stringNumbers); // ['1','2']
			checkNegativeNumber(arrayNumbers);
			return calculateSum(arrayNumbers);
		}
		return 0;
	}
}
