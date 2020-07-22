const Events = require('events')
const event = new Events()

function a() {
    console.log('a');
    event.off('click', b)
}

function b() {
    console.log('b');
}

function c() {
    console.log('c');
}

event.on('click', a)
event.on('click', b)
event.on('click', c)

event.emit('click')