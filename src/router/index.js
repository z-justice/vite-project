import { createRouter, createWebHashHistory } from "vue-router";
const views = import.meta.glob("@/views/**.vue");
const layout = () => import("@/layout/index.vue");

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "layout",
            component: layout,
            children: Reflect.ownKeys(views).map(path => {
                const name = path.split("/").reverse()[0].split(".")[0];
                return {
                    path: `${name}`,
                    name,
                    component: views[path],
                };
            }),
        },
    ],
});
export default router;
