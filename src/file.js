var fs =require("fs");
const path = require('path');
let myPath = path.join(__dirname,'./');
var fWriteName = myPath+'/file.txt'; 
var fileValue = fs.readFileSync(fWriteName, 'utf-8');//目标内容
const matchRules = [
  {
    getNum :  '   ,  |,  |',
    returnNum : 1
  },
  {
    getNum :  ' _ , _|,|_ ',
    returnNum : 2
  },
  {
    getNum :  ' _ , _|, _|',
    returnNum : 3
  },
  {
    getNum :  '   ,|_|,  |',
    returnNum : 4
  },
  {
    getNum :  ' _ ,|_ , _|',
    returnNum : 5
  },
  {
    getNum :  ' _ ,|_ ,|_|',
    returnNum : 6
  },
  {
    getNum :  ' _ ,  |,  |',
    returnNum : 7
  },
  {
    getNum :  ' _ ,|_|,|_|',
    returnNum : 8
  },
  {
    getNum :  ' _ ,|_|, _|',
    returnNum : 9
  }
]
const matchCharacter = function(splitStringList) {
  let allCharacterArr = []
  splitStringList.forEach(element => {
    allCharacterArr.push(getSingleCharacter(element))
  })
  return allCharacterArr.join(',')
}
const getSingleCharacter = function(element) {
  for (let i=0;i < matchRules.length; i++) {
    if (element == matchRules[i].getNum) {
      return matchRules[i].returnNum
    }
  }
}

const getSplitStringList = function(verticalLength, abeamLength, fileValue) {
  let splitStringList = []
  for (let i = 0; i<abeamLength; i++) {
    splitStringList.push(singeCharacter(i, verticalLength, fileValue))
  }
  return splitStringList
}
const singeCharacter = function(i, verticalLength, fileValue) {
  let singeCharacter = []
  for (let j = 0; j < verticalLength; j++) {
    singeCharacter.push(fileValue.split('\n')[j].substr(i*3,3))
  }
  return singeCharacter.join(',')
}


const getAllCharacter = function(fileValue) {
  let verticalLength = Math.floor(fileValue.split('\n').length/3)*3 //竖向数字个数
  let abeamLength = Math.floor(fileValue.split('\n')[0].length/3) //横向数字个数
  let splitStringList = getSplitStringList(verticalLength, abeamLength, fileValue)
  let allNumber = matchCharacter(splitStringList)
  return allNumber
}

export { matchCharacter, getAllCharacter }