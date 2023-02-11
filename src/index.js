let obj = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
  '100': 'one hundred'
}


module.exports = function toReadable (num) {
  let res;
  let first
  let second
  let therd

  for (const key in obj) {
    if(num === +key){
      return res = obj[key] 
    } else if (num >= 21 && num <= 99) {
      let root = (num + '').split('')
      root[0] + '0' === key ? first = obj[key] : ''  
      root[1] === key ? second = obj[key] : ''
    } else if (num >= 101 && num <= 999){
      let root = (num + '').split('')
      if(root[1] == 1 ){
        root[0] === key ? first = obj[key] + ' ' + 'hundred' : ''
        root[1] + root[2] === key ? second = obj[key] : ''  
      } else if (root[1] == 0){
        root[0] === key ? first = obj[key] + ' ' + 'hundred' : ''
        root[2] === key ? second = obj[key] : ''  
      } else if (root[2] == 0){
        root[0] === key ? first = obj[key] + ' ' + 'hundred' : ''
        root[1] + '0' === key ? second = obj[key] : ''  
      } else {
        root[0] === key ? first = obj[key] + ' ' + 'hundred' : ''
        root[1] + '0' === key ? second = obj[key] : ''  
        root[2] === key ? therd = obj[key] : ''
      }
    }
  }

  if(therd) {
    return first + ' ' + second + ' ' + therd
  } else if(second === 'zero'){
    return first
  }  return first + ' ' + second
}
