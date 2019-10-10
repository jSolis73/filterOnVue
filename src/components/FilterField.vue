<template>
  <div class="filter">
    <h3>Фильтры товаров</h3>
    <Brands/>
    <Slider/>
    <Reset />
  </div>
</template>

<script>
import Brands from './filters/Brands'
import Slider from './filters/Slider'
import Reset from './filters/Reset'

export default {
  components: {
    Brands,
    Slider,
    Reset
  },
  mounted() {
    this.$store.dispatch('loadData')
  }
}
</script>

<style scoped>
.filter {
  display: inline-block;
  width: 20%;
  margin: 20px 0 0 10px;
  border: 1px solid grey;
}

.filter h3 {
  margin: 10px;
}
</style>
