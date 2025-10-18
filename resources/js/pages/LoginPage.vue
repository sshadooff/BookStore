<template>
    <form class="login-form" action="">
        <span class="login-label">Вход в личный кабинет</span>
        <div class="form-group">
            <input v-model="user.email" type="email" name="email" placeholder="Электронная почта" required>
        </div>
        <div class="form-group">
            <input v-model="user.passwd" type="password" name="passwd" placeholder="Пароль" required>
        </div>
        <MyButton class="btn">Войти</MyButton>
        <div class="no-account">
            <span class="no-account-label">Нет аккаунта?</span>
            <router-link to="/register">Зарегистрироваться</router-link>
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
                email: '',
                passwd: '',
            }
        }
    }
}
</script>

<style scoped>
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 45px;
    margin: 20px;
    background-color: #f8f8f8;
    border: 1px solid #eee;
    box-shadow: 0 2px 5px #B7CEB2;
    border-radius: 20px;
}

.login-label {
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

.no-account {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
}

.no-account-label {
    margin-right: 10px;
}
</style>