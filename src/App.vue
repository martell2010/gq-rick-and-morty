<template>
  <div id="app">
    <el-container class="main-layout">
      <el-container>
        <el-header>
          <span>GraphQL</span>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.main-layout {
  height: 100vh;
  .el-menu {
    min-height: 100%;
  }
}
.el-header {
  background-color: #333;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
