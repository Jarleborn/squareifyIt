function squareifyIt(text) {
  let line = ''
  for (var i = 0; i < text.length + 4; i++) {
    line+= '*'
  }

  if (typeof text === 'object') {
    text = JSON.stringify(text, null, 2)
  }
  console.log(line);
  console.log('* '+text +' *');
  console.log(line);

}
module.exports = squareifyIt;
