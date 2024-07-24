<script lang="ts" setup>
const points = [
	{
		name: "24/7",
		desc: "Ми на звʼязку з Вами",
		icon: "hours",
	},
	{
		name: "600+",
		desc: "Відкрили віз за рік у Великобританію, США, Канаду та Шенген зону",
		icon: "topArrow",
	},
	{
		name: "17+",
		desc: "Років досвіду в сфері міграції у Великобританію",
		icon: "case",
	},
	{
		name: "100%",
		desc: "Індивідуальний підхід до кейсу кожного клієнта",
		icon: "fileLike",
	},
	{
		name: "Локація",
		desc: "Знаходимось як в Британії, так і в Україні",
		icon: "location",
	},
	{
		name: "Відкрита співпраця",
		desc: "Кожен крок, який ми здійснюємо, узгоджується з Вами. Таким чином, Ви в курсі всього процесу.",
		icon: "mail",
	},
	{
		name: "Довіра",
		desc: "Надсилаємо Вам усю документацію стосовно подачі та нашої співпраці в електронному форматі",
		icon: "like",
	},
	{
		name: "Експертність",
		desc: "Наша команда складається з вис.квал фахівців, які постійно вдосконалюють свої знання",
		icon: "star",
	},
];
</script>

<template>
	<div class="container">
		<div class="container_wrap main_container">
			<div class="main_text_wrap">
				<p class="main_text_wrap__first_line">
					ваш надійний партнер у світі міграції
				</p>
				<p class="main_text_wrap__name_line">ILD Consulting Ltd</p>
				<p class="main_text_wrap__desc_line">
					Ми допоможемо вам відкрити нові горизонти та втілити мрії про життя за
					кордоном. Завдяки нашому багаторічному досвіду, індивідуальному
					підходу та бездоганній репутації, ми гарантуємо успіх на кожному етапі
					вашого міграційного шляху. Оберіть нас, і ви отримаєте більше, ніж
					просто консультацію - ви отримаєте впевненість у своєму майбутньому!
				</p>
				<button class="button_details">
					Детальна інформація<nuxt-icon name="arrowright" filled></nuxt-icon>
				</button>
			</div>
			<img src="../assets/img/mainpage.png" alt="man" class="main_img" />
		</div>
		<section class="why_we">
			<div class="container_wrap why_container">
				<h2 class="why_title">Чому варто працювати з нами?</h2>
				<div class="wrap_points">
					<div
						class="wrap_points__point"
						v-for="(point, key) in points"
						:key="key"
					>
						<nuxt-icon :name="point.icon" filled></nuxt-icon>
						<h3 class="point_title">{{ point.name }}</h3>
						<p class="point_desc">{{ point.desc }}</p>
					</div>
				</div>
			</div>
		</section>
		<section class="reviews">
			<div class="container_wrap rules_wrap">
				<p class="notify_rules">
					Ми не гарантуємо Вам позитивного рішення. Ми гарантуємо Вам професійну
					підготовку Ваших документів для отримання позитивного рішення.
					<span
						>Памʼятайте, що ми - не візовий офіцер. Ми не маємо повноважень
						приймати рішення за Вашими заявками. Саме тому, наші фахівці
						опрацьовують Ваш кейс на кількох етапах, для подальшого його
						розгляду в правильному світлі.</span
					>
				</p>
				<h2 class="opinions_title">Відгуки нашіх клієнтів</h2>
			</div>
		</section>
		<section class="form_section">
			<div class="container_wrap form_cont">
				<img
					src="../assets/img/user_form.png"
					alt="man_with_document"
					class="img_form"
				/>
				<form class="form_opinion">
					<h2 class="form_title">Форма для відгуку</h2>
					<input
						type="text"
						class="input_form name_input"
						placeholder="Ваше ім'я та прізвище"
					/>
					<textarea
						name="opinion"
						id="opin"
						class="input_form textarea_input"
						placeholder="Ваш відгук"
						rows="20"
					></textarea>
					<button class="button_send">Відправити</button>
					<p class="anonym_message">
						*** Якщо ви хочете залишити відгук про нашу компанію, будь ласка,
						скористайтеся цією формою. Ми гарантуємо повну конфіденційність та
						захист даних наших клієнтів.
					</p>
				</form>
			</div>
		</section>
		<section class="contact_our">
			<div class="container_wrap cont_notify">
				<h2 class="notify_title">РОЗПОЧНІТЬ СПІВПРАЦЮ З НАМИ</h2>
				<p class="notify_desc">
					Наша команда забезпечить Вас необхідною підтримкою
					<br />
					для успішного старту та впевненого розвитку у Вашому житті. <br />
					<span>Обирайте ILD Consulting Ltd для досягнення Ваших цілей!</span>
				</p>
				<button class="call_to_action">Зв'язатись з нами</button>
			</div>
		</section>
	</div>
