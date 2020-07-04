<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-image
      :src="character.image"
      fit="cover"
      class="card-image"
      lazy
    />
    <div style="padding: 14px;">
      <h4>{{ character.name }}</h4>
      <el-divider />
      <div class="text-right">
        <MoreLink :id="character.id" />
      </div>
    </div>
  </el-card>
</template>
<script>
import MoreLink from '@/components/character/MoreLink.vue'
export default {
  components: {
    MoreLink
  },
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .card-image{
    width:100%;
    height:250px
  }
  .el-divider--horizontal{
    margin: 14px 0;
  }
  .text-right{
    text-align: right;
  }
</style>
