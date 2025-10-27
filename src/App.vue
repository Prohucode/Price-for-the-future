<template>
	<RouterView />
</template>

<script>
	import { useSettingStore } from "@/stores/setting";
	import track1 from "@/assets/tracks/track1.mp3";
	import track2 from "@/assets/tracks/track2.mp3";
	import track3 from "@/assets/tracks/track3.mp3";
	import track4 from "@/assets/tracks/track4.mp3";

	export default {
		data() {
			return {
				settingStore: useSettingStore(),
				audio: null, // Объект для воспроизведения аудио
				tracks: [track1, track2, track3, track4],
				currentTrackIndex: 0, // Индекс текущего трека
			};
		},
		computed: {
			volume() {
				return this.settingStore.getVolume / 100; // Преобразуем проценты в значение от 0 до 1
			},
		},
		watch: {
			volume(newVolume) {
				if (this.audio) {
					this.audio.volume = newVolume; // Обновляем громкость при изменении
				}
			},
		},
		mounted() {
			this.initAudio(); // Инициализируем аудио
		},
		methods: {
			initAudio() {
				this.audio = new Audio(this.tracks[this.currentTrackIndex]); // Создаем объект аудио
				this.audio.loop = false; // Отключаем зацикливание одного трека
				this.audio.volume = this.volume; // Устанавливаем начальную громкость

				// Логирование готовности трека
				this.audio.addEventListener("canplaythrough", () => {
					console.log("Track is ready to play:", this.tracks[this.currentTrackIndex]);
					this.playAudio();
				});

				// Логирование ошибок загрузки
				this.audio.addEventListener("error", (error) => {
					console.error("Error loading audio:", error);
				});

				// Обработчик окончания трека
				this.audio.addEventListener("ended", () => {
					console.log("Track ended, switching to next track...");
					this.playNextTrack();
				});
			},

			playAudio() {
				if (this.audio) {
					this.audio.play().catch((error) => {
						console.error("Error playing audio:", error);
					});
				}
			},

			playNextTrack() {
				this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length; // Переходим к следующему треку
				console.log("Switching to next track:", this.tracks[this.currentTrackIndex]);

				this.audio.src = ""; // Очищаем предыдущий источник
				this.audio.src = this.tracks[this.currentTrackIndex]; // Меняем источник трека
				this.audio.volume = this.volume; // Устанавливаем громкость
				this.playAudio(); // Воспроизводим новый трек
			},
		},
		beforeUnmount() {
			// Очищаем ресурсы перед уничтожением компонента
			if (this.audio) {
				this.audio.pause();
				this.audio.removeEventListener("ended", this.playNextTrack);
				this.audio = null;
			}
		},
	};
</script>
