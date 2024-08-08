<script lang="ts" setup>
const USA = [
	{
		btnText: "Неімміграційні візи типу В",
		btnLink: "/visas/USA",
	},
	{
		btnText: "-Бізнес віза типу В1",
		btnLink: "/visas/USA/BussinesB1",
	},
	{
		btnText: "-Туристична віза типу В2",
		btnLink: "/visas/USA/TuristicB2",
	},
	{
		btnText: "-Бізнес-туристична віза типу В1/В2",
		btnLink: "/visas/USA/Bussines-Turistic_B1B2",
	},
	{
		btnText: "-Гуманітарна віза для українців",
		btnLink: "/visas/USA/Humanitar",
	},
	{
		btnText: "Візовий супровід ",
		btnLink: "/visas/USA/suprovid",
	},
];
</script>
<template>
	<NuxtLayout name="visa" :tab-arr="USA">
		<h1 class="visa_title">
			Nonimmigrant visas (type B)/Неімміграційні візи типу В
		</h1>
		<div class="wrap_visa_text">
			<p class="visa_desc">
				Візи цього типу передбачені для відпочинку, відвідування членів сімʼї та
				друзів, чи для медичного лікування.
				<br />
				!Зверніть увагу, що в межах цієї візи, на основі дитячої навчальної візи
				можна запросити одного з батьків дитини у Великобританію.
			</p>
			<p class="visa_desc">
				Чого не дозволяють Вам неімміграційні візи типу В? <br />
				- Навчатися <br />
				- Працювати на постійній основі <br />
				- Будь-які вистави, які представляються перед аудиторією, що оплачує за
				ці вистави <br />
				- Прибуття в Сполучені Штати в складі екіпажу літака чи корабля <br />
				- Працювати в іноземній пресі, на радіо, у кіно, друкованій журналістиці
				чи інших ЗМІ <br />
				- Постійного місця проживання в Сполучених Штатах Америки. <br />
			</p>
		</div>
	</NuxtLayout>
</template>
<style scoped lang="scss"></style>
