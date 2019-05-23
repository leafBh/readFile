import sum  from '../src/args';
test('getBoolen', () => {
  return new Promise(function(resolve, reject) {
    expect(sum.getBoolen('true',resolve, reject)).resolves.toMatch('true')
    expect(sum.getBoolen('true',resolve, reject)).resolves.toMatch('true');
    expect(sum.getBoolen('false',resolve, reject)).resolves.toMatch('false');
    expect(sum.getBoolen('0',resolve, reject)).resolves.toMatch('false');
    expect(sum.getBoolen('h',resolve, reject)).rejects.toMatch('errpr: -l 后请输入布尔类型');
    expect(sum.getBoolen('',resolve, reject)).rejects.toMatch('errpr: -l 后请输入布尔类型');
  })
})
test('getNumber', () => {
  return new Promise(function(resolve, reject) {
    expect(sum.getNumber('1',resolve, reject)).resolves.toMatch('1');
    expect(sum.getNumber('ijkj',resolve, reject)).rejects.toMatch('errpr: -p 后请输入数字');
  })
})
test('getString', () => {
  return new Promise(function(resolve, reject) {
    expect(sum.getString('sadsf',resolve, reject)).resolves.toMatch('sadsf');
    expect(sum.getString('',resolve, reject)).rejects.toMatch('errpr: -d 后请输入字符串');
  })
})
test('initFlagItems', () => {
  let opts = [1,2,'-l','true','-p','dddd','SSSSS']
  sum.judgeArgs(opts)
})