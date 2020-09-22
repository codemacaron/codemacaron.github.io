<template>
  <v-container class="resume" fluid>
    <h1>
      <v-icon left>mdi-label</v-icon>이력서 (Resume)
    </h1>
    <div v-if="getResume && loaded">
      <!-- <v-card outlined v-for="(item, index) in getResume" :key="index"> -->
      <v-card outlined v-if="getResume.personInfo">
        <v-card-title>{{getResume.personInfo.title}}</v-card-title>
        <v-card-text>
          <ul>
            <li v-if="getResume.personInfo.info.name">
              <h2>이름</h2>
              <div>{{ getResume.personInfo.info.name }}</div>
            </li>
            <li v-if="getResume.personInfo.info.birth">
              <h2>생년월일</h2>
              <div>{{ getResume.personInfo.info.birth }}</div>
            </li>
            <li v-if="getResume.personInfo.info.email">
              <h2>이메일</h2>
              <div>{{ getResume.personInfo.info.email }}</div>
            </li>
            <li v-if="getResume.personInfo.info.phone">
              <h2>연락번호</h2>
              <div>{{ getResume.personInfo.info.phone }}</div>
            </li>
            <li v-if="getResume.personInfo.info.address">
              <h2>주소</h2>
              <div>{{ getResume.personInfo.info.address }}</div>
            </li>
          </ul>
        </v-card-text>
      </v-card>

      <v-card outlined v-if="getResume.schoolInfo">
        <v-card-title>{{getResume.schoolInfo.title}}</v-card-title>
        <v-card-text>
          <!-- <pre>{{getResume.schoolInfo.info}}</pre> -->
          <v-data-table
            :headers="schoolInfoHeader"
            :items="getResume.schoolInfo.info"
            hide-default-footer
            disable-sort
            :items-per-page="-1"
            dense
            class="custom-table"
          />
        </v-card-text>
      </v-card>

      <v-card outlined v-if="getResume.studyInfo">
        <v-card-title>{{getResume.studyInfo.title}}</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="studyInfoHeader"
            :items="getResume.studyInfo.info"
            hide-default-footer
            disable-sort
            :items-per-page="-1"
            dense
            class="custom-table"
          >
            <template v-slot:item.skill="{ item }">
              <div class="skills">
                <v-chip
                  label
                  color="primary"
                  outlined
                  pill
                  v-for="(li, i) in item.skill"
                  :key="i"
                  small
                  class="mr10"
                >{{ li }}</v-chip>
              </div>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>

      <v-card outlined v-if="getResume.skillInfo">
        <v-card-title>{{getResume.skillInfo.title}}</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="skillInfoHeader"
            :items="getResume.skillInfo.info"
            hide-default-footer
            disable-sort
            :items-per-page="-1"
            dense
            class="custom-table"
          >
            <template v-slot:item.level="{ item }">
              <v-chip label color="primary" outlined pill small class="mr10">{{ item.level }}</v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>

      <v-card outlined v-if="getResume.workInfo">
        <v-card-title>{{getResume.workInfo.title}}</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="workInfoHeader"
            :items="getResume.workInfo.info"
            hide-default-footer
            disable-sort
            :items-per-page="-1"
            dense
            class="custom-table"
          />
        </v-card-text>
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
  name: "resume",
  data() {
    return {
      loaded: false,
      schoolInfoHeader: [
        {
          text: "년/월",
          align: "start",
          value: "date",
        },
        {
          text: "학교명",
          align: "start",
          value: "school",
        },
        {
          text: "학과",
          align: "start",
          value: "major",
        },
        {
          text: "졸업구분",
          align: "start",
          value: "graduate",
        },
      ],
      studyInfoHeader: [
        {
          text: "년/월",
          align: "start",
          value: "date",
        },
        {
          text: "학원명",
          align: "start",
          value: "school",
        },
        {
          text: "수업명",
          align: "start",
          value: "detail",
        },
        {
          text: "스킬",
          align: "start",
          value: "skill",
        },
      ],
      skillInfoHeader: [
        {
          text: "스킬",
          align: "start",
          value: "skill",
        },
        {
          text: "레벨",
          align: "start",
          value: "level",
        },
        {
          text: "상세내용",
          align: "start",
          value: "detail",
        },
      ],
      workInfoHeader: [
        {
          text: "회사",
          align: "start",
          value: "work",
        },
        {
          text: "근무형태",
          align: "start",
          value: "worktype",
        },
        {
          text: "퇴사사유",
          align: "start",
          value: "reason",
        },
        {
          text: "참여기간",
          align: "start",
          value: "date",
        },
        {
          text: "프로젝트명",
          align: "start",
          value: "project",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getResume"]),
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.getResume != null) {
        this.loaded = true;
      } else {
        baseAPI
          .resume()
          .then((response) => {
            this.$store.dispatch("setResume", response.data);
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

.resume {
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

  .custom {
    &-table {
      th,
      td {
        padding: 15px 16px !important;
      }
      .v-data-table-header {
        th {
          font-size: 14px;
        }
      }
    }
  }
  .skills {
    > * + * {
      margin-top: 4px;
    }
  }
}
</style>
