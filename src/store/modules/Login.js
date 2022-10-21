
export default {
    namespaced: true,

    // 模块内容（module assets）
    state: () => ({
        isLogin: false,
    }),
    getters: {
        isLogin() {},
    },
    actions: {
        login(store, payload) {
            store.state.isLogin = payload;
            ElMessage.success("切换成功");
            return Promise.resolve(payload);
        },
    },
    mutations: {
        login() {},
    },
};
