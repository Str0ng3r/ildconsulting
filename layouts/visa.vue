<script lang="ts" setup>
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
	<div class="container">
		<div class="wrap_cont_visa">
			<div class="left_block_visa"><BaseTabBar :tab-arr="tabArr" /></div>
			<div class="right_block_visa"><slot></slot></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.container {
	width: 100%;
	margin: 0 auto;
}
.right_block_visa {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	// max-width: 76.3rem;
	padding-bottom: 10rem;
}
.left_block_visa {
	width: 100%;
	max-width: 31rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	// margin: auto 0;
	padding-top: 20rem;
}
.wrap_cont_visa {
	width: 100%;
	padding: 0rem 2rem;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	min-height: 70vh;
	margin-top: 6rem;
}
.text_wrap__link_contacts {
	color: #fff;
	font-family: "Roboto";
	font-size: 1.4rem;
	font-style: normal;
	font-weight: 500;
	margin-bottom: 1rem;
}
.text_wrap__copyright {
	color: #fff;
	font-family: "Roboto";
	font-size: 1.4rem;
	font-style: normal;
	font-weight: 500;
}
.text_wrap__link_faq {
	color: #fff;
	font-family: "Roboto";
	font-size: 1.4rem;
	font-style: normal;
	font-weight: 500;
	margin-bottom: 6.2rem;
}
.inform_text {
	font-size: 1.4rem;
	font-style: normal;
	font-weight: 600;
	color: #fff;
	font-family: "Roboto";
	margin-bottom: 2.4rem;
}
.text_wrap {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
header {
	width: 100%;
	padding: 1.3rem 14rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 144rem;
	margin: 0 auto;
}
footer {
	padding: 6rem 0 4.1rem 0;
	width: 100%;
	background: #132b1e;
}
.call_button {
	padding: 1.2rem 2.5rem;
	border-radius: 0.4rem;
	background: #315b44;
	color: #fff;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 400;
	line-height: 2.4rem; /* 150% */
}
.nav_list {
	display: flex;
	align-items: center;
	gap: 3.2rem;
}
.wrap_nav_button {
	display: flex;
	align-items: center;
	gap: 6.8rem;
}
.nav_link {
	color: #262626;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.5rem; /* 150% */
}
</style>
