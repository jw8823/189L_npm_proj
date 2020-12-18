function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function writeTextFile(afilename, output)
{
  var txtFile =new File(afilename);
  txtFile.writeln(output);
  txtFile.close();
}

const names = require("all-the-package-names")

// Most-depended-on names are first. See what's popular!
names.slice(0,5)
// [
//   'mocha',
//   'chai',
//   'lodash',
//   'grunt',
//   'eslint'
// ]

names.includes('superagent')
// => true

// Check if a given package name exists
names.includes('crazy-new-package-name')
// => false

console.log(names.length)
// => 286289

names.filter(name => name.includes('banana'))
// => [ 'banana', 'banana-banana', 'banana-split', ...]

var i;
var j;
for (j = 0; j < 220 * 50; j++) {
  let output_name = []
  // Writing to a txt file
  const fs = require('fs') 
  // Data which will write in a file. 
  for (i = 0; i < 100; i++) {
    let random_number = getRandomArbitrary(0, names.length)
    output_name.push(names[random_number]);
    names.splice(random_number, 1)
  }
  
  fs.writeFile(j + '_names.txt', output_name, (err) => { 
      // In case of a error throw err. 
      if (err) throw err; 
  }) 
}
