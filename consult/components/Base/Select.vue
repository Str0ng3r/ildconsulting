<script setup lang="ts">
interface SelectProps {
  options: any;
  placeholder?: string;
  nameIcon?: string;
  rotateIcon?: boolean;
  greySelect?: boolean;
  transparentSelect?: boolean;
  navigateTo?: boolean;
  noBorder?: boolean;
}
const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: "Select",
  nameIcon: "Dropdown",
});
const isOpen = ref(false);
const selectedOption = ref<string>(props.options[0].name);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: string) => {
  selectedOption.value = option;
  toggleDropdown();
};
const closeDropdown = () => {
  isOpen.value = false;
};
const emits = defineEmits(["update:modelValue"]);
</script>

<template>
  <div
    class="custom-select"
    v-click-outside="closeDropdown"
    @click="toggleDropdown"
    :class="{ all_size: greySelect, transparentSelect }"
  >
    <div
      class="selected-option"
      :class="{
        active_noborder: isOpen && noBorder,
        active: isOpen && !greySelect && !noBorder,
        grey_select: greySelect,
        transparent_select: transparentSelect,
      }"
    >
      <p>{{ placeholder }}</p>
      <nuxt-icon
        :name="nameIcon"
        class="dropdown__arrow"
        filled
        :class="{
          active_icon: isOpen && rotateIcon && !greySelect,
          activeicon_norotate: isOpen && !greySelect,
          grey_dropdown__arrow: greySelect,
          active_icon_grey: isOpen && rotateIcon && greySelect,
          active_icon_header: isOpen && rotateIcon && transparentSelect,
        }"
      />
    </div>
    <ul
      v-show="isOpen"
      class="options_list"
      :class="{
        options_list_grey: greySelect,
        options_list_transparent: transparentSelect,
      }"
    >
      <NuxtLink
        v-for="(option, index) in options"
        :key="index"
        class="options_list__li"
        :class="{ grey_list__li: greySelect }"
        :to="option.url"
      >
        {{ option.name }}
      </NuxtLink>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  cursor: pointer;
  text-align: center;
  box-sizing: content-box;
  border-radius: 0.8rem;
}
.dropdown__arrow.grey_dropdown__arrow {
  stroke: #222222;
}
.active_noborder {
  color: #ffffff !important;
}
.all_size {
  width: 100%;
}
.options_list.options_list_grey {
  margin-top: 1.6rem;
}
.front_for_close {
  z-index: 1001;
  background: transparent;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.options_list__li.grey_list__li {
  padding: 1.65rem 1.2rem;
  text-align: left;
  color: #212121;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.options_list {
  min-width: 16rem;
  z-index: 902;
}
.selected-option {
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  z-index: 1002;
  transition: all 0.2s ease-in-out;
  align-items: center;
  justify-content: center;
  color: #262626;
  font-family: "Open Sans";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem; /* 150% */
}
.dropdown__arrow {
  margin-left: 1.2rem;
  height: 16px;
  width: 16px;
  stroke: #212121;
  display: flex;
  transform: rotate(0deg);
  transition: all 0.2s ease-in-out;
}
.grey_select {
  padding: 1.2rem 1.6rem;
  justify-content: space-between;
  border-radius: 0.8rem;
  border: 1px solid rgba(30, 33, 38, 0.2);
  color: #202020;
  .transparent_select {
    border: none;
    justify-content: space-between;
    height: 4.6rem;
    padding: 0 1.6rem 0 0;
    .nuxt-icon {
      transform: rotate(180deg);
    }
  }
}
.options_list_transparent {
  padding: 0 1.6rem 0 0;
  border: none !important;
  box-shadow: none !important;
  .options_list__li {
    display: flex;
    align-items: center;
    border: none !important;
    height: 4.6rem;
    padding: 0 1.6rem 0 0;
  }
}
.dropdown__arrow.active_icon {
  transform: rotate(180deg);
}
.dropdown__arrow.active_icon_grey {
  transform: rotate(180deg);
}
.dropdown__arrow.active_icon_header {
  transform: rotate(0deg);
}
.options_list {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.6rem !important;
  padding: 0;
  border: 1px solid #dddee0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.options_list__li {
  padding: 0.9rem 2rem;
  box-sizing: content-box;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: left;
  color: #262626;
  line-height: 1.9rem;
}
.options_list__li:hover {
  border-radius: 0.8rem;
  background-color: #f4f4f4;
}
</style>
