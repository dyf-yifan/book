<!--登录页面 -->
<template>
  <div class="d-login center">
    <div class="login-box">
      <div class="tab center">
        <span class="tab-item" :class="{ active: isActive }" @click="changeTab">学生登录</span>
        <span class="tab-item" :class="{ active: !isActive }" @click="changeTab">管理员登录</span>
      </div>

      <div class="tab-box" v-show="show && selected === 0">
        <div class="inputl center">
          <i class="iconfont">&#xe659;</i> <input type="text" v-model="userDto.mobile" placeholder="请输入学生账号" />
        </div>
        <div class="pass center">
          <i class="iconfont">&#xe640;</i>
          <input type="password" v-model="userDto.password" placeholder="请输入密码" />
        </div>

        <div class="btn center">
          <div class="buttonl center" value="登录" @click="signIn(userDto)">登录</div>
        </div>
      </div>

      <div class="tab-box" v-show="show && selected === 1">
        <div class="inputl center">
          <i class="iconfont">&#xe659;</i> <input type="text" v-model="userDto.mobile" placeholder="请输入管理员账号" />
        </div>
        <div class="pass center">
          <i class="iconfont">&#xe640;</i>
          <input type="password" v-model="userDto.password" placeholder="请输入密码" />
        </div>
        <div class="btn center">
          <div class="buttonl center">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      show: true,
      selected: 0,
      userDto: {
        mobile: '',
        password: '',
        code: ''
      },
      token: ''
    }
  },
  methods: {
    changeTab: function() {
      this.isActive = !this.isActive
      this.selected = this.selected == 0 ? 1 : 0
    }
  }
}
</script>

<style scoped>
.d-login {
  width: 100%;
  height: 640px;
  /* background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2R4Zz4wSSXybnhNL9fJD3UZehLf_9h7FYD_0CuX15tW0lvJCG);
  background-size: calc(100%);
  background-attachment: fixed;
  position: relative; */
}
.login-box {
  width: 30%;
  height: 50%;
  border-radius: 5px;
  /* border: 2px solid rgba(157, 188, 193, 0.8); */
  box-shadow: 5px 1px 5px 5px #dedfdc;
}
.inputl {
  width: 100%;
  height: 20%;
}
.pass {
  width: 100%;
  height: 20%;
}
input {
  width: 70%;
  height: 63%;
  border: none;
  border-bottom: 1px solid gray;
  margin-left: 1%;
  outline: none;
}
.tab {
  width: 100%;
  height: 15%;
  border-bottom: 2px solid rgb(248, 248, 252);
}
.tab-item {
  display: flex;
  justify-content: center;
  width: 75%;
  cursor: pointer;
}
.tab-box {
  margin-top: 5%;
  width: 100%;
  height: 85%;
}
.btn {
  margin-top: 10%;
  width: 100%;
  height: 12%;
}
.buttonl {
  width: 50%;
  height: 100%;
  background-color: #6495ed;
  border-radius: 20px;
  cursor: pointer;
}
.tab span {
  font-size: 17px;
}

@font-face {
  font-family: 'iconfont'; /* project id 1473594 */
  src: url('//at.alicdn.com/t/font_1473594_te3ykiowr8.eot');
  src: url('//at.alicdn.com/t/font_1473594_te3ykiowr8.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1473594_te3ykiowr8.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1473594_te3ykiowr8.woff') format('woff'),
    url('//at.alicdn.com/t/font_1473594_te3ykiowr8.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1473594_te3ykiowr8.svg#iconfont') format('svg');
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 19px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
