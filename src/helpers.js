

export const StringToNumber = (string) => {
  return parseInt(string);
}

export const isEmptyString = (string) => {

	return string != "" ? true : false;
}

export const convertToArray = (expression) => {
	const regex = /;|\n|,/g;

	if (expression.startsWith('//')) {

		expression = expression.substring(expression.indexOf('\n')).trim();
	}

	return expression.split(regex);
}


export const checkNegativeNumber = (arrayStringNumbers) => {

	const arrayNumbers = arrayStringNumbers.map((element) =>{

		const number = StringToNumber(element);

		if (number > 0) {
			return number;
		}else{
			throw new NegativeNumberException(number);
		}
	})
	return arrayNumbers;

}



function NegativeNumberException(number) {
	return new Error(`negatives not allowed-> ${number}`);
}




