<template>
  <el-table class="table" :data="episodes" max-height="500">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-table :data="props.row.characters">
          <el-table-column prop="image" width="60" label="Photo">
            <template slot-scope="scope">
              <el-avatar size="small" :src="scope.row.image" />
            </template>
          </el-table-column>
          <el-table-column prop="name" width="180" label="Name" />
          <el-table-column prop="status" width="90" label="Status" />
          <el-table-column label="" width="70">
            <template slot-scope="scope">
              <MoreLink :id="scope.row.id" />
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column prop="episode" width="180" label="Episode" />
    <el-table-column prop="air_date" label="Air date" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="created" label="Created" />
  </el-table>
</template>
<script>
import MoreLink from "@/components/character/MoreLink.vue";
export default {
  components: {
    MoreLink,
  },
  props: {
    episodes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.table {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
