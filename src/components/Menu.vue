<template>
	<div class="menu">
		<Setting v-model="open_setting" />

		<div class="menu-box">
			<div>
				<img src="@/assets/Home/logo.svg" width="250px" />
			</div>

			<div class="box-btn">
				<v-btn class="pf-btn" @click="newGame" variant="flat" color="#1C1C1C" block> Новая игра </v-btn>
				<v-btn class="pf-btn" @click="continueGame" variant="flat" color="#1C1C1C" block> Продолжить </v-btn>
				<v-btn class="pf-btn" @click="openSetting" variant="flat" color="#1C1C1C" block> Настройки </v-btn>
				<v-btn class="pf-btn" @click="exit" variant="flat" color="#1C1C1C" block> Выход </v-btn>
			</div>
		</div>
		<div class="menu-hide"></div>
	</div>
</template>

<script>
import { useSceneStore } from "@/stores/scene";
import Setting from "./Setting.vue";

export default {
	components: {
		Setting,
	},
	data() {
		return {
			sceneStore: useSceneStore(),
			open_setting: false,
		};
	},
	mounted() { },
	methods: {
		newGame() {
			this.sceneStore.setScene("scene_1");
			this.url("scene");
		},

		continueGame() {
			this.url("scene");
		},

		openSetting() {
			this.open_setting = true;
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
.menu {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
}

.menu-box {
	display: flex;
	flex: 5 1 0px;
	background-color: #414141af;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	padding: 30px;
	max-width: 500px;
	gap: 30px;
}

.menu-hide {
	display: flex;
	flex: 7 1 0px;
}

.box-btn {
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
}
</style>
