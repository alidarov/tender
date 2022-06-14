<template>
  <div class="w-full lg:w-1/5">
    <div class="font-sans">
      <div class="bg-navigation p-3">
        <h2>Фильтр по параметрам</h2>
      </div>
      <div class="bg-filters p-3 py-4">
        <select class="w-full border-inp border p-3" name="" id="">
          <option value="">Сначала новые</option>
          <option value="">Сначала старые</option>
          <option value="">Сначала дорогие</option>
          <option value="">Сначала дешевые</option>
        </select>
        <p class="mt-5 mb-4">Диапозон обьема</p>
        <div class="flex justify-between">
          <input
            class="w-half border-inp border p-3"
            type="text"
            :value="oBarMinValue"
          />
          <input
            class="w-half border-inp border p-3"
            type="text"
            :value="oBarMaxValue"
          />
        </div>
      </div>
    </div>
    <QuestionBlock />
  </div>
</template>

<script>
export default {
  name: 'filtersBlock',
  data() {
    return {
      oBarMinValue: 0,
      oBarMaxValue: 0,
    }
  },
}
</script>
