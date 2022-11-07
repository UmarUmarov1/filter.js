function sum(numbers) {
  /*let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;*/
  const result = numbers.reduce(function (acc, item) {
    return acc += item;
  });
  return result;
}


/* ставит тире между словами */
function hyphenate(words) {
  /*let hyphenatedWords = '';

  /*for (let i = 0; i < words.length; i++) {
    if (hyphenatedWords === '') {
      hyphenatedWords = words[i];
    } else {
      hyphenatedWords += `-${words[i]}`;
    }
  }
}
  return hyphenatedWords;*/
  const result = words.reduce(function (acc, item){
    if (acc === '') {
      return item
    } else {
      return acc += `-${item}`;
    }
    });
  return result;
}
