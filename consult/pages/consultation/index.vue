<script lang="ts" setup></script>

<template>
	<div class="container">
		<div class="container_wrap cont_cons">
			<h1 class="visa_title title_cons">Консультація</h1>
			<div class="wrap_cons">
				<div class="wrap_cons_wrapper">
					<p class="cons_desc">
						<span>
							Ми готові надати Якщо Ви б хотіли більше інформації щодо питання,
							яке Вас <br />
							цікавить, то залиште свій номер телефону і ми з Вами зв’яжемось.
							<br />Вартість консультації складає 30£. Тривалість – від 15 до 30
							хв.<br />
						</span>
						Що включає в себе консультація?<br />
						1)   Ознайомлення та розбір Вашого запиту <br />
						2)   Опрацювання Вашого імміграційного минулого та життєвої ситуації
						<br />
						3)   Рекомендації щодо необхідного переліку документів <br />
						4)   Ознайомлення з нашою політикою роботи <br />
						5)   Відповіді на Ваші запитання
					</p>
					<button class="button_accept">
						Залишити заявку<nuxt-icon name="arrowright" filled></nuxt-icon>
					</button>
				</div>
				<img src="/assets/img/cons.png" alt="people" class="cons_img" />
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
.cons_desc {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	margin-bottom: 2rem;
	line-height: 3.2rem; /* 200% */
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
.cons_desc span {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 600;
	margin-bottom: 2rem;
	line-height: 2.8rem; /* 200% */
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
.cons_img {
	width: 100%;
	max-width: 64.5rem;
}
.cont_cons {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.title_cons {
	font-family: "Roboto";
	font-size: 4rem;
	font-style: normal;
	font-weight: 700;
	line-height: 5.6rem; /* 140% */
	margin-bottom: 5.6rem;
}
.wrap_cons {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 9.5rem;
}
.wrap_cons_wrapper {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
}
.wrap_cons_wrapper ul {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	padding-left: 2rem;
}
.wrap_cons_wrapper ul > li {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.4rem; /* 150% */
}
</style>
