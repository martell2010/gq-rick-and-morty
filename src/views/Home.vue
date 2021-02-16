<template>
  <el-row :gutter="20">
    <el-col :lg="4" :md="8" :sm="12">
      <VFilter @onFiltered="fetchData(1, $event)" />
    </el-col>
    <el-col v-loading.lock="loading" :lg="20" :md="16" :sm="12" class="wrapper">
      <el-row :gutter="20">
        <el-col
          v-for="character in characters"
          :key="character.id"
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6"
          :xl="6"
        >
          <CharacterCard :character="character" />
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-pagination
          v-show="pagination.pages"
          background
          layout="prev, pager, next"
          :page-count="pagination.pages"
          :current-page="pagination.page"
          @current-change="fetchData($event, filter)"
          @prev-click="fetchData($event, filter)"
          @next-click="fetchData($event, filter)"
        />
        <el-backtop ref="backtop" target=".wrapper" />
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { GraphQLApi } from "@/api/main";
import CharacterCard from "@/components/character/CharacterCard.vue";
import VFilter from "@/components/VFilter.vue";
import { charactersQuery } from "@/graphql/query/characters.gql";
import { print } from "graphql/language/printer";
import { apiErrorHandler } from "@/utils/helpers/apiErrorHandler";
export default {
  name: "CharactersPage",
  components: {
    CharacterCard,
    VFilter,
  },
  data() {
    return {
      characters: [],
      filter: {},
      pagination: {
        page: 1,
      },
      loading: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData(page = 1, filter = {}) {
      this.filter = filter;
      try {
        this.loading = true;
        const { data } = await GraphQLApi.request({
          query: print(charactersQuery),
          variables: {
            page,
            filter,
          },
        });

        if (data.errors) {
          apiErrorHandler.call(this, data.errors);
          this.characters = [];
          this.pagination = { page: 1 };
          return false;
        }

        const { results, info } = data.data.characters;
        this.characters = results;
        this.pagination = { ...info, page };
        this.$refs.backtop.scrollToTop();
      } catch (error) {
        console.log("error", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  height: calc(100vh - 100px);
  overflow: auto;
  .el-col {
    margin-bottom: 20px;
  }
}
</style>
