<template>
  <router-link :to="{ name: 'Character', params: { id: id } }">
    <slot>
      <el-button type="primary" plain :size="size">{{ title }}</el-button>
    </slot>
  </router-link>
</template>
<script>
export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    title: {
      type: String,
      default: "More",
    },
    size: {
      type: String,
      default: "small",
    },
  },
};
</script>
