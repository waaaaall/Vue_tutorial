const demo1 = new Vue({
    el: '#demo',
    data: {
        show: true
    }
})

const demo2 = new Vue({
    el: "#demo-2",
    data: {
        show: true
    }
})

const demo3 = new Vue({
    el: "#demo-3",
    data: {
        show: true
    }
})

const vm = new Vue({
    el: '#list-complete-demo',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function () {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function () {
            this.items.splice(this.randomIndex(), 1)
        },
    }
})