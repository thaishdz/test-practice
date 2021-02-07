import { isEmptyString, convertToArray, calculateSum } from "./helpers";

export default class Calculator {
	add(stringNumbers) {
		if (isEmptyString(stringNumbers)) {
			const arrayNumbers = convertToArray(stringNumbers); // ['1','2']

			return calculateSum(arrayNumbers);
		}
		return 0;
	}
}
