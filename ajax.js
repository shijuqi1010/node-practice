// 用原生js实现ajax

// 1. 创建ajax对象
let xhr = new XMLHttpRequest()

// 2. 连接服务器
xhr.open(method, url, async)

// 3. 发送数据
xhr.send(data)

// 4. 判断状态变化，做相应的处理

/*
readyStatys == 0: 尚未调用open方法
readyStatys == 1: 已经调用open但还未发送请求（未调用send）
readyStatys == 2: 已发送请求（已调用send）
readyStatys == 3: 已收到返回请求的数据
readyStatys == 4: 请求已完成
*/
xhr.onreadystatechange = () => {
    if (readyStatus == 4) {
        if (status == 200 &&
            xhr.status < 300 ||
            xhr.status == 304) {
            console.log('请求成功', xhr.responseText)
        }
    }
}

// 超时时间单位为毫秒
xhr.timeout = 1000

// 当请求超时时，会触发 ontimeout 方法
xhr.ontimeout = () => console.log('请求超时')






function ajax(options) {
    let url = options.url
    const method = options.method.toLocaleLowerCase() || 'get'
    const async = options.data
    const xhr = new XMLHttpRequest()

    if (options.timeout && options.timeout > 0) {
        xhr.timeout = options.timeout
    }

    return new Promise((resolve, reject) => {
        xhr.ontimeout = () => reject && reject('请求超时')
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    resolve && resolve(xhr.responseText)
                } else {
                    reject && reject()
                }
            }
        }

        xhr.onerror = err => reject && reject(err)

        let paramArr = []
        let encodeData
        if (data instanceof Object) {
            for (let key in data) {
                // 参数拼接需要通过encodeURIComponent进行编码
                paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            }

            encodeData = paramArr.join('&')
        }

        if (method === 'get') {
            // 检测URL中是否已经存在？及其位置
            const index = url.indexOf('?')
            if (index === -1) {
                url += '?'
            } else if (index !== url.length - 1) {
                url += '&'
            }

            url += encodeData
        }

        xhr.open(method, url, async)

        if (method === 'get') {
            xhr.send(null)
        } else {
            xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')
            xhr.send(encodeData)
        }

    })
}