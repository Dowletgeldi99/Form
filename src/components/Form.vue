<template>
    <div class="uk-width-3-4 uk-flex uk-flex-column uk-margin-auto">
        <div v-if="form" class="form uk-margin-auto">
            <h2 class="beers__title uk-text-center" id="form_title">Форма регистрации пользователя</h2>

            <form class="uk-form-stacked uk-width-1-2">
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">ФИО</label>
                    <div class="uk-form-controls">
                        <input class="uk-input uk-width-large" id="form-stacked-text" type="text" placeholder="ФИО пользователя" v-model="formData.fio">
                    </div>
                </div>
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Номер телефона</label>
                    <div class="uk-form-controls">
                        <input class="uk-input uk-width-large" id="form-stacked-text" type="number" placeholder="Номер телефона пользователя" v-model="formData.phone">
                    </div>
                </div>
                <div class="uk-margin">
                    <label class="uk-form-label" for="form-stacked-text">Email</label>
                    <div class="uk-form-controls">
                        <input class="uk-input uk-width-large" id="form-stacked-text" type="email" placeholder="Email пользователя" v-model="formData.email">
                    </div>
                </div>
                <div class="uk-flex uk-flex-wrap">
                    <div class="uk-width-1-2">
                        <label class="uk-form-label" for="form-stacked-text">Страна</label>
                        <div class="uk-form-controls">
                            <input class="uk-input uk-width-1-2" id="form-stacked-text" type="text" placeholder="Страна" v-model="formData.adress.country">
                        </div>
                    </div>
                    <div class="uk-width-1-2">
                        <label class="uk-form-label" for="form-stacked-text">Город</label>
                        <div class="uk-form-controls">
                            <input class="uk-input uk-width-1-2" id="form-stacked-text" type="text" placeholder="Город" v-model="formData.adress.city">
                        </div>
                    </div>
                    <div class="uk-width-1-2 uk-margin-top">
                        <label class="uk-form-label" for="form-stacked-text">Улица</label>
                        <div class="uk-form-controls">
                            <input class="uk-input uk-width-1-2" id="form-stacked-text" type="text" placeholder="Улица" v-model="formData.adress.street">
                        </div>
                    </div>
                    <div class="uk-width-1-2 uk-margin-top">
                        <label class="uk-form-label" for="form-stacked-text">Квартира</label>
                        <div class="uk-form-controls">
                            <input class="uk-input uk-width-1-2" id="form-stacked-text" type="text" placeholder="Квартира" v-model="formData.adress.appartment">
                        </div>
                    </div>
                    <div class="uk-margin-top">
                        <button v-if="isAddButton" @click="checkForm" class="uk-button uk-button-default">Добавить</button>
                        <button v-else @click="redactForm" class="uk-button uk-button-default">Готов</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="list uk-width-1 uk-margin-large">
            <h2 class="uk-article-title uk-text-center">Список пользователей</h2>

            <table class="uk-table uk-table-striped">
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Номер телефона</th>
                        <th>Email</th>
                        <th>Страна</th>
                        <th>Город</th>
                        <th>Улица</th>
                        <th>Квартира</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in DATA" :key="item.id">
                        <td>{{item.fio}}</td>
                        <td>{{item.phone}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.adress.country}}</td>
                        <td>{{item.adress.city}}</td>
                        <td>{{item.adress.street}}</td>
                        <td>{{item.adress.appartment}}</td>
                        <td><a @click="redact(item)" class="uk-button uk-button-secondary uk-button-small" href="#form_title" data-uk-smooth-scroll>Редактировать</a></td>
                        <td><a @click="deleteData(item.id)" class="uk-button uk-button-secondary uk-button-small">x</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex';

    export default {
        data() {
            return {
                formData: {
                    id: null,
                    fio: null,
                    phone: null,
                    email: null,
                    adress: {
                        country: null,
                        city: null,
                        street: null,
                        appartment: null
                    }
                },
                form: 1,
                isAddButton: true
            }
        },
        computed: {
            ...mapGetters([
                'DATA'
            ])
        },
        mounted() {
        },
        methods: {
            ...mapActions([
                'ADD_FORM',
                'UPDATE_FORM',
                'DELETE_FROM_DATA'
            ]),
            checkForm(e) {
                if (this.formData.fio && this.formData.phone) {
                    this.addForm();
                    
                    e.preventDefault();
                }

            },
            clearFormData() {
                this.formData = {
                    id: null,
                    fio: null,
                    phone: null,
                    email: null,
                    adress: {
                        country: null,
                        city: null,
                        street: null,
                        appartment: null
                    }
                };
            },
            addForm() {
                this.ADD_FORM(this.formData);
                this.clearFormData();
            },
            redact(item) {
                this.formData = {
                    id: item.id,
                    fio: item.fio,
                    phone: item.phone,
                    email: item.email,
                    adress: {
                        country: item.adress.country,
                        city: item.adress.city,
                        street: item.adress.street,
                        appartment: item.adress.appartment
                    }
                };

                this.isAddButton = false;
            },
            redactForm(e) {
                this.UPDATE_FORM(this.formData);
                this.clearFormData();
                this.isAddButton = true;

                e.preventDefault();
            },
            deleteData(id) {
                this.DELETE_FROM_DATA(id);
            }
        }
    }
</script>

<style lang="scss">

</style>
        