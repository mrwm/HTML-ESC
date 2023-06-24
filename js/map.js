var textBoxes = document.querySelectorAll('textarea')

const htmlEscape = new Map()

//a-z
htmlEscape.set('a', '&#97')
htmlEscape.set('b', '&#98')
htmlEscape.set('c', '&#99')
htmlEscape.set('d', '&#100')
htmlEscape.set('e', '&#101')
htmlEscape.set('f', '&#102')
htmlEscape.set('g', '&#103')
htmlEscape.set('h', '&#104')
htmlEscape.set('i', '&#105')
htmlEscape.set('j', '&#106')
htmlEscape.set('k', '&#107')
htmlEscape.set('l', '&#108')
htmlEscape.set('m', '&#109')
htmlEscape.set('n', '&#110')
htmlEscape.set('o', '&#111')
htmlEscape.set('p', '&#112')
htmlEscape.set('q', '&#113')
htmlEscape.set('r', '&#114')
htmlEscape.set('s', '&#115')
htmlEscape.set('t', '&#116')
htmlEscape.set('u', '&#117')
htmlEscape.set('v', '&#118')
htmlEscape.set('w', '&#119')
htmlEscape.set('x', '&#120')
htmlEscape.set('y', '&#121')
htmlEscape.set('z', '&#122')

//A-Z
htmlEscape.set('A', '&#65')
htmlEscape.set('B', '&#66')
htmlEscape.set('C', '&#67')
htmlEscape.set('D', '&#68')
htmlEscape.set('E', '&#69')
htmlEscape.set('F', '&#70')
htmlEscape.set('G', '&#71')
htmlEscape.set('H', '&#72')
htmlEscape.set('I', '&#73')
htmlEscape.set('J', '&#74')
htmlEscape.set('K', '&#75')
htmlEscape.set('L', '&#76')
htmlEscape.set('M', '&#77')
htmlEscape.set('N', '&#78')
htmlEscape.set('O', '&#79')
htmlEscape.set('P', '&#80')
htmlEscape.set('Q', '&#81')
htmlEscape.set('R', '&#82')
htmlEscape.set('S', '&#83')
htmlEscape.set('T', '&#84')
htmlEscape.set('U', '&#85')
htmlEscape.set('V', '&#86')
htmlEscape.set('W', '&#87')
htmlEscape.set('X', '&#88')
htmlEscape.set('Y', '&#89')
htmlEscape.set('Z', '&#90')

// 0-9
htmlEscape.set('0', '&#48')
htmlEscape.set('1', '&#49')
htmlEscape.set('2', '&#50')
htmlEscape.set('3', '&#51')
htmlEscape.set('4', '&#52')
htmlEscape.set('5', '&#53')
htmlEscape.set('6', '&#54')
htmlEscape.set('7', '&#55')
htmlEscape.set('8', '&#56')
htmlEscape.set('9', '&#57')

// Other characters
htmlEscape.set(' ', '&#32')
htmlEscape.set('!', '&#33')
htmlEscape.set('"', '&#34')
htmlEscape.set('#', '&#35')
htmlEscape.set('$', '&#36')
htmlEscape.set('%', '&#37')
htmlEscape.set('&', '&#38')
htmlEscape.set("'", '&#39')
htmlEscape.set('(', '&#40')
htmlEscape.set(')', '&#41')
htmlEscape.set('*', '&#42')
htmlEscape.set('+', '&#43')
htmlEscape.set(',', '&#44')
htmlEscape.set('-', '&#45')
htmlEscape.set('.', '&#46')
htmlEscape.set('/', '&#47')
htmlEscape.set(':', '&#58')
htmlEscape.set(';', '&#59')
htmlEscape.set('<', '&#60')
htmlEscape.set('=', '&#61')
htmlEscape.set('>', '&#62')
htmlEscape.set('?', '&#63')
htmlEscape.set('@', '&#64')
htmlEscape.set('[', '&#91')
htmlEscape.set('\\', '&#92')
htmlEscape.set(']', '&#93')
htmlEscape.set('^', '&#94')
htmlEscape.set('_', '&#95')
htmlEscape.set('`', '&#96')
htmlEscape.set('{', '&#123')
htmlEscape.set('|', '&#124')
htmlEscape.set('}', '&#125')
htmlEscape.set('~', '&#126')
htmlEscape.set(' ', '&#127')

// example usage
//console.info(htmlEscape.get('a'))

function escapeText(x){
  lineContent = []
  for (i=0; i < x.length; i++){
    lineContent[i] = htmlEscape.get(x[i])
  }
  if (x.length > 0)
    return lineContent.join(';') + ';'
  return lineContent.join(';')

}

function setText(x){
  outputBox = textBoxes[1]
  outputBox.value = x
}

function formCapture(x){
  textInsert = x.textBoxes[0].value
  convertText(textInsert)
}

function convertText(textInsert){

  // split the newlines
  lines = textInsert.value.split(/\r\n|\n/);

  let lineIndex=0
  while (lineIndex< lines.length){
    lines[lineIndex] = escapeText(lines[lineIndex])

    lineIndex++
  }


  // recombine the split lines
  textContent = lines.join('\n')
  // There isn't a reliable way to escape newlines.
  // `;&#10;&#13;` or `;&#13;&#10;` and any combo doesn't reliably work either.

  setText(textContent)
}
