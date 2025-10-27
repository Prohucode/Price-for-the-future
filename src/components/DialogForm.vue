<template>
	<v-dialog v-model="show" :max-width="maxWidth" persistent>
		<div class="voo-dialog-form">
			<div class="voo-dialog-bar">
				<div class="voo-dialog-title"><slot name="title">Название формы</slot></div>
				<div>
					<v-btn @click="closeDialog" icon="mdi-location-exit" variant="text"></v-btn>
				</div>
			</div>
			<div class="voo-dialog-box">
				<slot></slot>
			</div>
		</div>
	</v-dialog>
</template>

<script>
	export default {
		props: {
			modelValue: {
				type: Boolean,
				required: true,
			},
			back: {
				type: Boolean,
				default: false,
			},
			maxWidth: {
				type: [String, Number],
				default: "450", // Значение по умолчанию
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
		},
		methods: {
			closeDialog() {
				if (this.back) {
					console.log("Closing dialog and calling this.$router.back()");
					this.$router.back();

					// Добавьте задержку, чтобы увидеть, что происходит после back()
					setTimeout(() => {
						console.log("Current route after back():", this.$route.fullPath);
					}, 500);
				} else {
					this.show = false;
				}
			},
		},
	};
</script>

<style scoped>
	.voo-dialog-form {
		background-color: #2c2c2c;
		/* border-radius: 30px; */
		color: white;
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
