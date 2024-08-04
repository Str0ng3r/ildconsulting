<script lang="ts" setup>
import axios from "axios";
const phone = ref("");
const email = ref("");
const name = ref("");
const message = ref("");
const statusSend = ref(false);
const sendMessage = async () => {
	try {
		const response = await axios.post(
			"https://66ae1e49b18f3614e3b6cd3e.mockapi.io/ild/consult/applications",
			{
				name: name.value,
				phone: phone.value,
				email: email.value,
				message: message.value,
			}
		);
		statusSend.value = true;
		console.log(response.data);
	} catch (error) {
		console.error("Error sending message:", error);
	}
};
</script>

<template>
	<div class="container">
		<div class="container_wrap cont_contacts">
			<h2 class="title_contacts">НАШІ КОНТАКТИ</h2>
			<div class="wrap_text_form">
				<p class="desc_contacts">
					Ми завжди раді чути наших клієнтів та дізнатися більше про Ваші
					потреби. Якщо у Вас виникають питання, зв’яжіться з нами за телефоном
					або електронною скринькою:
					<b>+44 7411 232315 (Ірина)</b>
					<b>+44 7990 480036 (Діана)</b>
					<a href="mailto:customer.advice@ildconsulting.co.uk"
						>customer.advice@ildconsulting.co.uk</a
					>
					<span
						>Наші фахівці з радістю допоможуть Вам з будь-яких питань щодо
						послуг, які ми надаємо. <br />
						Зв'яжіться з нами прямо зараз та дізнайтеся, як ми можемо допомогти
						Вам у досягненні Ваших цілей. <br />
						Також Ви можете скористатися нашою формою зворотнього зв'язку на
						сайті, щоб надіслати нам повідомлення та отримати відповідь у
						найкоротший термін.</span
					>
				</p>
				<div class="succes_message" v-show="statusSend">
					<p>
						<span>Дякуємо за вашу заявку!</span>Найближчим часом ми розглянемо
						її та сконтактуємо з вами по вашому питанню. <br />Гарного дня!
					</p>
				</div>
				<form
					class="form_contacts"
					@submit.prevent="sendMessage"
					v-show="!statusSend"
				>
					<h2 class="form_title">Форма для зворотнього зв'язку</h2>
					<input
						type="text"
						name="nameus"
						id="nameus"
						v-model="name"
						placeholder="Ваше ім'я"
						class="input_form"
					/>
					<input
						type="tel"
						name="phone"
						id="phone"
						v-model="phone"
						placeholder="Номер телефону"
						class="input_form"
					/>
					<input
						type="mail"
						name="mail"
						v-model="email"
						id="mail"
						placeholder="Електронна скринька"
						class="input_form"
					/>
					<textarea
						name="message"
						id="message"
						class="message_form"
						v-model="message"
						maxlength="300"
						placeholder="Запитання"
						rows="5"
					></textarea>
					<button type="submit" class="send_button_form">Відправити</button>
				</form>
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
.send_button_form {
	color: #fff;
	text-align: center;
	font-family: "Roboto";
	padding: 1.7rem;
	width: 100%;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 600;
	border-radius: 0.5rem;
	background: #315b44;
	line-height: 2.8rem; /* 175% */
}
.succes_message {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10rem;
	width: 100%;
	max-width: 56.4rem;
	border-radius: 0.5rem;
	border: 1px solid #ddd;
	background: #fff;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
}
.succes_message p {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 3.2rem;
	font-style: normal;
	font-weight: 500;
	line-height: 4rem; /* 125% */
	text-align: center;
}
.succes_message p > span {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 3.2rem;
	font-style: normal;
	font-weight: 700;
	line-height: 4rem; /* 125% */
	text-align: center;
	width: 100%;
	display: block;
	text-wrap: nowrap;
	margin-bottom: 2rem;
}
.message_form {
	padding: 1.3rem 1.6rem;
	width: 100%;
	border-radius: 0.5rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background: #dbf4e6;
	color: #212121;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	resize: none;
	font-weight: 400;
	line-height: normal;
	margin-bottom: 2.8rem;
}
.message_form::placeholder {
	color: #454545;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}
.input_form {
	padding: 1.55rem 1.4rem;
	border-radius: 0.5rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	background: #dbf4e6;
	width: 100%;
	margin-bottom: 2rem;
	color: #212121;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}
.input_form::placeholder {
	color: #454545;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}
.form_title {
	color: #000;
	font-family: "Roboto";
	font-size: 2rem;
	margin-bottom: 2.8rem;
	font-style: normal;
	font-weight: 600;
	line-height: 4rem; /* 200% */
}
.form_contacts {
	width: 100%;
	max-width: 56.4rem;
	border-radius: 0.5rem;
	border: 1px solid #ddd;
	background: #fff;
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
	padding: 6.2rem 4.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.cont_contacts {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 114rem;
	padding-bottom: 10rem;
}
.desc_contacts {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3.2rem; /* 200% */
	max-width: 45.5rem;
	display: flex;
	flex-direction: column;
}
.desc_contacts a {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3.2rem;
	text-decoration-line: underline;
}
.desc_contacts b {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 700;
}
.desc_contacts span {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3.2rem; /* 200% */
	max-width: 45.5rem;
	margin-top: 6rem;
}
.title_contacts {
	color: #395847;
	font-family: "Roboto";
	font-size: 3.2rem;
	font-style: normal;
	font-weight: 700;
	line-height: 4rem; /* 125% */
	margin-bottom: 5.6rem;
}
.wrap_text_form {
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
}
</style>
