<template>
    <div class="wrapper">
        <div class="clientName">
            <h2><strong>Регистрация нового пациента</strong></h2>
        </div>
        <h2 class="successSave" v-if="formReady">Пользователь успешно сохранен.</h2>
        <h3 class="errorSave" v-else-if="formError">Ошибка сохранения. Пожалуйста заполните форму корректно.</h3>
        <div class="text-field">
            <input
                class="text-field__input"
                type="text"
                name="id"
                id="id"
                placeholder="Номер карточки клиента"
                v-model="id"
                :class="{
                    errorBox: v$.id.$invalid,
                    successBox: !v$.id.$invalid,
                }"
            />
            <div v-if="v$.id.$invalid" class="error">
                Поле не должно быть пустым<br>
                Должно содержать только цифры 
            </div>
        </div>
        <div class="text-field">
            <input
                class="text-field__input"
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                v-model="name"
                :class="{
                    errorBox: v$.name.$invalid,
                    successBox: !v$.name.$invalid,
                }"
            />
            <div v-if="v$.name.$invalid" class="error">
                Поле не должно быть пустым<br>
                Только латинские буквы
            </div>
        </div>
        <div class="text-field">
            <input
                class="text-field__input"
                type="text"
                name="surname"
                id="surname"
                placeholder="Фамилия"
                v-model="surname"
                :class="{
                    errorBox: v$.surname.$invalid,
                    successBox: !v$.surname.$invalid,
                }"
            />
            <div v-if="v$.surname.$invalid" class="error">
               Поле не должно быть пустым<br>
               Только латинские буквы
            </div>
        </div>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="patronymic"
                id="patronymic"
                placeholder="Отчество"
                v-model="patronymic"
            />
        </div>
        <div class="text-field">
            <input
                class="text-field__input"
                type="date"
                name="birthday"
                id="birthday"
                placeholder="Дата рождения"
                v-model="birthday"
                :class="{
                    errorBox: v$.birthday.$invalid,
                    successBox: !v$.birthday.$invalid,
                }"
            />
            <div v-if="v$.birthday.$invalid" class="error">
               Поле не должно быть пустым
            </div>
        </div>
        <div class="text-field">
            <input
                class="text-field__input"
                type="text"
                name="phone"
                id="phone"
                placeholder="Номер телефона"
                v-model="phone"
                :class="{
                    errorBox: v$.phone.$invalid,
                    successBox: !v$.phone.$invalid,
                }"
            />
            <div v-if="v$.phone.$invalid" class="error">
               Поле не должно быть пустым<br>
               Поле должно содержать только 11 цифр
            </div>
        </div>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="sex"
                id="sex"
                placeholder="Пол"
                v-model="sex"
            />
        </div>
        <div class="text-field">
            <select class="text-field__select"
                name="group"
                size="3"
                v-model="group"
                :class="{
                    errorBox: v$.group.$invalid,
                    successBox: !v$.group.$invalid,
                }"
                multiple
            >
            <option value="omc">ОМС</option>
            <option value="problem">Проблемные</option> 
            <option value="vip">VIP</option> 
            </select>->
            <div v-if="v$.group.$invalid" class="error">
               Выберите одно или несколько значений
            </div>
        </div>
        <div class="text-field">
            <select class="text-field__select successBox"
                name="doctor"
                size="3"
                v-model="doctor"
            >
            <option value="omc">Иванов</option>
            <option value="problem">Захаров</option> 
            <option value="vip">Чернышева</option> 
            </select>
        </div>
        <div class="text-field">
            <input type="checkbox" class="checkbox" id="checkbox" v-model="sms"/>
            <label for="checkbox" class="text">Не отправлять смс</label>
        </div>
        <p class="text paragraph">Адрес:</p>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="zipcode"
                id="zipcode"
                placeholder="Индекс"
                v-model="zipcode"
            />
        </div>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="country"
                id="country"
                placeholder="Страна"
                v-model="country"
            />
        </div>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="region"
                id="region"
                placeholder="Область"
                v-model="region"
            />
        </div>
        <div class="text-field">
            <input
                class="text-field__input"
                type="text"
                name="city"
                id="city"
                placeholder="Город"
                v-model="city"
                :class="{
                    errorBox: v$.city.$invalid,
                    successBox: !v$.city.$invalid,
                }"
            />
            <div v-if="v$.city.$invalid" class="error">
               Поле не должно быть пустым<br>
               Только латинские буквы
            </div>
            />
        </div>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="street"
                id="street"
                placeholder="Улица"
                v-model="street"
            />
        </div>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="home"
                id="home"
                placeholder="Дом"
                v-model="home"
            />
        </div>
        <p class="text paragraph">Документ:</p>
        <div class="text-field">
            <select class="text-field__select"
                name="type"
                size="3"
                :class="{
                    errorBox: v$.type.$invalid,
                    successBox: !v$.type.$invalid,
                }"
                v-model="type"
            >
            <option value="passport">Паспорт</option>
            <option value="birth_certificate">Свидетельство о рождении</option> 
            <option value="driver_license">Водительское удостоверение</option> 
            </select>
            <div v-if="v$.type.$invalid" class="error">
               Выберите значение
            </div>
        </div>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="series"
                id="series"
                placeholder="Серия"
                v-model="series"
            />
        </div>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="number"
                id="number"
                placeholder="Номер"
                v-model="number"
            />
        </div>
        <div class="text-field">
            <input
                class="text-field__input successBox"
                type="text"
                name="whom"
                id="whom"
                placeholder="Кем выдан"
                v-model="whom"
            />
        </div>
        <div class="text-field">
            <input
                class="text-field__input"
                type="date"
                name="date"
                id="date"
                placeholder="Дата выдачи"
                v-model="date"
                :class="{
                    errorBox: v$.date.$invalid,
                    successBox: !v$.date.$invalid,
                }"
            />
            <div v-if="v$.date.$invalid" class="error">
               Выберите значение
            </div>
        </div>       
        <div class="post__btns">
            <button @click="$router.push({ name: 'home'})" class="btn"> Назад к списку </button>
            <button @click.prevent="saveForm" class="btn"> Сохранить </button>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { alpha, maxLength, minLength, numeric, required } from '@vuelidate/validators';
