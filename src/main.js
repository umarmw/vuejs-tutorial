import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

// Pointing routes to the components they should use
router.map({
  '/hello': {
    component: Home
  }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
