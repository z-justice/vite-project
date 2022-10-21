//注册 modules 目录下的store
const modules = import.meta.glob("./modules/*.js", { eager: true });
Object.keys(modules).forEach(path => (modules[path.split("/").reverse()[0].split(".")[0]] = modules[path].default));

const store = {
    state() {
        return {
            count: 0,
        };
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
    modules,
};

export default createStore(store);
