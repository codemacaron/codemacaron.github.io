<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item-group>
        <v-list-item v-for="(li, i) in links" :key="i" :to="{name: li.linkto}">
          <v-list-item-action>
            <v-icon>{{li.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <span class="uppercase">{{li.text}}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["open"],
  name: "LayoutNav",
  watch: {
    open: function (val) {
      this.drawer = val;
    },
  },
  data: () => ({
    drawer: false,
    links: [
      {
        linkto: "project",
        text: "프로젝트",
        icon: "mdi-label",
      },
      {
        linkto: "resume",
        text: "이력서",
        icon: "mdi-label",
      },
      {
        linkto: "skillInventory",
        text: "기술명세서",
        icon: "mdi-label",
      },
    ],
  }),
};
</script>

<style lang="scss">
.uppercase {
  text-transform: uppercase;
}
</style>