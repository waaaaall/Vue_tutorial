var app = new Vue({
    el: "#app",
    data: {
        message: "hello",
        show: false,
        value: '',
        val: '',
        item: [{
            text: 'number01',
        }, {
            text: 'number02',
        }]
    },
    methods: {
        handleClick() {
            alert('test')
        },
        showIsland(val) {
            this.show = !this.show
            this.value = val
        }
    }
})