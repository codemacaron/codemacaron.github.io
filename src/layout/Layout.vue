<template>
<v-app id="inspire">
  <LayoutNav :open="drawer" />
  <LayoutHeader app color="indigo" dark @openNav="openNav()" />
  <LayoutMain />
  <LayoutFooter />
</v-app>
</template>

<script>
import LayoutNav from "./LayoutNav";
import LayoutHeader from "./LayoutHeader";
import LayoutMain from "./LayoutMain";
import LayoutFooter from "./LayoutFooter";

export default {
  name: "Layout",

  components: {
    LayoutNav,
    LayoutHeader,
    LayoutMain,
    LayoutFooter,
  },

  data: () => ({
    drawer: false,
  }),
  methods: {
    openNav() {
      if (this.drawer === false) {
        this.drawer = true;
      } else {
        this.drawer = false;
      }
    },
  },
};
</script>
