<template>
  <div class="text-sm mt-1" v-for="error of errors" :key="error.$uid">
    <span class="error-msg text-red-500 font-semibold">{{
      error.$message
    }}</span>
  </div>
</template>

<script>
export default {
  name: "ErrorsList",
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
};
</script>
