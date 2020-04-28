<template>
  <div class="checkbox-wrapper">
    <div class="mdc-form-field">
      <div class="mdc-checkbox " >
        <input type="checkbox"
               class="mdc-checkbox__native-control"
               v-bind:id="id"
               v-bind:checked="checked"
               v-bind:disabled="disabled"/>
        <div class="mdc-checkbox__background">
          <svg class="mdc-checkbox__checkmark"
               viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        <div class="mdc-checkbox__ripple"></div>
      </div>
      <label>{{labelText}}</label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Checkbox',
  props: {
    labelText: String,
    disabled: String,
    checked: String,
    id: String
  },
  data: () => ({

  })
}
</script>

<style scoped lang="scss">

  .mdc-checkbox {
    --mdc-theme-secondary: #125dee;
  }

</style>
