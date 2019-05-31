var fs =require("fs");
const path = require('path');
let myPath = path.join(__dirname,'./');
var fWriteName = myPath+'/file.txt'; 
var fWriteName1 = myPath+'/file1.txt'; 
var fileValue = fs.readFileSync(fWriteName, 'utf-8');//目标内容
var fileValue1 = fs.readFileSync(fWriteName1, 'utf-8');//目标内容
import { matchCharacter, getAllCharacter } from '../src/file'
test('macthStringToNumber', () => {
  let arr = [
    ['   ,  |,  |'],
    ['   ,  |,  |', ' _ , _|,|_ '],
    ['   ,  |,  |', ' _ , _|,|_ ',' _ , _|, _|'],
    [' _ , _|,|_ ', '   ,|_|,  |'],
    [' _ ,|_ , _|'],
    [' _ ,|_ ,|_|'],
    [' _ ,  |,  |'],
    [' _ ,|_|,|_|'],
    [' _ ,|_|, _|'],
    [' _ ,|_|, |', ' _ ,|_|, _|'],
  ]
  expect(matchCharacter(arr[0])).toBe('1')
  expect(matchCharacter(arr[1])).toBe('1,2')
  expect(matchCharacter(arr[2])).toBe('1,2,3')
  expect(matchCharacter(arr[3])).toBe('2,4')
  expect(matchCharacter(arr[4])).toBe('5')
  expect(matchCharacter(arr[5])).toBe('6')
  expect(matchCharacter(arr[6])).toBe('7')
  expect(matchCharacter(arr[7])).toBe('8')
  expect(matchCharacter(arr[8])).toBe('9')
  expect(matchCharacter(arr[9])).toBe(',9')
})
test('macthStringToNumber', () => {
  expect(getAllCharacter(fileValue)).toBe('1,2,3,4,5,6,7,8,9')
  expect(getAllCharacter(fileValue1)).toBe('5,7,8')
})