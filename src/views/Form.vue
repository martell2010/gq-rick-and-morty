<template>
  <el-form
    ref="form"
    :model="form"
    :rules="rules"
  >
    <VUser v-model="form.user" />
    <VLocation v-model="form.location" />
    <VPermission v-model="form.permission" />
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
      plain
      @click="sendForm"
    >
      Submit
    </el-button>
  </el-form>
</template>
<script>
import VUser from '@/components/form/VUser'
import VLocation from '@/components/form/VLocation'
import VPermission from '@/components/form/VPermission'
export default {
  components: {
    VUser,
    VLocation,
    VPermission
  },
  data () {
    return {
      form: {
        user: {
          name: '',
          birthday: 0,
          nikname: '',
          status: '',
          gender: ''
        },
        location: {
          city: '',
          street: '',
          zip: ''
        },
        permission: {
          showName: true,
          showStatus: false,
          showLocation: true
        }
      },
      rules: {
        'user.name': [
          { required: true },
          { min: 3, max: 35, message: 'Length should be 3 to 35' }
        ],
        'user.email': [
          { required: true },
          { type: 'email', message: 'Field must be email' }
        ],
        'user.birthday': [
          { required: true, type: 'date' }
        ],
        'user.nikname': [
          { required: true }
        ],
        'user.status': [
          { required: true }
        ],
        'user.gender': [
          { required: true }
        ],
        'location.city': [
          { required: true }
        ],
        'location.street': [
          { required: true }
        ],
        'location.zip': [
          { required: false },
          { len: 6 },
          { type: 'integer' }
        ]
      }
    }
  },
  methods: {
    async sendForm () {
      this.$refs.form.validate((valid) => {
        if (!valid) return false
        console.log('Form submitted', this.form)
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
    }
  }
}
</script>
<style>
  .el-form-item__label{
    display: block;
    text-align: left;
    float: none;
  }
</style>
