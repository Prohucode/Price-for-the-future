<template>
    <DialogForm v-model="show" :max-width="600">
        <template #title>Пауза</template>
        <div class="action-box">
            <v-btn class="pf-btn" @click="homeGame" variant="flat" color="#1C1C1C" block> Выход в главное меню </v-btn>
            <v-btn class="pf-btn" @click="exit" variant="flat" color="#1C1C1C" block> Выход из игры</v-btn>

        </div>

    </DialogForm>
</template>

<script>
import DialogForm from "./DialogForm.vue";

export default {
    components: {
        DialogForm,
    },
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        // Добавляем слушатель нажатия клавиши
        window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
        // Убираем слушатель при уничтожении компонента
        window.removeEventListener('keydown', this.handleKeyDown);
    },
    methods: {
        handleKeyDown(event) {
            if (event.key === "Escape") {
                this.show = !this.show; // Показать диалог, если нажата клавиша ESC
            }
        },
        homeGame() {
            this.url("home");
        },
        url(name) {
            this.$router.push({
                name,
            });
        },
        exit() {
            if (window.electronAPI) {
                window.electronAPI.exitApp();
            } else {
                console.warn("Electron API недоступен");
            }
        },
    },
};
</script>

<style scoped>
.action-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;


}
</style>