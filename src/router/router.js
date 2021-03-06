import Clients from '@/components/Clients.vue'
import OpenedCard from '@/components/OpenedCard.vue'
import NewCard from '@/components/NewCard.vue'
import Vue from 'vue'
import Router from 'vue-router'
import createHashHistory from 'vue-router'

Vue.use(Router)
const routes = [
    {
        path: "/",
        name: "home",
        component: Clients,
    },
    {
        path: "/clientsList/card",
        name: "card",
        component: OpenedCard,
    },
    {
        path: "/clientsList/new",
        name: "new",
        component: NewCard,
    }
]
const router = new Router({
    mode: 'hash',
    history: createHashHistory,
    routes
})
export default router;
