class EventEmeitter {
    constructor() {
        this._events = this._events || new Map()
        this._maxListeners = this._maxlisteners || 10
    }
}

// 触发名为type的事件
EventEmeitter.prototype.emit = function (type, ...args) {
    // my code
    let handler
    handler = this._events.get(type)
    if (Array.isArray(handler)) {
        for (let i = 0; i < handler.length; i++) {
            if (args.length > 0) {
                handler[i].apply(this, args)
            } else {
                handler[i].call(this)
            }
        }
    } else {
        if (args.length > 0) {
            handler.apply(this, args)
        } else {
            handler.call(this)
        }
    }
    return true
}

// 监听名为type的事件
EventEmeitter.prototype.addListener = function (type, fn) {
    // my code
    const handler = this._events.get(type)
    if (!handler) {
        this._events.set(type, fn)
    } else if (handler && typeof handler === 'function') {
        this._events.set(type, [handler, fn])
    } else {
        handler.push(fn)
    }
}

// 移除名为type的事件
EventEmeitter.prototype.removeListener = function (type, fn) {
    // my code
    const handler = this._events.get(type)
    if (handler && typeof handler === 'function') {
        this._events.delete(type, fn)
    } else {
        let position
        for (let i = 0; i < handler.length; i++) {
            if (handler[i] === fn) {
                position = i
            } else {
                position = -1
            }
        }

        if (position !== -1) {
            handler.splice(position, i)
            if (handler.length === 1) {
                this._events.set(type, handler[0])
            } else {
                return this
            }
        }
    }
}

const emitter = new EventEmeitter()
emitter.addListener('pp', name => {
    console.log(`name: ${name}`);
})
emitter.addListener('qq', name => {
    console.log(`name: ${name}`);
})

emitter.emit('pp', 'paopao')
emitter.emit('qq', 'aa')
