import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import VueRouter from 'vue-router'
import Vuex from 'vuex'


//import Search from './components/Search.vue'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
    routes: [{
            name: 'index',
            path: '/',
            component: Search,
            meta: {
                title: 'index'
            }
        },
    ]
})


router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})


const store = new Vuex.Store({
    state: {
        host: { 'name': '', 'id': 0 },
        drive: '',
        system: '',
        systemid: 0
    },
    mutations: {
    }
})


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
