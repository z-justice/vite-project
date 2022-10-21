<script setup>
import { inject } from "vue";

const API = inject("API");
const store = useStore();

const content = ref("123");
const count = ref(0);

const add = cont => {
    console.log(cont);
    count.value++;
};
const login = () => store.dispatch("Login/login", !store.state.Login.isLogin);
const getData = API.getData;
</script>

<template>
    {{ $store.state.Login.isLogin }}
    <div class="read-the-docs">{{ content }}</div>
    <el-button type="primary" @click="add(count)"> +1 : {{ count }}</el-button>
    <el-button type="primary" @click="login()"> Login</el-button>
    <el-button type="primary" @click="getData"> 请求</el-button>
    <IconCustomAdd />
    <IconCustomList01 />
    <home-page></home-page>
    <router-view></router-view>
</template>

<style lang="scss" scoped>
/*
    常用红色
*/
$red: #ff6666;

/*
    高度计算方法
*/
@function calcH($h) {
    @return 100px - $h;
}

@mixin font_params($s: 20px) {
    color: $red;
    width: 100px - $s;
    height: calcH(20px);
}

.redfont {
    @include font_params(80px);
}
.read-the-docs {
    @extend .redfont;
}
</style>
