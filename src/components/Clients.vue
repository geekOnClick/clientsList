<template>
    <div class="appPosts">
        <div class="wrap">
            <button class="btn main" @click="$router.push({ name: 'new'})">Создать нового клиента</button>
            <div v-if="getClients.length > 0">
                <client-list :clients="getClients" ></client-list>
            </div>
            <h2 class="emptyClients" v-else>Клиенты отсутствуют</h2>
        </div>
    </div>
</template>

<script>
import clientList from './ClientList.vue';
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
        clientList
    },
    data() {
        return {
        };
    },
    mounted() {
        if(this.getClients.length === 0) {
            this.loadClients();
        }
    },
    computed: {
      ...mapGetters('clientsStore', ['getClients']),
    },
    methods: {
      ...mapActions('clientsStore', ['loadClients']),
    },
};
</script>

<style scoped>
.wrap {
    padding: 20px;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.emptyClients {
    margin-top: 40px;
    color: black;
}
.main {
    margin-top: 30px;
}
</style>

