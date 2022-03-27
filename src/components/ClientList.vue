<template>
    <div class="wrap__list">
        <div class="clientList">
    <table class="resp-tab">
    <thead>
        <tr>
            <th>ФИО</th>
            <th>Пол</th>
            <th>Номер телефона</th>
            <th>Действия</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="client in clients" :key="client.id" > 
            <td><span>ФИО</span>{{ client.name }} {{ client.surname }}</td>
            <td><span>Пол</span>{{ client.sex }}</td>
            <td><span>Номер телефона</span>{{ client.phone}}</td>
            <td><span>Действия</span> 
            <div class="actions">
            <div class="action" title="Открыть для редактирования" @click="$router.push({ name: 'card', params: { client: client } })">&#9997; </div> 
            <div class="action" title="Удалить" @click="deleteItem(client.id)">&#10062;</div>
            </div>
            </td>
        </tr>
    </tbody>
</table>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props: {
        clients: {
            type: Array,
        },
    },
    data() {
        return {};
    },
    methods: {
      ...mapMutations('clientsStore', ['DELETE_ClIENT']),
        deleteItem(id){
            this.DELETE_ClIENT(id)
        }
    },
};
</script>

<style scoped>

</style>