</template>
<style lang="scss" scoped>
.container {
	width: 100%;
	margin: 0 auto;
	background: #395847;
	min-height: 80rem;
}
.call_to_action {
	border-radius: 0.4rem;
	background: #315b44;
	padding: 1.2rem 2.4rem;
	color: #fff;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.4rem; /* 150% */
}
.notify_title {
	color: #1d1d1d;
	text-align: center;
	font-family: "Roboto";
	font-size: 2rem;
	font-style: normal;
	font-weight: 700;
	line-height: 2.8rem; /* 140% */
	text-transform: uppercase;
	margin-bottom: 2.4rem;
}
.notify_desc {
	color: #1d1d1d;
	text-align: center;
	font-family: "Roboto";
	font-size: 2.8rem;
	font-style: normal;
	font-weight: 400;
	line-height: 4rem; /* 142.857% */
	margin-bottom: 4rem;
}
.notify_desc span {
	font-family: "Roboto";
	font-size: 2.8rem;
	font-style: normal;
	font-weight: 600;
	line-height: 4rem;
}
.cont_notify {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4.2rem 6.6rem 4.6rem 6.6rem;
	border-radius: 0.5rem;
	background: #e1f6eb;
	box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.06);
}
.anonym_message {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.2rem;
	font-style: normal;
	width: 100%;
	font-weight: 500;
}
.contact_our {
	background: #fff;
	padding: 8rem 21.1rem 10rem 21.1rem;
}
.textarea_input {
	resize: none;
	max-height: 12rem !important;
	margin-bottom: 3.2rem;
}
.button_send {
	border-radius: 0.4rem;
	background: #315b44;
	width: 100%;
	color: #fff;
	font-family: "Roboto";
	padding: 1.6rem 2.4rem;
	font-size: 1.6rem;
	font-style: normal;
	margin-bottom: 1.4rem;
	font-weight: 600;
	line-height: 2.8rem; /* 175% */
}
.input_form {
	width: 100% !important;
	padding: 1.55rem 1.45rem;
	border-radius: 0.5rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background: #dbf4e6;
	color: #212121;
	font-family: "Roboto";
	font-size: 1.4rem;
	font-style: normal;
	font-weight: 400;
	max-height: 5rem;
	line-height: normal;
	&::placeholder {
		color: rgba(69, 69, 69, 0.55);
		font-family: "Roboto";
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	&.name_input {
		margin-bottom: 2rem;
	}
}
.form_title {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 3.2rem;
	font-style: normal;
	font-weight: 700;
	margin-bottom: 2.8rem;
	line-height: 4rem; /* 125% */
}
.form_opinion {
	margin: auto 0;
	width: 100%;
	max-width: 56.4rem;
	border-radius: 0.5rem;
	border: 1px solid #ddd;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #fff;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
	padding: 6.2rem 4.2rem 4.2rem 4.2rem;
}
.form_section {
	background: linear-gradient(180deg, #f2f7f4 0%, #f2f7f4 100%);
	padding-top: 5.8rem;
}
.img_form {
	width: 50%;
	max-width: 51.6rem;
}
.form_cont {
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 4rem;
}
.opinions_title {
	color: #1d1d1d;
	text-align: center;
	font-family: "Roboto";
	font-size: 2rem;
	font-style: normal;
	font-weight: 700;
	line-height: 2.8rem; /* 140% */
	margin-bottom: 2.4rem;
}
.notify_rules {
	width: 100%;
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.8rem;
	font-style: normal;
	display: flex;
	flex-direction: column;
	max-width: 112rem;
	font-weight: 600;
	line-height: normal;
	margin-bottom: 4rem;
}
.rules_wrap {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}
.notify_rules span {
	width: 100%;
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
}
.reviews {
	padding: 9rem 0;
	background: #fff;
}
.wrap_points__point {
	width: 100%;
	max-width: 26.5rem;
	height: 25.5rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: flex-start;
	border-radius: 0.4rem;
	background: #fff;
	box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.06);
	padding: 3.8rem 1.6rem 2rem 1.6rem;
}
.point_title {
	margin-bottom: 0.6rem;
	margin-top: 1.2rem;
	font-family: "Roboto";
	color: #273f31;
	text-align: center;
	font-size: 2.2rem;
	font-style: normal;
	font-weight: 700;
	line-height: 3rem; /* 136.364% */
	text-transform: capitalize;
}
.point_desc {
	overflow: hidden;
	color: #737373;
	font-family: "Roboto";
	text-align: center;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.6rem; /* 162.5% */
}
.why_we {
	background: #e0f3e7;
	padding: 6.2rem 0;
}
.wrap_points {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 2rem;
	flex-wrap: wrap;
	width: 100%;
	max-width: 112rem;
}
.main_container {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
}
.why_container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.why_title {
	color: #395847;
	font-family: "Roboto";
	font-size: 4.8rem;
	font-style: normal;
	font-weight: 700;
	line-height: 3.5rem; /* 116.667% */
	margin-bottom: 5.6rem;
}
.main_text_wrap__desc_line {
	color: #fff;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	margin-bottom: 2.4rem;
	font-weight: 500;
}
.button_details {
	padding: 1.2rem 2.4rem;
	border-radius: 0.4rem;
	background: #00be74;
	display: flex;
	align-items: center;
	gap: 0.8rem;
	color: #fff;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2.4rem; /* 150% */
}
.main_text_wrap__first_line {
	color: #fff;
	font-family: "Roboto";
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	text-transform: uppercase;
	margin-bottom: 0.8rem;
}
.main_text_wrap__name_line {
	color: #fff;
	font-family: "Roboto";
	font-size: 4.8rem;
	font-style: normal;
	font-weight: 700;
	line-height: 5.1rem; /* 106.25% */
	text-transform: capitalize;
	margin-bottom: 1.6rem;
}
.main_img {
	object-fit: cover;
	width: 50%;
}
.main_text_wrap {
	width: 50%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	margin: auto;
	padding: 2.8rem;
}
</style>
