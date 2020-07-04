<template>
  <ApolloQuery
    v-slot="{ result: { data, error }, isLoading }"
    :variables="{ page, filter }"
    :query="require('@/graphql/query/characters.gql')"
  >
    <el-row :gutter="20">
      <el-col
        :lg="4"
        :md="8"
        :sm="12"
      >
        <VFilter @onFiltered="fetchData(1, $event)" />
      </el-col>

      <el-col
        v-loading.lock="isLoading"
        :lg="20"
        :md="16"
        :sm="12"
        class="wrapper"
      >
        <el-row
          v-if="data && data.characters"
          :gutter="20"
        >
          <el-col
            v-for="character in data.characters.results"
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
        <h4
          v-else-if="!isLoading"
          class="text-center"
        >
          No results
        </h4>
        <el-row
          v-if="data && data.characters"
          type="flex"
          justify="center"
        >
          <el-pagination
            background
            layout="prev, pager, next"
            :page-count="data.characters.info.pages"
            :current-page="page"
            @current-change="fetchData($event, filter)"
            @prev-click="fetchData($event, filter)"
            @next-click="fetchData($event, filter)"
          />
        </el-row>
        <el-backtop
          ref="backtop"
          target=".wrapper"
        />
      </el-col>
    </el-row>
  </ApolloQuery>
</template>

<script>
import CharacterCard from '@/components/character/CharacterCard.vue'
import VFilter from '@/components/VFilter.vue'
export default {
  name: 'CharactersPage',
  components: {
    CharacterCard,
    VFilter
  },
  data () {
    return {
      filter: {},
      page: 1
    }
  },
  methods: {
    async fetchData (page = 1, filter = {}) {
      this.filter = { ...filter }
      this.page = page
      this.$nextTick(() => {
        this.$refs.backtop.scrollToTop()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .wrapper{
    height: calc(100vh - 100px);
    overflow: auto;
    .el-col {
      margin-bottom: 20px;
    }
  }
</style>
