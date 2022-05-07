const Mock = require('mockjs')
const Random = Mock.Random
const domain = 'http://localhost:8081/api'
const code = 200

// 随机生成文章数据
const postData = req => {
  
  console.log(req) // 请求体，用于获取参数

  let posts = [] // 用于存放文章数据的数组
  
  for (let i = 0; i < 10; i++) {
    let post = {
        value: Random.integer(10,10000),
        label: Random.region(),
        children:[]
    }
    posts.push(post)
  }
  let options= [{
    value: 1,
    label: '东南',
    children: [{
      value: 2,
      label: '上海',
      children: [
        { value: 3, label: '普陀' },
        { value: 4, label: '黄埔' },
        { value: 5, label: '徐汇' }
      ]
    }, {
      value: 7,
      label: '江苏',
      children: [
        { value: 8, label: '南京' },
        { value: 9, label: '苏州' },
        { value: 10, label: '无锡' }
      ]
    }, {
      value: 12,
      label: '浙江',
      children: [
        { value: 13, label: '杭州' },
        { value: 14, label: '宁波' },
        { value: 15, label: '嘉兴' }
      ]
    }]
  }, {
    value: 17,
    label: '西北',
    children: [{
      value: 18,
      label: '陕西',
      children: [
        { value: 19, label: '西安' },
        { value: 20, label: '延安' }
      ]
    }, {
      value: 21,
      label: '新疆维吾尔族自治区',
      children: [
        { value: 22, label: '乌鲁木齐' },
        { value: 23, label: '克拉玛依' }
      ]
    }]
  }]
  
  // 返回状态码和文章数据posts
  return {
    code,
    options
  }
}

const modelData = () =>{
    let data = [
        [1,2,3],
        [1,2,5]
    ]
    return {
        code,
        data
    }
}

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/posts`, 'get', postData);
Mock.mock(`${domain}/list`, 'get', postData);
Mock.mock(`${domain}/getModel`, 'get', modelData);

