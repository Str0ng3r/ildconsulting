<script lang="ts" setup>
const visasUrls = [
	{ name: "США", url: "/visas/USA" },
	{ name: "Великобританія", url: "/visas/Britain/Visitor" },
	{ name: "Канада", url: "/visas/Kanada/Humanitar" },
	{ name: "Шенген", url: "/visas/Shingen" },
];
const anotherUrls = [
	{ name: "Переклади", url: "/translate" },
	{ name: "Навчання", url: "/study" },
	{ name: "Консультація", url: "/consultation" },
];
</script>

<template>
	<div class="container">
		<header>
			<div class="container_wrap header_container">
				<nuxt-icon name="logotip" filled></nuxt-icon>
				<div class="wrap_nav_button">
					<ul class="nav_list">
						<NuxtLink to="/" class="nav_link">Головна</NuxtLink>
						<BaseSelect
							rotate-icon
							:options="visasUrls"
							:placeholder="'Візи'"
						></BaseSelect>
						<BaseSelect
							rotate-icon
							:options="anotherUrls"
							:placeholder="'Інші послуги'"
						></BaseSelect>
						<NuxtLink to="about" class="nav_link">Про нас</NuxtLink>
						<NuxtLink to="faq" class="nav_link">FAQ</NuxtLink>
					</ul>
					<NuxtLink to="/contacts" class="call_button"
						>Зв’язатись з нами</NuxtLink
					>
				</div>
			</div>
		</header>
		<slot></slot>
		<footer>
			<div class="container_wrap text_wrap">
				<h3 class="inform_text">Інформація для вас</h3>
				<NuxtLink to="contacts" class="text_wrap__link_contacts"
					>Контакти</NuxtLink
				>
				<NuxtLink to="FAQ" class="text_wrap__link_faq"
					>Питання на відповіді</NuxtLink
				>
				<p class="text_wrap__copyright">Copyright 2024 © ILD Consulting Ltd</p>
			</div>
		</footer>
	</div>
</template>

<style scoped lang="scss">
.container {
	width: 100%;
	margin: 0 auto;
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
	padding: 0 16rem;
}
header {
	width: 100%;
	padding: 1.3rem 14rem;
	// max-width: 144rem;
	border-bottom: solid 1px #3b5a46;
}
.header_container {
	display: flex;
	justify-content: space-between;
	align-items: center;
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
