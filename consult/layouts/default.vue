<script lang="ts" setup></script>

<template>
  <div class="container">
    <header>
      <nuxt-icon name="logotip" filled></nuxt-icon>
      <div class="wrap_nav_button">
        <ul class="nav_list">
          <NuxtLink to="/" class="nav_link">Головна</NuxtLink>
          <NuxtLink to="visas" class="nav_link">Візи</NuxtLink>
          <NuxtLink to="another" class="nav_link">Інші послуги</NuxtLink>
          <NuxtLink to="about" class="nav_link">Про нас</NuxtLink>
        </ul>
        <NuxtLink to="contact" class="call_button">Зв’язатись з нами</NuxtLink>
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
  font-family: "Open Sans";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 1rem;
}
.text_wrap__copyright {
  color: #fff;
  font-family: "Open Sans";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
}
.text_wrap__link_faq {
  color: #fff;
  font-family: "Open Sans";
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
  font-family: "Open Sans";
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
  font-family: "Open Sans";
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
  font-family: "Open Sans";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
}
</style>
