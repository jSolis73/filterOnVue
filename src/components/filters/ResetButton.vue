<template>
  <div class="reset">
    <v-btn tile outlined right color="danger" @click="reset">
      <v-icon left>
        mdi-refresh
      </v-icon> Reset
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    reset() {
      this.$store.commit('reset')
    }
  }
}
</script>

<style scoped>
  .reset {
    margin-left: 55%;
    margin-bottom: 10%;
  }
</style>
