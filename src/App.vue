<template>
    <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
    <router-view />
</template>

<style lang="scss">
// @import url("./utils/sass/custom.sass");

@import url('./utils/sass/icon.sass');
* {
    padding: 0;
    margin: 0;
}
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    position: relative;
    #app {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    div {
        box-sizing: border-box;
    }
    img,
    image {
        display: block;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #333333;
    }
}
.elMenu {
    background-color: #304156 !important;
}
.el-submenu.is-active .el-submenu__title,li.el-menu-item .is-active {
    background-color: #263444 !important;
}
.el-menu {
    background-color: #202C39 !important;
}

.el-submenu__title:hover,
.el-menu-item:hover,
.el-menu-item:focus,
li.el-menu-item.is-active:hover {
    background-color: rgba(43, 47, 58, 0.7) !important;
}
</style>
