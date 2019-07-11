Vue.component('my-component', {
    template: '<div>{{message}} global component!</div>',
    data: function () {
        return {
            message: "hello"
        }
    }
})

const vm1 = new Vue({
    el: '#example-1',
})

Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    }
})
const vm2 = new Vue({
    el: '#example-2'
})

Vue.component('child', {
    props: ['message'],
    template: '<span>{{message}}</span>'
})

const vm3 = new Vue({
    el: '#example-3'
})