<template>
  <div class="layout-default">
      <div class="layout-default__container">
        <nuxt />
      </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Default',
  setup() {}
})
</script>

<style lang="scss" scoped>
.layout-default {
  &__container {
    position: relative;
  }
}
</style>
