// ищем число в массиве numbers, которое меньше чем limit
function firstUnder(numbers, limit) {
/*  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < limit) {
      return numbers[i];
    }
  }

  return undefined*/
  const result = numbers.find(function(item) {
    return item < limit;
  });
  return result
}

// ищет строку в массиве strings, которая начинается с указанной буквы
function startsWith(strings, letter) {
  /*for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === letter) {
      return strings[i];
    }
  }

  return undefined;*/
  const result = strings.find(function(item) {
  return item[0] === letter;
  })
  return result
}
