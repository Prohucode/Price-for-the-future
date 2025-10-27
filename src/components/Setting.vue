<template>
	<DialogForm v-model="show" :max-width="600">
		<template #title> Настройки окружения</template>
		<!-- <div class="text-caption pb-3">Музыка {{ media.toFixed(0) }}%</div> -->
		<v-slider v-model="media" label="Музыка" append-icon="mdi-volume-high" hide-details @vue:updated="setVolume"></v-slider>
		<v-autocomplete
			v-model="selectedLanguage"
			label="Язык"
			class="pl-2 pr-2"
			:hint="`${selectedLanguage?.name}, ${selectedLanguage?.nativeName}`"
			:items="languages"
			item-title="nativeName"
			item-value="name"
			variant="underlined"
			return-object
			single-line
			persistent-hint></v-autocomplete>
	</DialogForm>
</template>

<script>
	import DialogForm from "./DialogForm.vue";
	import { useSettingStore } from "@/stores/setting";

	export default {
		components: {
			DialogForm,
		},
		data() {
			return {
				settingStore: useSettingStore(),
				media: 0,
				selectedLanguage: { name: "Русский", nativeName: "Русский" },
				languages: [
					{ name: "Русский", nativeName: "Русский" },
					{ name: "Английский", nativeName: "English" },
					{ name: "Корейский", nativeName: "한국어" },
					{ name: "Китайский", nativeName: "中文" },
					{ name: "Японский", nativeName: "日本語" },
				],
			};
		},

		props: {
			modelValue: {
				type: Boolean,
				required: true,
			},
		},
		emits: ["update:modelValue"],
		computed: {
			show: {
				get() {
					return this.modelValue;
				},
				set(value) {
					this.$emit("update:modelValue", value);
				},
			},

			volume() {
				return this.settingStore.getVolume;
			},
		},
		mounted() {
			this.media = this.volume;
		},
		methods: {
			setVolume() {
				this.settingStore.setVolume(Math.round(this.media));
			},
		},
	};
</script>

<style scoped>
	.voo-dialog-form {
		background-color: white;
		border-radius: 30px;
		padding: 10px;
	}
	.voo-dialog-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 10px;
	}
	.voo-dialog-title {
		padding: 0px 20px;
		font-size: 20px;
	}
	.voo-dialog-box {
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 20px;
	}
	.light-icon-x {
		font-size: 25px;
	}
</style>
