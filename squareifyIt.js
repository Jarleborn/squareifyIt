function squareifyIt(text) {
  let line = ''
  for (var i = 0; i < text.length + 4; i++) {
    line+= '*'
  }
  console.log(line);
  console.log('* '+text +' *');
  console.log(line);

}
module.exports = squareifyIt;
