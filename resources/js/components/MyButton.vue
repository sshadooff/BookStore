<template>
    <button class="buy-button" type="submit">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style>
.buy-button {
    padding: 12px;
    margin: 5px;
    width: 100%;
    font-size: 20px; 
    background-color: #B7CEB2;
    color: #64231A;
    border-radius: 10px;
    border-width: 0;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.buy-button:hover {
    transform: scale(1.03);
    box-shadow: 0 2px 5px #B7CEB2;
}
</style>