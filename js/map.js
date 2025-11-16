var textBoxes = document.querySelectorAll('textarea')

function escapeText(x){
  lineContent = ""
  for (i=0; i < x.length; i++){
    lineContent += "&#" + x[i].charCodeAt(0) + ';'
  }
  // I guess semicolons (;) after each escape code aren't needed?
  return lineContent
}

function setText(x){
  outputBox = textBoxes[1]
  outputBox.value = x
}

function convertText(textInsert){

  // split the newlines
  lines = textInsert.value.split(/\r\n|\n/);

  let lineIndex = 0
  while (lineIndex < lines.length){
    lines[lineIndex] = escapeText(lines[lineIndex])

    lineIndex++
  }


  // recombine the split lines
  textContent = lines.join('\n')
  // There isn't a reliable way to escape newlines.
  // `;&#10;&#13;` or `;&#13;&#10;` and any combo doesn't reliably work either.

  setText(textContent)
}
