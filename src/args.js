export default {
  setFlagItems() { //定义标识符和类型
    let _this = this
    let flagRules = [
      {
        flags: '-l',
        typeJude: {
          changeType: function(val) {
            return new Promise(function(resolve, reject) {
              _this.getBoolen(val, resolve, reject)
            })
          },
          type: 'Boolean'
        }
      },
      {
        flags: '-p',
        typeJude: { 
          changeType: function(val) {
            return new Promise(function(resolve, reject) {
              _this.getNumber(val,resolve, reject)
            })
          },
          type: 'Number'
        }
      },
      {
        flags: '-d',
        typeJude: {
          changeType: function(val) {
            return new Promise(function(resolve, reject) {
              _this.getString(val)
            })
          },
          type: 'String'
        }
      }
    ]
    return flagRules
  },

  judgeArgs(optList) {
    let changeTypeFunctions = []
    for (let i = 0; i < optList.length; i++) {
      this.getChangeTypeFunctions(i, optList,changeTypeFunctions )
    }
    this.outputResult(changeTypeFunctions)
  },

  getChangeTypeFunctions(i,optList, changeTypeFunctions) {
    let flagItems = this.setFlagItems()
    for (let j = 0; j <flagItems.length; j++) {
      this.getValue(i, j, optList, changeTypeFunctions)
    }
  },
  getValue(i, j, optList, changeTypeFunctions) {
    let flagItems = this.setFlagItems()
    let flagList = flagItems.map(item => item.flags)
    let _index = i/2
    if (_index.toString().indexOf('.') == -1 && optList[i] == flagItems[j].flags) { //获取指令后一个参数
      if (optList[i+2] && !flagList.includes(optList[i+2])) {
        changeTypeFunctions.push(this.surplusValue(optList,i))
      }
      changeTypeFunctions.push(flagItems[j].typeJude.changeType(optList[i+1]))
    }
  },
  surplusValue (optList,i) { //一个指令后面的值多于一个
    return new Promise(function(resolve, reject) {
      reject(`找不到${optList[i+2]}`)
    })
  },
  outputResult(changeTypeFunctions) {
    Promise.all(changeTypeFunctions).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },

  getBoolen(val,resolve, reject) {
    if (!val || !resolve || !reject) {
      return
    }
    if(val == "true" || val == "1") {
      resolve('true')
      return
    }
    if(val == " " || val == 0 || val == "false") {
      resolve("false")
      return
    }
    reject(getErrorTip(flags, type))
  },

  getNumber(val, resolve, reject) {
    if (!val || !resolve || !reject) {
      return
    }
    if (Number(val) || Number(val) == 0) {
      resolve(val)
      return
    }
    reject('errpr: -p 后请输入数字')
  },

  getString(val, resolve, reject) {
    if (!val || !resolve || !reject) {
      return
    }
    if (val) {
      resolve(val);
      return
    }
    reject(getErrorTip(flags, type));
  }
}