<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="openNav()"></v-app-bar-nav-icon>
    <v-toolbar-title>Serom's Resume</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "LayoutHeader",
  methods: {
    openNav() {
      this.$emit("openNav");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-app-bar {
  box-shadow: none !important;
}
</style>
