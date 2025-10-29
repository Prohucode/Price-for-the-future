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


		<video v-for="character in (structure[active_scene]?.characters ?? [])" class="character" :key="`${active_scene} ${character?.src}`"
			:style="{
				top: character?.y,
				left: character?.x,
				width: character.width
			}" :src="character?.src" preload="metadata" muted :loop="!!character?.loop" :autoplay="!!character?.play"
			playsinline>
			Ваш браузер не поддерживает видео-тег.
		</video>



		<!-- <div class="top">{{ this.active_scene }}</div> -->
		<div class="down">
			<div class="box">
				<div class="panel">
					<div class="name">
						<!-- <v-avatar :image="structure[active_scene]?.headband" size="40"></v-avatar> -->
						<b>{{ this.structure[this.active_scene]?.authore }} :</b>
					</div>

					<div class="dialogue"><span v-html="this.text_line"></span></div>

					<div class="actions">
						<v-btn class="pf-btn" v-for="(item, index) in this.structure[this.active_scene]?.actions"
							:key="index" @click="setScene(item.next_scene)" variant="flat" color="#1C1C1C">
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
			timerId: false,
			structure: {},
			sceneStore: useSceneStore(),
		};
	},
	computed: {
		active_scene() {
			return this.sceneStore.getActiveScene;
		},
	},

	beforeMount() {
		this.structure = episodes;
		console.log(this.structure);
	},

	mounted() {
		this.setTextline();
		console.log(this.active_scene);
	},

	unmounted() {
		this.clearTimer();
	},

	methods: {
		setScene(scene) {
			this.sceneStore.setScene(scene);
			this.clearTimer();
			this.setTextline();
		},

		clearTimer() {
			if (this.timerId != false) clearTimeout(this.timerId);
		},

		setTextline() {
			this.text_line = "";
			var i = 0;
			var text = this.structure[this.active_scene].dialogue;

			const nextchar = () => {
				this.text_line += text[i];
				i += 1;

				if (this.text_line.length < text.length) {
					let timeout = Math.round(Math.random() * 30);
					this.timerId = setTimeout(nextchar, timeout);
				}
			};

			nextchar();
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
	/* background-color: rgba(0, 255, 255, 0.616); */
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
	display: flex;
	align-items: center;
	gap: 10px
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
	/* padding-top: 10px; */
}

.button {
	padding: 15px 20px;
	color: rgb(167, 167, 167);
	border-bottom: 1px solid white;
	/* border-top: 1px solid white; */
	transition: background-color 0.2s ease-in-out;
	cursor: pointer;
	user-select: none;
}

.button:hover {
	background-color: rgba(255, 255, 255, 0.26);
	color: white;
}
</style>
