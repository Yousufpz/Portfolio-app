// vite.config.ts
import path from "path";
import { defineConfig } from "file:///C:/Work_files/Projects/Portfolio/Mohd_Yousuf/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Work_files/Projects/Portfolio/Mohd_Yousuf/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Work_files\\Projects\\Portfolio\\Mohd_Yousuf";
var vite_config_default = defineConfig({
  base: "/",
  // Ensures correct asset paths
  build: {
    outDir: "dist"
    // Vercel looks for 'dist' by default
  },
  plugins: [
    vue({
      script: {
        defineModel: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxXb3JrX2ZpbGVzXFxcXFByb2plY3RzXFxcXFBvcnRmb2xpb1xcXFxNb2hkX1lvdXN1ZlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcV29ya19maWxlc1xcXFxQcm9qZWN0c1xcXFxQb3J0Zm9saW9cXFxcTW9oZF9Zb3VzdWZcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1dvcmtfZmlsZXMvUHJvamVjdHMvUG9ydGZvbGlvL01vaGRfWW91c3VmL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6ICcvJywgLy8gRW5zdXJlcyBjb3JyZWN0IGFzc2V0IHBhdGhzXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJ2Rpc3QnLCAvLyBWZXJjZWwgbG9va3MgZm9yICdkaXN0JyBieSBkZWZhdWx0XHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoe1xyXG4gICAgICBzY3JpcHQ6IHtcclxuICAgICAgICBkZWZpbmVNb2RlbDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJylcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1UsT0FBTyxVQUFVO0FBQ2pWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUZoQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUE7QUFBQSxFQUNOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxRQUNOLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
