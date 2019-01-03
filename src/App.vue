<template>
  <div id="app">
    <ChangePicture/>
    <ScssColorCardTool/>
    <TimeLine/>
  </div>
</template>

<script>
import ChangePicture from './components/ChangePicture/index.vue';
import ScssColorCardTool from './components/ScssColorCardTool/index.vue';
import TimeLine from './components/TimeLine/index.vue';

export default {
  name: 'app',
  components: {
    ChangePicture,
    ScssColorCardTool,
    TimeLine,
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
  margin-top: 60px;
}
</style>
