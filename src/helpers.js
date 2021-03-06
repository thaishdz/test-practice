/**
 * Passes string elements to numbers
 * @param {string} arrString
 */

const stringToNumber = (arrString) => {
  const arrNumbers = [];

  arrString.forEach((string) => {
    arrNumbers.push(parseInt(string));
  });

  return arrNumbers;
};

/**
 * Checks if there's a empty string
 * @param {*} string
 */

export const isEmptyString = (string) => {
  return string != "" ? true : false;
};

/**
 * Converts a string to array of string elements
 * @param {string} expression
 */
export const convertToArrayNumbers = (expression) => {
  if (hasCustomDelimiter(expression)) {
    return getExpressionCustomDelimiter(expression);
  }
  return getExpressionDefaultDelimiter(expression);
};

function hasCustomDelimiter(expression) {
  return expression.startsWith("//") ? true : false;
}

/**
 * if there is no a custom delimiter into the expression
 * then applies the default delimiter
 * @param {string} expression
 */
function getExpressionDefaultDelimiter(expression) {
  const regexDelimiterDefault = /\n|,/g; // default delimiter is ","
  return stringToNumber(expression.split(regexDelimiterDefault));
}

function getExpressionCustomDelimiter(expression) {
  const customDelimiter = getCustomDelimiter(expression);
  expression = expression.substring(expression.indexOf("\n")).trim(); // the expression that I want is after \n Ej. : \n1*2%3

  for (let i = 0; i < customDelimiter.length; i++) {
    expression = expression.split(customDelimiter[i]).join(); // if there's multiple delimiters I loop through them 1,2,3
  }
  return stringToNumber(expression.split(',')); // converts again into array [1,2,3]
}

function getCustomDelimiter(expression) {
  let delimiter = "";
  delimiter = expression // get custom delimiter in the expression
    .substring(
      expression.indexOf(expression.charAt(2)),
      expression.indexOf("\n")
    )
    .trim();

  if (delimiter.length > 1) {
    // means multiple delimiter
    return delimiter.substring(1, delimiter.length - 1).split("][");
  }

  return delimiter;
}

/**
 * Check if there's any negative number
 * @param {int} arrayNumbers
 */

export const checkNegativeNumber = (arrayNumbers) => {
  const negativesNumbersArr = []; // for showing multiple negative numbers

  arrayNumbers.forEach((number) => {
    if (number < 0) negativesNumbersArr.push(number);
  });

  if (negativesNumbersArr.length) {
    throw new NegativeNumberException(negativesNumbersArr);
  }
};


/**
 * Triggered this exception if there's any negative number
 * @param {*} negativeNumbers
 */

function NegativeNumberException(negativeNumbers) {
  return new Error(`negatives not allowed-> ${negativeNumbers.join(", ")}`);
}

export function calculateSum(arrayNumbers) {
  let result = 0;

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] <= 1000) {
      result += arrayNumbers[i];
    }
  }
  return result;
}
