const matchParens = string => {
  return !string.split('').reduce((previous, current) => {
    if (current === '(') {
      previous++;
    }
    if (current == ')') {
      previous--;
    }
    if (previous < 0) {
      return true;
    }
    return previous;
  }, 0);
};

matchParens(')(');
