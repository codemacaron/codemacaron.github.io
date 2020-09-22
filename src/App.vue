<template>
  <div>
    <Layout />
  </div>
</template>

<script>
import Layout from "./layout/Layout";

export default {
  name: "App",

  components: {
    Layout,
  },
};
</script>

<style lang="scss" >
/* global settings */
@import "./assets/css/index.scss";
</style>