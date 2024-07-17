<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="container_wrap">
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
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  background: #395847;
  min-height: 80rem;
}
.main_text_wrap__desc_line {
  color: #fff;
  font-family: "Open Sans";
  font-size: 1.6rem;
  font-style: normal;
  margin-bottom: 2.4rem;
  font-weight: 500;
}
.container_wrap {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.button_details {
  padding: 1.2rem 2.4rem;
  border-radius: 0.4rem;
  background: #00be74;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #fff;
  font-family: "Open Sans";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem; /* 150% */
}
.main_text_wrap__first_line {
  color: #fff;
  font-family: "Open Sans";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
}
.main_text_wrap__name_line {
  color: #fff;
  font-family: "Open Sans";
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
