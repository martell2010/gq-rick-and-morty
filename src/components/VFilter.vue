<template>
  <el-form
    ref="filterForm"
    :model="form"
  >
    <h3>Filter:</h3>
    <el-form-item prop="name">
      <el-input
        v-model="form.name"
        placeholder="Search by name"
        class="w-100"
        clearable
      />
    </el-form-item>
    <el-form-item prop="status">
      <el-select
        v-model="form.status"
        clearable
        placeholder="Status"
        class="w-100"
      >
        <el-option
          v-for="{value, label} in statusesList"
          :key="value"
          :label="label"
          :value="value"
        />
      </el-select>
    </el-form-item>
    <el-form-item prop="species">
      <el-select
        v-model="form.species"
        clearable
        placeholder="Species"
        class="w-100"
      >
        <el-option
          v-for="{value, label} in speciesList"
          :key="value"
          :label="label"
          :value="value"
        />
      </el-select>
    </el-form-item>
    <el-form-item prop="gender">
      <el-select
        v-model="form.gender"
        clearable
        placeholder="Gender"
        class="w-100"
      >
        <el-option
          v-for="{value, label} in gendersList"
          :key="value"
          :label="label"
          :value="value"
        />
      </el-select>
    </el-form-item>
    <el-button
      type="danger"
      native-type="button"
      plain
      @click="resetForm"
    >
      Reset
    </el-button>
    <el-button
      type="success"
      native-type="button"
      plain
      @click="sendForm"
    >
      Apply
    </el-button>
  </el-form>
</template>
<script>
import { SPECIES, STATUSES, GENDERS } from '@/utils/constants'
export default {
  data () {
    return {
      form: {
        name: '',
        status: '',
        species: '',
        gender: ''
      },
      speciesList: SPECIES,
      statusesList: STATUSES,
      gendersList: GENDERS
    }
  },
  methods: {
    sendForm () {
      this.$emit('onFiltered', this.form)
    },
    resetForm () {
      this.$refs.filterForm.resetFields()
      this.$nextTick(() => {
        this.sendForm()
      })
    }
  }
}
</script>
<style lang="scss">
  .w-100{
    width: 100%;
  }
</style>
