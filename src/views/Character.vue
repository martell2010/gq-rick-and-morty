<template>
  <el-row v-loading.lock="$apollo.loading">
    <el-page-header
      title="To list"
      :content="character.name"
      @back="goBack"
    />
    <el-divider />
    <el-row :gutter="20">
      <el-col
        :xl="4"
        :lg="6"
        :md="12"
        :xs="24"
      >
        <el-image
          :src="character.image"
          fit="cover"
          class="card-image"
        />
      </el-col>
      <el-col
        :xl="20"
        :lg="18"
        :md="12"
        :xs="24"
      >
        <table>
          <tr>
            <td>Name:</td>
            <td>{{ character.name }}</td>
          </tr>
          <tr>
            <td>Species:</td>
            <td>{{ character.species }}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>{{ character.status }}</td>
          </tr>
          <tr>
            <td>Type:</td>
            <td>{{ character.type }}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{{ character.gender }}</td>
          </tr>
          <tr>
            <td>Created:</td>
            <td>{{ character.created }}</td>
          </tr>
        </table>
        <el-divider />
      </el-col>
    </el-row>
    <EpisodesTable :episodes="character.episode" />
  </el-row>
</template>
<script>
import EpisodesTable from '@/components/character/EpisodesTable.vue'
import { characterQuery } from '@/graphql/query/character.gql'

export default {
  components: {
    EpisodesTable
  },
  data () {
    return {
      character: {},
      id: null,
      loading: false
    }
  },
  watch: {
    '$route.params.id': {
      handler (newId) {
        this.id = newId
      },
      immediate: true
    }
  },
  apollo: {
    character: {
      query: characterQuery,
      variables () {
        return { id: this.id }
      },
      error (error) {
        console.log('error', { error })
        this.goBack()
      }
    }
  },
  methods: {
    goBack () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
