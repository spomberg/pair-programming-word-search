const wordSearch = (letters, word) => { 
  const wordReversed = word.split("").reverse().join("");
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
      if (l.includes(word) || l.includes(wordReversed)) return true
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(''))
  for (l of verticalJoin) {
      if (l.includes(word) || l.includes(wordReversed)) return true
  }

  return false;
}

const transpose = function(matrix) {
  let [row] = matrix
  return row.map((value, column) => matrix.map(row => row[column]))
};


module.exports = wordSearch