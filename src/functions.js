// const optList = process.argv;
// console.log(optList)
function sum(a, b) {
  return a + b;
}
module.exports = sum;
// let string = '-l -p 8080 -d /usr/logs'
// let flagItems = [
//   {
//     flags: '-l',
//     changeType: function (val) {
//       return new Promise(function(resolve, reject) {
//         if (val) {
//           if(val == "true" || val == "1") {
//             resolve('true')
//           } else {
//             reject('errpr: -l 后请输入布尔类型')
//           }
//         } else {
//           if(val == " " || val == 0) {
//             resolve("false")
//           } else {
//             reject('errpr: -l 后请输入布尔类型')
//           }
//         }
//       })
//     },
//     type: 'Boolean'
//   },
//   {
//     flags: '-p',
//     changeType: function (val) {
//       return new Promise(function(resolve, reject) {
//         if (Number(val) || Number(val) == 0) {
//           resolve(val)
//         } else {
//           reject('errpr: -p 后请输入数字')
//         }
//       })
//     },
//     type: 'Number'
//   },
//   {
//     flags: '-d',
//     changeType: function (val) {
//       return  new Promise(function(resolve, reject) {
//         if (val) {
//           resolve(val);
//         } else {
//           reject('errpr: -d 后请输入字符串');
//         }
//       });
//     },
//     type: 'String'
//   }
// ]
// let flagList = flagItems.map(item=>item.flags)
// for (let i = 0; i < optList.length; i++) {
//   for (let j = 0; j <flagItems.length; j++) {
//     let _index = i/2
//     if (_index.toString().indexOf('.') == -1 && optList[i] == flagItems[j].flags) { //获取指令后一个参数
//       flagItems[j].changeType(optList[i+1])
//       .then(res=>{
//         console.log(res)
//       })
//       .catch(err=>{
//         console.log(err)
//         return
//       })
//       if (optList[i+2]) { //一个标志后面只能跟一个参数
//         if (!flagList.includes(optList[i+2])) {
//           console.log(`找不到${optList[i+2]}`)
//         }
//       }
//     }
//   }
// }