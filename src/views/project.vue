<template>
  <v-container class="project" fluid>
    <h1>
      <v-icon left>mdi-label</v-icon>프로젝트 (Project)
    </h1>
    <div v-if="loaded">
      <v-card outlined v-for="(item, index) in getProject" :key="index">
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
        <v-card-text>
          <ul>
            <li>
              <h2>종류</h2>
              <div>{{ item.kind }}</div>
            </li>
            <li>
              <h2>작업기간</h2>
              <div>{{ item.date }}</div>
            </li>
            <li>
              <h2>참여도</h2>
              <div>{{ item.work }}</div>
            </li>
            <li>
              <h2>상세</h2>
              <div>
                <v-chip
                  label
                  color="primary"
                  outlined
                  pill
                  v-for="(li, i) in item.usage"
                  :key="i"
                  small
                >{{ li }}</v-chip>
              </div>
            </li>
            <li>
              <h2>설명</h2>
              <div>
                <ul>
                  <li v-for="(li, i) in item.description" :key="i">{{ li }}</li>
                </ul>
              </div>
            </li>
            <li v-if="item.worktype">
              <h2>근무형태</h2>
              <div>{{ item.worktype }}</div>
            </li>
            <li v-if="item.link">
              <h2>사이트</h2>
              <div>
                <span v-for="(li, i) in item.link" :key="i">
                  <a :href="li">{{li}}</a>
                </span>
              </div>
            </li>
          </ul>
        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
    </div>

    <v-overlay :value="!loaded">
      <v-progress-circular indeterminate color="primary" :size="50" :width="7" />
    </v-overlay>
  </v-container>
</template>

<script>
import { baseAPI } from "../api";
import { mapGetters } from "vuex";
export default {
  name: "project",
  data() {
    return {
      loaded: false,
      data: null,
    };
  },
  computed: {
    ...mapGetters(["getProject"]),
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.getProject) {
        this.loaded = true;
      } else {
        baseAPI
          .project()
          .then((response) => {
            this.$store.dispatch("setProject", response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(() => {
            this.loaded = true;
          });
      }
    },
  },
};
</script>

<style lang="scss" scope>
$title: 100px;
$text: calc(100% - #{$title});
.project {
  h1 {
    display: inline-flex;
    margin-bottom: 15px;
    font-weight: normal;
    font-size: 24px;
  }

  .v-card {
    margin-bottom: 20px;

    &__title {
      font-size: 1.45rem;
    }

    &__subtitle {
      font-size: 16px;
      color: #5a5858 !important;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ul {
    padding-left: 0;
    li {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #dedfdf;

      &:last-of-type {
        padding-bottom: 0;
        margin-bottom: 0;
        border-bottom: 0;
      }
      > h2 {
        width: $title;
        font-size: 14px;
      }

      > div {
        width: $text;
        span {
          margin-right: 20px;
          &:last-of-type {
            margin-right: 0;
          }
        }
        ul > li {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>
