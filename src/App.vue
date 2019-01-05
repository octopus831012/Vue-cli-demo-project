<template>
  <div id="app">

  <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
    <a class="navbar-brand" href="#">庭庭作品集</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#" @click="changeComponent('ScssColorCardTool')">Sass 變數色卡網頁工具</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="changeComponent('ChangePicture')">圖片輪播</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="changeComponent('TimeLine')">時間年表</a>
      </li>
    </ul>
  </nav>

    <ScssColorCardTool v-show="displayScssColorCardTool"/>
    <ChangePicture v-show="displayChangePicture"/>
    <TimeLine v-show="displayTimeLine"/>
  </div>
</template>

<script>
import ScssColorCardTool from './components/ScssColorCardTool/index.vue';
import ChangePicture from './components/ChangePicture/index.vue';
import TimeLine from './components/TimeLine/index.vue';

export default {
  name: 'app',
  components: {
    ScssColorCardTool,
    ChangePicture,
    TimeLine,
  },
  data() {
    return {
      displayScssColorCardTool: true,
      displayChangePicture: false,
      displayTimeLine: false,
    };
  },
  methods: {
    changeComponent(componentName) {
      this.resetDisplay();
      this[`display${componentName}`] = true;
    },
    resetDisplay() {
      this.displayScssColorCardTool = false;
      this.displayChangePicture = false;
      this.displayTimeLine = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;

  a {
    padding-right: 10px;
    color: white;
  }
}
</style>
