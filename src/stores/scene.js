import { defineStore } from "pinia";

export const useSceneStore = defineStore("scene", {
	state: () => ({
		active_scene: "scene_1"
	}),
	actions: {
		setScene(new_scene) {
			this.active_scene = new_scene;
		},
	},
	getters: {
		getActiveScene: (state) => state.active_scene,
	},

	persist: true, // Включаем сохранение состояния
});
