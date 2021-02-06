import {
	isEmptyString,
  convertToArray,
	checkNegativeNumber,
} from "./helpers";

export default class Calculator {

	add(stringNumbers) {

		if (isEmptyString(stringNumbers)) {
			let result = 0;

			const arrayStringNumbers = convertToArray(stringNumbers);

      const arrayNumbers = checkNegativeNumber(arrayStringNumbers);

			for (let i = 0; i < arrayNumbers.length; i++) {

        if (arrayNumbers[i] >= 1000) {
          return arrayNumbers[i-1];
        }

				result += arrayNumbers[i];
			}
			return result;
		} else {
			return 0;
		}
	}
}
