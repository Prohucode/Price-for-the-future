<template>
	<div class="scene">
		<QuickMenu />
		<div class="background">
			<video v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { duration: 2000 } }"
				:leave="{ opacity: 0, transition: { duration: 2000 } }" :key="active_scene"
				:src="structure[active_scene]?.background?.src" preload="metadata" muted
				:loop="structure[active_scene]?.background?.loop" :autoplay="structure[active_scene]?.background?.play">
				Ваш браузер не поддерживает видео-тег.
			</video>
		</div>

		<video v-for="character in (structure[active_scene]?.characters ?? [])" class="character"
			:key="`${active_scene} ${character?.src}`" :style="{
				top: character?.y,
				left: character?.x,
				width: character.width
			}" :src="character?.src" preload="metadata" muted :loop="!!character?.loop" :autoplay="!!character?.play"
			playsinline>
			Ваш браузер не поддерживает видео-тег.
		</video>

		<div class="down">
			<div class="box">
				<div class="panel">
					<div class="name">
						<b>{{ structure[active_scene]?.authore }} :</b>
					</div>

					<div class="dialogue">
						<span v-html="text_line"></span>
					</div>

					<div class="actions">
						<v-btn class="pf-btn" v-for="(item, index) in structure[active_scene]?.actions" :key="index"
							@click="setScene(item.next_scene)" variant="flat" color="#1C1C1C">
							{{ item.title }}
						</v-btn>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useSceneStore } from "@/stores/scene";
import QuickMenu from "./QuickMenu.vue";
import episodes from "@/episodes";

export default {
	components: {
		QuickMenu,
	},
	data() {
		return {
			text_line: "",
			timerId: null,
			structure: {},
			sceneStore: useSceneStore(),
			audio: null, // текущий Audio-объект сцены
		};
	},
	computed: {
		active_scene() {
			return this.sceneStore.getActiveScene;
		},
	},

	beforeMount() {
		this.structure = episodes;
	},

	mounted() {
		// стартовый текст и (опционально) звук для первой сцены
		this.setTextline();
		this.setAudio();
	},

	beforeUnmount() {
		this.clearTimer();
		if (this.audio) {
			this.audio.pause();
			this.audio = null;
		}
	},

	watch: {
		// при смене сцены автоматически обновляем текст + аудио
		active_scene() {
			this.clearTimer();
			this.setTextline();
			this.setAudio();
		},
	},

	methods: {
		setScene(scene) {
			this.sceneStore.setScene(scene);
			// дальше всё сделает watcher active_scene
		},

		clearTimer() {
			if (this.timerId) {
				clearTimeout(this.timerId);
				this.timerId = null;
			}
		},

		setTextline() {
			const scene = this.structure[this.active_scene];
			if (!scene || !scene.dialogue) {
				this.text_line = "";
				return;
			}

			this.text_line = "";
			let i = 0;
			const text = scene.dialogue;

			const nextchar = () => {
				this.text_line += text[i];
				i += 1;

				if (this.text_line.length < text.length) {
					const timeout = Math.round(Math.random() * 120);
					this.timerId = setTimeout(nextchar, timeout);
				}
			};

			nextchar();
		},

		setAudio() {
			const scene = this.structure[this.active_scene];
			const audio_obj = scene?.audio;

			// если у сцены нет аудио — просто останавливаем предыдущее
			if (!audio_obj || !audio_obj.src) {
				if (this.audio) {
					this.audio.pause();
					this.audio = null;
				}
				return;
			}

			// останавливаем предыдущий трек
			if (this.audio) {
				this.audio.pause();
				this.audio = null;
			}

			const audio = new Audio(audio_obj.src);
			audio.loop = !!audio_obj.loop;
			audio.volume = typeof audio_obj.volume === "number" ? audio_obj.volume : 1;

			this.audio = audio;

			// autoplay сработает, если смена сцены произошла по клику пользователя
			audio
				.play()
				.catch((err) => {
					console.error("Error playing scene audio:", err);
				});
		},
	},
};
</script>

<style scoped>
.scene {
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background-color: black;
}

.background {
	position: absolute;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	z-index: 0;
}

.background video {
	object-fit: cover;
	width: 100%;
	height: 100%;
}

.character {
	position: absolute;
	height: auto;
	z-index: 1;
}

@keyframes show {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

.top {
	position: absolute;
	left: 0%;
	top: 0%;
	width: 100%;
	z-index: 1;
	padding: 30px;
}

.down {
	position: absolute;
	left: 0%;
	bottom: 0%;
	width: 100%;
	z-index: 1;
}

.box {
	position: relative;
	margin-right: auto;
	margin-left: auto;
	max-width: 1200px;
	padding: 30px;
}

.panel {
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 30px;
	background-color: #2c2c2cf3;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
}

.name {
	display: flex;
	color: rgb(167, 167, 167);
	font-size: 18px;
	width: 100%;
	align-items: center;
	gap: 10px;
}

.dialogue {
	display: flex;
	color: aliceblue;
	font-size: 16px;
	line-height: 25px;
	letter-spacing: 1px;
}

.actions {
	display: flex;
	flex-direction: row;
	gap: 15px;
}

.button {
	padding: 15px 20px;
	color: rgb(167, 167, 167);
	border-bottom: 1px solid white;
	transition: background-color 0.2s ease-in-out;
	cursor: pointer;
	user-select: none;
}

.button:hover {
	background-color: rgba(255, 255, 255, 0.26);
	color: white;
}
</style>
