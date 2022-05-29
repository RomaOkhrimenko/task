<template>
  <header class="header">
    <div class="header__left">
      <Logo />
      <div class="header__left-filter">
        <span>Дом</span>
        <span>Офис</span>
      </div>
    </div>
    <div class="header__category">
      <ul>
        <li>После ремонта</li>
        <li>Генеральная уборка</li>
        <li>Регулярная уборка</li>
        <li>Мойка окон</li>
      </ul>
    </div>
    <div class="header__right">
      <div class="header__right-info">
        <span>+380 67 401 69 77</span>
        <div class="line" />
        <span>24/7</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const show = () => {}

    return { show }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>