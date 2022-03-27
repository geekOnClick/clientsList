<template>
    <div class="wrapper__card">
        <div class="id">
            <h2>Карточка клиента # {{ $route.params.client.id }}</h2>
        </div>
        <div class="client">
            <div>
                <div class="clientName__card">
                    <strong>{{ $route.params.client.surname }}</strong>&nbsp;
                    <strong v-if="$route.params.client.patronymic !== null">{{ $route.params.client.patronymic }}</strong>&nbsp;
                    <strong>{{ $route.params.client.name }}</strong>
                </div>
                <div>
                    <div class="info__card"><p>Телефон: </p> <input class="inputText" type="text" :class="{ onEdit: inputFocus }" :value="$route.params.client.phone" :disabled='disabledField' @change="save"></div>
                    <div class="info__card"><p>Пол: </p> <input class="inputText" type="text" :class="{ onEdit: inputFocus }" :value="$route.params.client.sex" :disabled='disabledField' @change="save"></div>
                    <div class="info__card"><p>Группа клиентов: </p> <input class="inputText" type="text" :class="{ onEdit: inputFocus }" :value="$route.params.client.group" :disabled='disabledField' @change="save"></div>
                    <div class="info__card"><p>Лечащий врач: </p> <input class="inputText" type="text" :class="{ onEdit: inputFocus }" :value="$route.params.client.doctor" :disabled='disabledField' @change="save"></div>
                    <div class="info__card"><p>Дата рождения: </p> <input class="inputText" type="text" :class="{ onEdit: inputFocus }" :value="$route.params.client.birthday" :disabled='disabledField' @change="save"></div>
                    <div class="info__card"><p>Информирование по смс: </p> <input class="inputText" type="text" :class="{ onEdit: inputFocus }" :value='$route.params.client.sms === true ? "Да" : "Нет"' :disabled='disabledField' @change="save"></div>
                    <div class="info__card"><p>Адрес: </p> <textarea cols="30" rows="5" class="textArea" type="text" :class="{ onEdit: inputFocus }" :value='$route.params.client.address.zipcode + " " + $route.params.client.address.country + " " + $route.params.client.address.region + " " + $route.params.client.address.city + " " + $route.params.client.address.street + " " +  $route.params.client.address.home' :disabled='disabledField' @change="save"></textarea>
                    </div>
                    <div class="info__card"><p>Документ: </p> <textarea cols="30" rows="5" class="textArea" type="text" :class="{ onEdit: inputFocus }" :value='$route.params.client.document.type + " " + $route.params.client.document.series + " " + $route.params.client.document.number + " " + $route.params.client.document.whom + " " + $route.params.client.document.date' :disabled='disabledField' @change="save"></textarea>
                    </div>
            </div>
        </div>
    </div>
        <div class="open__btns">
            <button @click="$router.push({ name: 'home'})" class="btn"> Назад к списку </button>
            <button :class="{ disableButton: inputFocus }" @click="edit" class="btn"> Редактировать </button>
            <button :class="{ disableButton: disabledField }" @click="finishedEdit" class="btn"> Готово </button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            disabledField: true,
            inputFocus: false
        };
    },
    methods: {
      ...mapMutations('clientsStore', ['EDIT_CARD']),
        edit(){
            this.disabledField = false;
            this.inputFocus = true;
        },
        save(e) {
            this.EDIT_CARD({
                id: this.$route.params.client.id,
                old: e.target._value,
                new: e.target.value
                })
        },
        finishedEdit() {
            this.disabledField = true;
            this.inputFocus = false;
        }
    },
};
</script>

<style scoped>
</style>
