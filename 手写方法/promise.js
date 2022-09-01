// ***********Promise.all***********

//  返回promise对象，当所有的promise都成功时返回promise状态才成功
 function myPromiseAll(promiseList){
    let len = promiseList.length
    let count = 0
    let result = []
    return new Promise((resolve,reject)=>{
        promiseList.forEach((item,index) => {
            // 包一层promise， 为了兼容非promise的情况
            Promise.resolve(item).then(res => {
                result[index] = res
                count++
                if(count == len) {
                    resolve(result)
                }
            }).catch(error=>{
                // 只要有一个失败，return的promise状态为reject
                reject(error)
            })
        });
    })
 }


// ***********Promise.race***********

// 返回一个promise对象，状态油第一个完成的promise决定
function myPromiseRace(promiseList){
    return new Promise((resolve, reject)=>{
        for(let item of promiseList){
            Promise.resolve(item).then(res=>{
                resolve(res)
            }).catch(error=>{
                reject(error)
            })
        }
    })
}


// ***********Promise.any***********

// 接受一组promise实例作为参数，包装成一个新的promise实例，
// 只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfiled状态，
// 如果所有参数实例都变成reject，则包装实例就变成reject状态
function myPromiseAny(promiseList){
    let len = promiseList.length
    let result = []
    return new Promise((resolve, reject)=>{
        for(let item of promiseList){
            Promise.resolve(item).then(res=>{
                resolve(res)
            }).catch(error=>{
                result.push(error)
                len--
                if(len == 0){
                    reject(result)
                }                
            })
        }
    })
}


