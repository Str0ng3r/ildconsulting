<script lang="ts" setup></script>

<template>
	<div class="container">
		<div class="container_wrap cont_details">
			<h2 class="title_details">
				Деталі співпраці з нами, які можуть Вас зацікавити:
			</h2>
			<ul class="list_details">
				<li class="li_detail">
					<span>✔</span>
					Оплата за візовий супровід відбувається у валютах гривня чи фунт
					стерлінгів
				</li>
				<li class="li_detail">
					<span>✔</span>
					На даному етапі, у зв’язку з війною в Україні, Великобританія
					скасувала всі вимоги на COVID для українців
				</li>
				<li class="li_detail">
					<span>✔</span>
					У разі відмови, вартість консульського збору (та/або медичної
					страховки) не повертається 
				</li>
				<li class="li_detail">
					<span>✔</span>
					У разі відмови, вартість візового супроводу не повертається
				</li>
				<li class="li_detail">
					<span>✔</span>
					Оплата перекладів на візу (якщо Ви робите їх у нас) здійснюється після
					закриття анкети/отримання Вами розрахунку для оплати
				</li>
				<li class="li_detail">
					<span>✔</span>
					Купівля страховки на деякі види віз є обов’язковим (Student visa,
					spouse visa тощо). Проте, на інші види віз Ви можете його робити за
					власним бажанням (Standard Visitor visa, Ukraine Scheme тощо).
				</li>
				<li class="li_detail">
					<span>✔</span>
					Ми можемо вам порекомендувати авіакомпанії, якими буде
					дешевше/вигідніше летіти в Сполучене Королівство
				</li>
				<li class="li_detail">
					<span>✔</span>
					Оплата консульського збору/медичної страховки може відбуватись 3-ма
					варіантами: ми надаємо вам доступ до анкети і Ви оплачуєте його
					самостійно; ми оплачуємо його з власних коштів, надсилаємо Вам скрін
					сумарної суми, яку ми оплатили і Ви переводите її нам; ми підраховуємо
					приблизну вартість (якщо Ви хочете оплачувати в гривнях), Ви
					надсилаєте її на наш рахунок, ми оплачуємо збір (якщо є решта, то
					повертаємо або, за узгодженням з Вами, відраховуємо від оплати за
					переклади).
				</li>
			</ul>
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

.cont_details {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 112rem;
	padding-bottom: 10rem;
}
.list_details {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 1.2rem;
}
.li_detail {
	color: #1d1d1d;
	font-family: "Roboto";
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3.2rem;
}
.li_detail span {
	color: #315b44 !important;
	font-family: "Roboto";
	font-size: 2.4rem;
	font-style: normal;
	font-weight: 400;
	line-height: 3.2rem; /* 200% */
	margin-right: 0.4rem;
}
.title_details {
	color: #395847;
	font-family: "Roboto";
	font-size: 3.2rem;
	font-style: normal;
	font-weight: 700;
	line-height: 4rem; /* 125% */
	margin-bottom: 5.6rem;
}
</style>
