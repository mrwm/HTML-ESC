
const urlEncode = new Map()

//a-z
urlEncode.set('a', '%61')
urlEncode.set('b', '%62')
urlEncode.set('c', '%63')
urlEncode.set('d', '%64')
urlEncode.set('e', '%65')
urlEncode.set('f', '%66')
urlEncode.set('g', '%67')
urlEncode.set('h', '%68')
urlEncode.set('i', '%69')
urlEncode.set('j', '%6A')
urlEncode.set('k', '%6B')
urlEncode.set('l', '%6C')
urlEncode.set('m', '%6D')
urlEncode.set('n', '%6E')
urlEncode.set('o', '%6F')
urlEncode.set('p', '%70')
urlEncode.set('q', '%71')
urlEncode.set('r', '%72')
urlEncode.set('s', '%73')
urlEncode.set('t', '%74')
urlEncode.set('u', '%75')
urlEncode.set('v', '%76')
urlEncode.set('w', '%77')
urlEncode.set('x', '%78')
urlEncode.set('y', '%79')
urlEncode.set('z', '%7A')

//A-Z
urlEncode.set('A', '%41')
urlEncode.set('B', '%42')
urlEncode.set('C', '%43')
urlEncode.set('D', '%44')
urlEncode.set('E', '%45')
urlEncode.set('F', '%46')
urlEncode.set('G', '%47')
urlEncode.set('H', '%48')
urlEncode.set('I', '%49')
urlEncode.set('J', '%4A')
urlEncode.set('K', '%4B')
urlEncode.set('L', '%4C')
urlEncode.set('M', '%4D')
urlEncode.set('N', '%4E')
urlEncode.set('O', '%4F')
urlEncode.set('P', '%50')
urlEncode.set('Q', '%51')
urlEncode.set('R', '%52')
urlEncode.set('S', '%53')
urlEncode.set('T', '%54')
urlEncode.set('U', '%55')
urlEncode.set('V', '%56')
urlEncode.set('W', '%57')
urlEncode.set('X', '%58')
urlEncode.set('Y', '%59')
urlEncode.set('Z', '%5A')

// 0-9
urlEncode.set('0', '%30')
urlEncode.set('1', '%31')
urlEncode.set('2', '%32')
urlEncode.set('3', '%33')
urlEncode.set('4', '%34')
urlEncode.set('5', '%35')
urlEncode.set('6', '%36')
urlEncode.set('7', '%37')
urlEncode.set('8', '%38')
urlEncode.set('9', '%39')

// Other characters
urlEncode.set('!', '%21')
urlEncode.set("'", '%27')
urlEncode.set('(', '%28')
urlEncode.set(')', '%29')
urlEncode.set('*', '%2A')
urlEncode.set(',', '%2C')
urlEncode.set('-', '%2D')
urlEncode.set('.', '%2E')
urlEncode.set('[', '5B')
urlEncode.set(']', '5D')
urlEncode.set('_', '%5F')
urlEncode.set('~', '%7E')

// example usage
//console.info(urlEncode.get('a'))

function escapeURL(URL){
  // TODO:
  // 1. Add a check box to not encode the first and last char of the link.
  let lineContent = ""
  let has_prefix = true
  let URL_prefix = URL.split("//")[0]
  let URL_afterPrefix = URL.split("//").slice(1).join('//')
  if (URL_afterPrefix == ""){
    has_prefix = false
    URL_afterPrefix = URL_prefix
  }
  else{
    URL_prefix += "//"
  }
  let x = URL
  for (i=0; i < URL_afterPrefix.length; i++){
    if (urlEncode.get(URL_afterPrefix[i]) == null){
      lineContent += encodeURIComponent(URL_afterPrefix[i])
    }
    else{
      lineContent += urlEncode.get(URL_afterPrefix[i])
    }
  }
  // prefixes needs to be included if they are included.
  // Things like https:// , smb:// , ftp:// , and such
  if (has_prefix){
    return URL_prefix + lineContent
  }
  else{
    return lineContent
  }
}

function setURL(x){
  let outputBox = textBoxes[4] // textBoxes is set from map.js
  outputBox.value = x
}

function convertURL(urlInsert){

  // split the newlines
  let lines = urlInsert.value.split(/\r\n|\n/);

  let lineIndex = 0
  while (lineIndex < lines.length){
    lines[lineIndex] = escapeURL(lines[lineIndex])
    lineIndex++
  }


  // recombine the split lines
  let urlContent = lines.join('\n')

  setURL(urlContent)
}
