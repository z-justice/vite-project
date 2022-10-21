import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import { FileSystemIconLoader } from "unplugin-icons/loaders";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
            },
        },
        plugins: [
            vue(),
            AutoImport({
                imports: ["vue", "vue-router", "vuex"],
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                dirs: ["src/components"],
                dts: true,
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        prefix: "icon",
                        enabledCollections: ["ep"], // element-plus 图标库
                        customCollections: ["custom"],
                    }),
                ],
            }),
            Icons({
                compiler: "vue3",
                autoInstall: true,
                customCollections: {
                    custom: FileSystemIconLoader("src/assets/icons", svg => {
                        const svgTitle = /<svg([^>+].*?)>/; //匹配<svg ... >标签的
                        const clearHeightWidth = /(width|height)="([^>+].*?)"/g; //匹配长度或者宽度属性的
                        const hasViewBox = /(viewBox="[^>+].*?")/g; //匹配viewBox属性的
                        const clearReturn = /(\r)|(\n)/g;
                        return svg.replace(clearReturn, "").replace(svgTitle, ($1, $2) => {
                            let width = 0;
                            let height = 0;
                            let content = $2.replace(clearHeightWidth, (s1, s2, s3) => {
                                if (s2 === "width") {
                                    width = s3;
                                } else if (s2 === "height") {
                                    height = s3;
                                }
                                return "";
                            });
                            if (!hasViewBox.test($2)) {
                                content += `viewBox="0 0 ${width.replace(/(px|PX)/g, "")} ${height.replace(/(px|PX)/g, "")}"`;
                            }
                            return `<svg  ${content}>`;
                        });
                    }),
                },
            }),
        ],
    };
});
