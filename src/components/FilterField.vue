<template>
  <div class="filter">
    <h3>Фильтры товаров</h3>
    <Brands/>
    <PriceSlider/>
    <ResetButton />
  </div>
</template>

<script>
import Brands from './Filters/Brands'
import PriceSlider from './Filters/PriceSlider'
import ResetButton from './Filters/ResetButton'

export default {
  components: {
    Brands,
    PriceSlider,
    ResetButton
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
