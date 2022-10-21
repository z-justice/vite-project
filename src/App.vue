<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const a = props => console.log(props);
</script>

<template>
    <router-view v-slot="props"> <div @click="a(props)">123123123</div></router-view>
</template>

<style scoped></style>
