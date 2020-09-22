<template>
<v-main class="layout-main">
  <router-view />
</v-main>
</template>

<script>
export default {
  name: "LayoutMain",

  components: {},

  data: () => ({}),
};
</script>

<style lang="scss">
.layout-main {
  margin-top: 52px;
}
</style>
