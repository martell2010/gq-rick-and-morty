<template>
  <div>
    <el-form-item
      label="Name"
      prop="user.name"
    >
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item
      label="Email"
      prop="user.email"
    >
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item
      label="Birthday"
      prop="user.birthday"
    >
      <el-date-picker
        v-model="form.birthday"
        :default-value="new Date()"
        type="date"
        placeholder="Pick a day"
      />
    </el-form-item>
    <el-form-item
      label="Nikame"
      prop="user.nikname"
    >
      <el-input v-model="form.nikname" />
    </el-form-item>
    <el-form-item
      label="Status"
      prop="user.status"
    >
      <el-select
        v-model="form.status"
        placeholder="Select"
      >
        <el-option
          v-for="({value, label}) in statusList"
          :key="value"
          :label="label"
          :value="value"
        />
      </el-select>
    </el-form-item>
    <el-form-item
      label="Gender"
      prop="user.gender"
    >
      <el-select
        v-model="form.gender"
        placeholder="Select"
      >
        <el-option
          v-for="({value, label}) in genderList"
          :key="value"
          :label="label"
          :value="value"
        />
      </el-select>
    </el-form-item>
  </div>
</template>
<script>
import { STATUSES, GENDERS } from '@/utils/constants'
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
  data () {
    return {
      statusList: STATUSES,
      genderList: GENDERS
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
