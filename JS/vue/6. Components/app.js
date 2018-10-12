

//Global way of using component
Vue.component('my-comp', {
    data: function() {
        return {
            status: 'critical',
            title: 'Welcome'
        }
    },
    template: '<p>Server Status: {{ status }} (<button @click="changeText">Change</button>)</p>',
    methods:{
        changeText: function() {
            this.status = 'Normal'
        }
    }
})

new Vue({
    el: '#app'
    
})

//local way storing components as a variable
var cmp = {
    data: function() {
        return {
            status: 'danger',
            title: 'Welcome'
        }
    },
    template: '<p>Server Status: {{ status }} (<button @click="changeText">Change</button>)</p>',
    methods:{
        changeText: function() {
            this.status = 'Cool'
        }
    }
}
new Vue({
    el: '#app',
    components: {
        'my-cmp' : cmp
    }
    
})

new Vue({
    el: '#app2'
    
    
})
