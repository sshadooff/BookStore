<template>
    <form class="register-form" action="">
        <span class="register-label">Регистрация</span>
        <div class="form-group">
            <input v-model="user.lastName" type="text" name="last-name" placeholder="Фамилия" required>
        </div>
        <div class="form-group">
            <input v-model="user.firstName" type="text" name="first-name" placeholder="Имя" required>
        </div>
        <div class="form-group">
            <input v-model="user.middleName" type="text" name="middle-name" placeholder="Отчество" required>
        </div>
        <div class="form-group">
            <input v-model="user.email" type="email" name="email" placeholder="Электронная почта" required>
        </div>
        <div class="form-group">
            <input v-model="user.phoneNumber" type="tel" name="phone-number" placeholder="Номер телефона" pattern="(\+7|8)[9]\d{9}" required>
        </div>
        <div class="form-group">
            <input v-model="user.passwd" type="password" name="passwd" placeholder="Пароль" required>
        </div>
        <div class="form-group">
            <input v-model="user.dublPasswd" type="password" name="dubl-passwd" placeholder="Повторите пароль" required>
        </div>
        <MyButton class="btn">Зарегистрироваться</MyButton>
        <div class="have-account">
            <span class="have-account-label">Есть аккаунт?</span>
            <router-link to="/login">Войти</router-link>
        </div>
    </form>
</template>

<script>
import MyButton from '@/components/MyButton.vue';

export default {
    components: {
        MyButton
    },
    
    data() {
        return {
            user: {
                lastName: '',
                firstName: '',
                middleName: '',
                email: '',
                phoneNumber: '',
                passwd: '',
                dublPasswd: '',
            }
        }
    }
}
</script>

<style scoped>
.register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding: 45px;
    margin: 20px;
    background-color: #f8f8f8;
    border: 1px solid #eee;
    box-shadow: 0 2px 5px #B7CEB2;
    border-radius: 20px;
}

.register-label {
    font-size: 20px;
    margin-bottom: 15px;
}

.form-group {
    width: 100%;
    margin: 15px;
}

.form-group input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-group input:focus {
    border-color: #B7CEB2;
    box-shadow: 0 0 8px rgba(183, 206, 178, 0.5);
    outline: none;
}

.btn {
    margin: 15px;
}

.have-account {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
}

.have-account-label {
    margin-right: 10px;
}
</style>