<!-- 个人信息页面 -->
<template>
  <div class="container">
    <div class="x-seven-w mar">
      <div class="x-large-w large-s grey-border padding-bot">个人信息</div>
      <div class="xy-ten-two-box df y-center grey-border">
        <div class="my margin">头像：</div>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          class="avatar cricle"
        />
      </div>
      <div class="xy-ten-two-box df y-center grey-border">
        <div class="my margin">昵称：</div>
        <div>lalalaal</div>
      </div>
      <div class="xy-ten-two-box df y-center grey-border">
        <div class="my margin">学号：</div>
        <div>102343130</div>
      </div>
      <div class="xy-ten-two-box df y-center grey-border">
        <div class="my margin">账号：</div>
        <div>lalalaal</div>
      </div>
      <div class="xy-ten-two-box df y-center grey-border">
        <div class="my margin">密码：</div>
        <div>*************</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    prop: {
      type: String,
      required: false
    }
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    // type your function
  },
  created() {},
  mounted() {},
  updated() {},
  destroyed() {},
  filters: {}
}
</script>

<style scoped lang="scss"></style>