import { mapMutations } from 'vuex'
export default {
    setup() {
        return { v$: useVuelidate() };
    },
    data() {
        return {
            formReady: false,
            formError: false,
            id: "",
            name: '',
            surname: '',
            patronymic: '',
            birthday: '',
            phone: '',
            sex: '',
            group: [],
            doctor: '',
            sms: false,
            zipcode: "",
            country: "",
            region: "",
            city: "",
            street: "",
            home: "",
            type: "",
            series: "",
            number: "",
            whom: "",
            date: ""
        };
    },
    validations() {
        return {
            id: {
                required,
                numeric: numeric
            },
            name: { 
                required,
                alpha: alpha
            },
            surname: { 
                required,
                alpha: alpha
            },
            birthday: { required },
            phone: {
                required,
                numeric: numeric,
                minLength: minLength(11),
                maxLength: maxLength(11)
            },
            group: { required },
            city: { required },
            type: { required },
            date: { required }
        };
    },
    methods: {
      ...mapMutations('clientsStore', ['ADD_CARD']),
        async saveForm () {
            window.scrollTo(0,0);
            this.formReady = false;
            this.formError = false;
            const result = await this.v$.$validate()
            if (result) {
                this.formReady = true;
                this.ADD_CARD({
                    id: this.id,
                    name: this.name,
                    surname: this.surname,
                    patronymic: this.patronymic,
                    birthday: this.birthday,
                    phone: this.phone,
                    sex: this.sex,
                    group: this.group,
                    doctor: this.doctor,
                    sms: this.sms,
                    address: {
                        zipcode: this.zipcode,
                        country: this.country,
                        region: this.region,
                        city: this.city,
                        street: this.street,
                        home: this.home,
                    },
                    document: {
                        type: this.type,
                        series: this.series,
                        number: this.number,
                        whom: this.whom,
                        date: this.date                        
                    }
                })
                this.id = "", this.name = "", this.surname = "", this.patronymic = "", this.birthday = "", this.phone = "", this.sex = "", this.group = [], this.doctor = "", this.sms = false, this.zipcode = "", this.country = "", this.region = "", this.city = "", this.street = "", this.home = "", this.type = "", this.series = "", this.number = "", this.whom = "", this.date = "";                
            }
            else {
                this.formError = true;
            }
        },
    }  
};
</script>

<style scoped>

</style>
