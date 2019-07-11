const show_message = new Vue({
    el: '#show_message',
    data: {
        message: 'Hellor Vue.js!',
    }
})

const show_list = new Vue({
    el: '#show_list',
    data: {
        items: [
            { title: '項目1', id: 1 },
            { title: '項目2', id: 2 },
            { title: '項目3', id: 3 },
        ]
    },
})

const click = new Vue({
    el: "#click",
    data: { counter: 0 },
    methods: {
        add: function () {
            this.counter++
        },
    },
})