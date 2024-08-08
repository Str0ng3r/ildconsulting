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
		<h1 class="visa_title">B1 (Bussiness)/Бізнес віза</h1>
		<div class="wrap_visa_text">
			<p class="visa_desc">
				Бізнес віза B1 – це тимчасова мультивіза, яка в основному видається під
				короткотермінові робочі поїздки. Тривалість візи складає до 10 років.
				Час перебування на ній в країні – максимум 180 днів. Вона не є серед
				числа віз, які зараховуються на маршрут легалізації. Проте з неї Ви
				можете переключитись на інший тип візи, який буде на це спрямований.
			</p>
			<p class="visa_desc">
				Які цілі поїздки включає дана віза? <br />
				- Консультації з бізнес-партнерами <br />
				- Відвідування наукової, освітньої, професійної чи ділової конференції
				<br />
				- Оформити купівлю житла <br />
				- Укладення договорів <br />
			</p>
			<p class="visa_desc">Вартість візового супроводу складає - 300£</p>
			<p class="visa_desc">Вартість консульського збору - 160$</p>
		</div>
	</NuxtLayout>
</template>
<style scoped lang="scss"></style>
