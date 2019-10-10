<template>
  <div
    class="slider"
    v-if="prices"
  >
    <v-app
      id="inspire"
      style="height: 300px"
    >
      <h4>Уточните стоимость</h4>
      <v-card-text>
        <v-col class="px-4">
          <v-range-slider
            v-model="range"
            :max="prices.slider_max_value"
            :min="prices.slider_min_value"
            hide-details
            class="align-center"
            style="margin-top: 10px"
          >
            <template v-slot:prepend>
              <span>{{index}}</span>
              <v-text-field
                v-model="range[0]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
            <template v-slot:append>
              <span>{{index}}</span>
              <v-text-field
                v-model="range[1]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-range-slider>
        </v-col>
      </v-card-text>
    </v-app>
  </div>
</template>

<script>

export default {
  computed: {
    range: {
      get() {
        return this.$store.state.range
      },
      set(value) {
        this.$store.state.range = value
      }
    },
    prices: {
      get() {
        return this.$store.state.prices
      }
    },
    index() {
      return this.$store.state.index
    }
  }
}
</script>

<style scoped>
.slider h4{
  margin-left: 20px
}
.slider {
  margin-top: 20px;
}
span {
  margin: 8px 5px 0 0;
}
</style>
