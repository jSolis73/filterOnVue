<template>
  <div class="form">
    <h4>Выберите бренд</h4>
    <form>
      <input
        type="text"
        class="form__text-field"
        placeholder="Найти"
        v-model="searchingKey"
        @input="searchBrand"
      >
      <div>
        <label
          v-for="brand in brands"
          :key="brand.unique_id"
        >
          <div>
            <input
              type="checkbox"
              class="form__checkbox"
              v-model="checkList"
              :value="brand.display_name"
            >
            {{brand.display_name}}
           </div>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    brands: {
      get() {
        return this.$store.state.brands
      }
    },
    searchingKey: {
      get() {
        return this.$store.state.searchingKey
      },
      set(value) {
        this.$store.commit('updateSearch', value)
      }
    },
    checkList: {
      get() {
        return this.$store.state.checkList
      },
      set(val) {
        this.$store.state.checkList = val
      }
    }
  },
  methods: {
    searchBrand(searchingKey) {
      this.$store.commit('searchByKey', searchingKey)
    }
  }
}
</script>

<style scoped>
  .form {
    margin-left: 15px;
  }

  .form h4 {
    padding: 20px 0 0 10px;

  }

  .form__text-field {
    border: 1px solid #cccccc;
    margin: 20px 0 10px 10px;
    padding: 5px;
  }

  .form__checkbox {
    margin: 10px;
  }
</style>
