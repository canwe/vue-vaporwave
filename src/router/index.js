import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '../components/contents/MainContent.vue'
import TextGenerator from '../components/contents/TextGen.vue'
import Catalogue from '../components/contents/Catalogue.vue'
import Register from '../components/contents/Register.vue'
import SignIn from '../components/contents/Signin.vue'
import Artists from '../components/contents/Artists.vue'
import TestArea from '../components/contents/TestArea.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: MainContent},
    {path: '/textgen', component: TextGenerator},
    {path: '/about', component: MainContent},
    {path: '/catalogue', component: Catalogue},
    {path: '/register', component: Register},
    {path: '/signin', component: SignIn},
    {path: '/artists', component: Artists},
    {path: '/test', component: TestArea}
  ]
})
