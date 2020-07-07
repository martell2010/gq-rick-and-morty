<template>
  <div>
    <el-form-item
      label="City"
      prop="location.city"
    >
      <el-input v-model="form.city" />
    </el-form-item>
    <el-form-item
      label="Street"
      prop="location.street"
    >
      <el-input v-model="form.street" />
    </el-form-item>
    <el-form-item
      label="Zip"
      prop="location.zip"
    >
      <el-input v-model.number="form.zip" />
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
