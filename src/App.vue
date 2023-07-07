<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-header style="height: 80px">
        <div style="position: relative;top: 0px;width: 100%;height: 80px;">
          <img src="./assets/logo.png" alt="LOGO" style="position: relative;width: 108px;height: 40px;">
          <el-row style="position: absolute;top: 15px;right: 0%;width: 600px;height: 40px;">
            <el-button type="primary" @click="mainButton" round=ture
              style="background-color: #303133;border-color: #303133" plain>首页</el-button>
            <el-button type="primary" @click="aboutButton" round=ture
              style="background-color: #303133;border-color: #303133" plain>关于我们</el-button>
            <el-button type="primary" @click="serviceButton" round=ture
              style="background-color: #303133;border-color: #303133" plain>服务范围</el-button>
            <el-button type="primary" @click="newsButton" round=ture
              style="background-color: #303133;border-color: #303133" plain>新闻资讯</el-button>
            <el-button type="primary" @click="callButton" round=ture
              style="background-color: #303133;border-color: #303133" plain>联系我们</el-button>
          </el-row>
        </div>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer style="height: 180px">
        <div style="position: absolute;width: 100%;height: 180px;">
          <img src="./assets/logo.png" alt="LOGO" style="position: absolute;width: 126px;height: 47px;">
          <el-row style="position: absolute;left: 40%;width: 600px;height: 180px;">
            <el-col style="position: absolute;top: 30px;left: 2px;height: 25px;"><i class="el-icon-location-outline" style="color: #909399">
                地址：陕西省西安市高新区高新区科技二路启迪科技园G座</i></el-col>
            <el-col style="position: absolute;top: 60px;left: 2px;height: 25px;"><i class="el-icon-phone-outline" style="color: #909399">
                电话：139xxxx1234</i></el-col>
            <el-col style="position: absolute;top: 90px;left: 2px;height: 25px;"><i class="el-icon-printer" style="color: #909399">
                传真：123456</i></el-col>
            <el-col style="position: absolute;top: 120px;left: 2px;height: 25px;"><i class="el-icon-message" style="color: #909399">
                邮箱：123456@789.com</i></el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Simple Component",
      message: "This is a simple Vue component",
    };
  },
  methods: {
    mainButton() {
      this.$router.push("/").catch((err) => {
        if (err.name !== "NavigationDuplicated") {
          throw err;
        }
      });
    },
    aboutButton() {
      this.$router.push("/about").catch((err) => {
        if (err.name !== "NavigationDuplicated") {
          throw err;
        }
      });
    },
    serviceButton() {
      this.$router.push("/service").catch((err) => {
        if (err.name !== "NavigationDuplicated") {
          throw err;
        }
      });
    },
    newsButton() {
      this.$router.push("/news").catch((err) => {
        if (err.name !== "NavigationDuplicated") {
          throw err;
        }
      });
    },
    callButton() {
      this.$router.push("/call").catch((err) => {
        if (err.name !== "NavigationDuplicated") {
          throw err;
        }
      });
    },
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

.el-header,
.el-footer {
  background-color: #303133;
  color: #eef0f3;
  /*text-align: center;*/
  line-height: 60px;
}

.el-main {
  background-color: #eef0f3;
  margin: 0px;
  padding: 0px;
}

.el-row {
  margin-bottom: 2px;
}
.el-col {
  border-radius: 4px;
}
</style>