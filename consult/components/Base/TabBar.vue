<script lang="ts" setup>
const route = useRoute();

interface Tab {
	btnText: string;
	btnLink: string;
}
interface TabBarProps {
	tabArr?: Tab[];
}
const props = withDefaults(defineProps<TabBarProps>(), {
	tabArr: () => [
		{
			btnText: "Звичайна візитор віза",
			btnLink: "/visas/Britain/Visitor",
		},
		{
			btnText: "Гуманітарна віза для українців",
			btnLink: "/visas/Britain/Humanitar",
		},
		{
			btnText: "Віза на приєднання до партнера",
			btnLink: "/visas/Britain/Partner",
		},
		{
			btnText: "Віза на возʼєднання сімʼї",
			btnLink: "/visas/Britain/Family",
		},
		{
			btnText: "Дитяча навчальна віза",
			btnLink: "/visas/Britain/Kids-study",
		},
		{
			btnText: "Студентська навчальна віза",
			btnLink: "/visas/Britain/Student",
		},
	],
});
</script>

<template>
	<div class="tab-bar">
		<div class="buttons__wrapper">
			<NuxtLink
				v-for="(tab, key) in tabArr"
				:key="key"
				class="link_visa"
				:class="{ active: route.fullPath === tab.btnLink }"
				:to="tab.btnLink"
			>
				{{ tab.btnText }}
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped lang="scss">
.tab-bar {
	width: 100%;
}
.buttons__wrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0.4rem;
	width: 100%;
	.link_visa {
		text-decoration: none;
		padding: 1.2rem 2.4rem;
		border-radius: 0.4rem;
		width: 100%;
		color: #1d1d1d;
		font-family: "Roboto";
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.4rem; /* 150% */
	}
	.link_visa .active {
		border: 1px solid #315b44;
		font-weight: 700;
		color: #315b44;
	}
}
</style>
