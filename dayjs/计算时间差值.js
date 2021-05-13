/**
 * @Descripttion: 统一时间格式处理工具
 * @Author: yepengfei
 * @Date: 2020-11-23 09:36:51
 * @Last Modified by: yepengfei
 * @Last Modified time: 2020-12-15 17:03:56
 */
import dayjs from 'dayjs'

const date = dayjs

date.getDateDiff = function (diffValue) {
  var minute = 60
  var hour = minute * 60
  var day = hour * 24
  var month = day * 30
  var year = month * 12

  var yearC = diffValue / year
  var monthC = diffValue / month
  var weekC = diffValue / (7 * day)
  var dayC = diffValue / day
  var hourC = diffValue / hour
  var minC = diffValue / minute

  var res = ''
  // var nowTime = (new Date()).getTime() // 获取当前时间戳
  if (monthC >= 12) {
    res = parseInt(yearC) + '年前'
    // oldTime = nowTime - diffValue // 获取记录的时间戳
    // var date = new Date(oldTime)
    // res = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  } else if (monthC >= 1) {
    res = parseInt(monthC) + '个月前'
  } else if (weekC >= 1) {
    res = parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    res = parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    res = parseInt(hourC) + '个小时前'
  } else if (minC >= 1) {
    res = parseInt(minC) + '分钟前'
  } else {
    res = '刚刚'
  }
  return res
}

export default date
