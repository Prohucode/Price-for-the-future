import { defineStore } from "pinia";

export const useSettingStore = defineStore("setting", {
    state: () => ({
        volume: 20,
    }),
    actions: {
        setVolume(new_volume) {
            this.volume = new_volume;
        },
    },
    getters: {
        getVolume: (state) => state.volume,
    },

    persist: true, // Включаем сохранение состояния
});
