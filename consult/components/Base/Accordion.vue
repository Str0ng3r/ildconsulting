<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps({
	headerTxt: {
		type: String,
		default: "",
	},
	titleIcon: {
		type: String,
		default: "",
	},
});

const isMoreOpened = ref(false);

const toggler = () => {
	isMoreOpened.value = !isMoreOpened.value;
};
</script>

<template>
	<div class="dropdown_container" @click="toggler">
		<div class="wrap_dropdown">
			<h3 class="dropdown__header-text">
				<nuxt-icon v-if="titleIcon" :name="titleIcon" filled></nuxt-icon
				>{{ headerTxt }}
			</h3>
			<div class="icon" :class="{ active: isMoreOpened }">
				<nuxt-icon name="Dropdown" class="dropdown__arrow" filled />
			</div>
		</div>
		<slot v-if="isMoreOpened"></slot>
	</div>
</template>

<style lang="scss" scoped>
.dropdown_container {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	padding: 1.2rem 2.4rem;
	background: #ffffff;
	width: 100%;
	border-radius: 0.8rem;
	cursor: pointer;
	gap: 0.8rem;
}

.description {
	margin-top: 1.8rem;
	color: #808080;
	font-size: 1.6rem;
	font-weight: 400;
}
.icon {
	width: 2rem;
	height: 2rem;
	stroke: #212121;
	cursor: pointer;
	transition: all 0.1s ease-in-out;
	margin-left: 0.4rem;
}
.wrap_dropdown {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}
.active {
	transform: rotate(180deg);
}
.dropdown__header-text {
	font-size: 1.6rem;
	line-height: 1.9rem;
	font-family: "Roboto";
	display: flex;
	gap: 0.8rem;
}
</style>
