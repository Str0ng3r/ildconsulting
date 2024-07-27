<script lang="ts" setup></script>

<template>
	<div class="container">
		<div class="container_wrap cont_study">
			<h1 class="visa_title title_study">Навчання</h1>
			<div class="wrap_study">
				<div class="wrap_study_wrapper">
					<ul>
						<li>влаштування у державні та приватні школи</li>
						<li>групові програми для дітей 5-12 років</li>
						<li>курси англійської мови</li>
						<li>влаштування в коледжі та університети</li>
					</ul>
					<button class="button_accept">
						Залишити заявку<nuxt-icon name="arrowright" filled></nuxt-icon>
					</button>
				</div>
				<img src="/assets/img/study.png" alt="peoples" class="study_img" />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	background: #f2f7f4;
	min-height: 80rem;
	padding-top: 10rem;
}
.button_accept {
	padding: 1.2rem 2.4rem;
	display: flex;
	gap: 0.8rem;
	align-items: center;
	color: #fff;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 600;
	line-height: 2.4rem; /* 150% */
	border-radius: 0.4rem;
	background: #00be74;
	background: color(display-p3 0.2941 0.7333 0.4784);
}
.study_img {
	width: 100%;
	max-width: 64.5rem;
}
.cont_study {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.title_study {
	font-family: "Roboto";
	font-size: 4rem;
	font-style: normal;
	font-weight: 700;
	line-height: 5.6rem; /* 140% */
	margin-bottom: 5.6rem;
}
.wrap_study {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 9.5rem;
}
.wrap_study_wrapper {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	max-width: 38rem;
	flex-direction: column;
}
.wrap_study_wrapper ul {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	list-style-type: disc;
	padding-left: 2rem;
}
.wrap_study_wrapper ul > li {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.4rem; /* 150% */
}
</style>
