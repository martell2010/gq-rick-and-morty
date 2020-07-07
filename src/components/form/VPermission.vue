<template>
  <div>
    <el-form-item
      prop="permission.showName"
    >
      <el-checkbox
        v-model="form.showName"
        label="Show name"
      />
    </el-form-item>
    <el-form-item
      prop="permission.showStatus"
    >
      <el-checkbox
        v-model="form.showStatus"
        label="Show status"
      />
    </el-form-item>
    <el-form-item
      prop="permission.showLocation"
    >
      <el-checkbox
        v-model="form.showLocation"
        label="Show location"
      />
    </el-form-item>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'parentData',
    event: 'input'
  },
  props: {
    parentData: {
      type: Object,
      required: true
    }
  },
  computed: {
    form: {
      get () {
        return this.parentData
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
