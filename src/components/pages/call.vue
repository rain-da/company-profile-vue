<template>
<div>
  <div id="call">
    <div style="position: absolute; top: 20%;left: 10%;font-size: 36px; font-style: oblique;color: #eef0f3">
        <span>联系我们</span><br>
        <span>CONTACT US</span>
      </div>
  </div>

  <br><br><br>

    <div class="call-mod">
      <div style="flex: 1">
        <br><br>
        <h1>欢迎您随时与我们取得联系</h1>
        <span style="background-color: #fed94a; color: #fed94a; width: 8px; height: 4px">占</span>
        <p style="color: #909399;">地址: 陕西省西安市高新区高新区科技二路启迪科技园G座</p>
        <p style="color: #909399;">电话: 139xxxx1234</p>
        <p style="color: #909399;">传真: xxxxxxx</p>
        <p style="color: #909399;">邮箱: 123@456.com</p>
      </div>
      <div style="padding: 20px;">
        <img src="../../assets/call/c1.png" alt="" style="width: 700px;height: 500px">
      </div>
    </div>

    <br><br><br>

  </div>
</template>

<script>
export default {};
</script>

<style>
#call {
  background-image: url("../../assets/background/call.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  z-index: 1;
  height: 374px !important;
}

.call-mod {
  position: relative;
  left: 20%;
  width: 60%;
  font-size: 16px;
  display: flex;
}
</style>