const optList = process.argv;
function getErrorTip(flags, type){
  return `error: ${flags}后请输入${type}类型`
}
// 布尔
function judgeBoolean(val, resolve, reject, flags, type) {
  if(val == "true" || val == "1") {
    resolve('true')
    return
  }
  if(val == " " || val == 0 || val == "false") {
    resolve("false")
    return
  }
  reject(getErrorTip(flags, type))
}
// 数字
function judgeNumber(val, resolve, reject, flags, type) {
  if (Number(val) || Number(val) == 0) {
    resolve(val)
    return
  }
  reject(getErrorTip(flags, type))
}
// 字符串
function judgeString(val,resolve, reject,flags, type) {
  if (val) {
    resolve(val);
    return
  }
  reject(getErrorTip(flags, type));
}
let flagItems = [
  {
    flags: '-l',
    typeJude: {
      changeType: function (val, flags, type) {
        return new Promise(function(resolve, reject) {
          judgeBoolean(val, resolve, reject, flags, type )
        })
      },
      type: 'Boolean'
    }
  },
  {
    flags: '-p',
    typeJude: {
      changeType: function (val, flags, type) {
        return new Promise(function(resolve, reject) {
          judgeNumber(val,resolve, reject,flags, type)
        })
      },
      type: 'Number'
    }
  },
  {
    flags: '-d',
    typeJude: {
      changeType: function (val, flags, type) {
        return  new Promise(function(resolve, reject) {
          judgeString(val, resolve, reject, flags, type)
        });
      },
      type: 'String'
    }
  }
]
let flagList = flagItems.map(item => item.flags)
for (let i = 0; i < optList.length; i++) {
  getFlagItem(i)
}
function getFlagItem(i) {
   for (let j = 0; j < flagItems.length; j++) {
    let _index = i/2
    getFlags(_index, i, j)
  }
}
function getFlags(_index, i, j) {
  if (_index.toString().indexOf('.') == -1 && optList[i] == flagItems[j].flags) { //获取指令后一个参数
    flagItems[j].typeJude.changeType(optList[i+1], flagItems[j].flags, flagItems[j].typeJude.type)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
      return
    })
    //一个标志后面只能跟一个参数
    if (optList[i+2] && !flagList.includes(optList[i+2])) {
      console.log(`找不到${optList[i+2]}`)
      return
    }
  }
}