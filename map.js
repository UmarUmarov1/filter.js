/* добавляет восклицательный знак в конец каждого элемента массива */
function exclamations(strings) {
  /*const loudStrings = [];

  for (let i = 0; i < strings.length; i++) {
    loudStrings.push(strings[i] + '!');
  }

  return loudStrings;*/
  const result = strings.map(function(item) { 
    return item + '!';
  });
      return result;
  }


/* преобразует все числа из массива в квадрат */
function squareAll(numbers) {
 /* const squares = [];

  for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i] * numbers[i]);
  }

  return squares;*/
  const result = numbers.map(function(item) { 
    return item * item;
  });
      return result;
  }

  

/* заменяет все слова в массиве на их первые буквы */
function firstLetters(words) {
  /*const letters = [];

  for (let i = 0; i < words.length; i++) {
    letters.push(words[i][0]);
  }

  return letters;*/
  const result = words.map(function(item) { 
    return item[0];
  });
      return result;
  }
