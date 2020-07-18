<!--登录页面 -->
<template>
  <div class="d-login x-ten-w xy-center">
    <div class="login-box y-five-h x-three-w">
      <div class="tab x-ten-w xy-center">
        <span class="tab-item x-center hand" :class="{ active: isActive }" @click="changeTab">学生登录</span>
        <span class="tab-item x-center hand" :class="{ active: !isActive }" @click="changeTab">管理员登录</span>
      </div>

      <div class="tab-box x-ten-w" v-show="show && selected === 0">
        <div class="xy-ten-two-box xy-center">
          <i class="iconfont">&#xe659;</i>
          <input type="text" class="no-input x-seven-w" v-model="userDto.mobile" placeholder="请输入学生账号" />
        </div>
        <div class="xy-ten-two-box xy-center">
          <i class="iconfont">&#xe640;</i>
          <input type="password" class="no-input x-seven-w" v-model="userDto.password" placeholder="请输入密码" />
        </div>

        <div class="btn x-ten-w xy-center">
          <div class="buttonl y-ten-h x-five-w two-cricle hand xy-center" value="登录" @click="signIn(userDto)">
            登录
          </div>
        </div>
      </div>

      <div class="tab-box x-ten-w" v-show="show && selected === 1">
        <div class="xy-ten-two-box xy-center">
          <i class="iconfont">&#xe659;</i>
          <input type="text" class="no-input x-seven-w" v-model="userDto.mobile" placeholder="请输入管理员账号" />
        </div>
        <div class="xy-eight-two-box xy-center mar">
          <i class="iconfont">&#xe640;</i>
          <input type="text" class="no-input x-five-w" v-model="userDto.code" placeholder="请输入验证码" />
          <button class="code">获取验证码</button>
        </div>

        <div class="btn xy-center">
          <div class="buttonl y-ten-h x-five-w two-cricle hand xy-center">登录</div>
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
  height: 640px;
  /* background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2R4Zz4wSSXybnhNL9fJD3UZehLf_9h7FYD_0CuX15tW0lvJCG);
  background-size: calc(100%);
  background-attachment: fixed;
  position: relative; */
}
.login-box {
  border-radius: 5px;
  box-shadow: 5px 1px 5px 5px #dedfdc;
}
input {
  height: 63%;
  border-bottom: 1px solid gray;
  margin-left: 1%;
}
.tab {
  height: 15%;
  border-bottom: 2px solid rgb(242, 242, 247);
}
.tab-item {
  width: 75%;
}
.tab-box {
  margin-top: 5%;
  height: 85%;
}
.btn {
  margin-top: 10%;
  height: 12%;
}
.buttonl {
  background-color: #6495ed;
}
.tab span {
  font-size: 17px;
}
.code {
  width: 50%;
  height: 60%;
  background-color: #fff;
  color: #6495ed;
  margin: 0;
  padding: 0;
  border: 1px solid grey;
  border-radius: 20px;
  outline: none;
}
</style>
