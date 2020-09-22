<template>
  <v-container class="skill-inventory" fluid>
    <h1>
      <v-icon left>mdi-label</v-icon>기술명세서 (Skill Inventory)
    </h1>
    <div v-if="getSkillinventory && loaded">
      <v-card outlined v-if="getSkillinventory" class="skill-inventory-card">
        <v-card-text>
          <div class="skill-inventory-table">
            <table>
              <colgroup>
                <col :style="{width: '200px'}" />
                <col :style="{width: '150px'}" />
                <col :style="{width: '140px'}" />
                <col :style="{width: '140px'}" />
                <col :style="{width: '70px'}" />
                <col :style="{width: '70px'}" />
                <col :style="{width: '150px'}" />
                <col :style="{width: '70px'}" />
                <col :style="{width: '70px'}" />
                <col :style="{width: '100px'}" />
                <col :style="{width: '*'}" />
              </colgroup>
              <thead>
                <tr>
                  <th class="is-left" rowspan="2">프로젝트명</th>
                  <th rowspan="2">참여기간</th>
                  <th rowspan="2">고객사</th>
                  <th rowspan="2">근무회사</th>
                  <th colspan="6">개발환경</th>
                  <th class="is-left" rowspan="2">수행업무</th>
                </tr>
                <tr>
                  <th>기종</th>
                  <th>OS</th>
                  <th>언어</th>
                  <th>Tool</th>
                  <th>통신</th>
                  <th>Framework</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item , i) in getSkillinventory" :key="i">
                  <td class="is-left">{{item.title}}</td>
                  <td>{{item.date}}</td>
                  <td>{{item.workFor}}</td>
                  <td>{{item.workTo}}</td>
                  <td>{{item.developmentenvironment.type}}</td>
                  <td>{{item.developmentenvironment.os}}</td>
                  <td>{{item.developmentenvironment.lang}}</td>
                  <td>{{item.developmentenvironment.tool}}</td>
                  <td>{{item.developmentenvironment.protocol}}</td>
                  <td>{{item.developmentenvironment.framework}}</td>
                  <td class="is-left">{{item.todo}}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
      skillInventoryHeader: [
        {
          text: "프로젝트명",
          align: "start",
          value: "title",
        },
        {
          text: "참여기간",
          align: "start",
          value: "date",
        },
        {
          text: "고객사",
          align: "start",
          value: "workFor",
        },
        {
          text: "근무회사",
          align: "start",
          value: "workTo",
        },
        {
          text: "기종",
          align: "start",
          value: "developmentenvironment.type",
        },
        {
          text: "OS",
          align: "start",
          value: "developmentenvironment.os",
        },
        {
          text: "언어",
          align: "start",
          value: "developmentenvironment.lang",
        },
        {
          text: "Tool",
          align: "start",
          value: "developmentenvironment.tool",
        },
        {
          text: "통신",
          align: "start",
          value: "developmentenvironment.protocol",
        },
        {
          text: "Framework",
          align: "start",
          value: "developmentenvironment.framework",
        },
        {
          text: "수행업무",
          align: "start",
          value: "todo",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getSkillinventory"]),
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      if (this.getSkillinventory != null) {
        this.loaded = true;
      } else {
        baseAPI
          .skillInventory()
          .then((response) => {
            this.$store.dispatch("setSkillInventory", response.data);
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
.skill-inventory {
  h1 {
    display: inline-flex;
    margin-bottom: 15px;
    font-weight: normal;
    font-size: 24px;
  }
  table {
    border: 1px solid #dedfdf;
    border-bottom: none;
    border-right: none;

    border-collapse: collapse;
    table-layout: fixed;
    th,
    td {
      padding: 5px 10px !important;
      text-align: center;
      border-bottom: 1px solid #dedfdf;
      border-right: 1px solid #dedfdf;
      word-break: keep-all;
    }
    th {
      font-size: 14px;
    }
    td {
      vertical-align: top;
    }
    .is-left {
      text-align: left;
    }
  }
}
</style>
