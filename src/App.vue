<template>
  <div id="app">
    <div class="wrapper">

      <div class="wrapper__item">
        <h2 class="wrapper__title">Unchecked</h2>
        <Checkbox id="checkbox-1" label-text="Disabled" disabled="disabled" />
        <Checkbox id="checkbox-2" label-text="Enabled"  />
      </div>

      <div>
        <h2 class="wrapper__title">Checked</h2>
        <Checkbox id="checkbox-3" label-text="Disabled"  disabled="disabled" checked="checked"/>
        <Checkbox id="checkbox-4" label-text="Enabled" checked="checked"/>
      </div>

    </div>
  </div>
</template>

<script>
import Checkbox from './components/Checkbox.vue'

export default {
  name: 'App',
  components: {
    Checkbox
  }
}
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

  .wrapper {
    display: flex;

    &__item {
      margin: 0 3rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    &__title {
      font-size: 24px;
      color: #2c3e50;
    }
  }
</style>
