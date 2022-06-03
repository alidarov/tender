<template>
  <div>
    <staticHeader />
    <div class="container mt-10 mx-auto">
      <div class="flex items-center justify-between">
        <div class="w-1/5">
          <div class="bg-navigation p-3">
            <h2>Фильтр по параметрам</h2>
          </div>
          <div class="bg-filters p-3">
            <select class="w-full p-3" name="" id="">
              <option value="">Сначала новые</option>
              <option value="">Сначала старые</option>
              <option value="">Сначала дорогие</option>
              <option value="">Сначала дешевые</option>
            </select>
          </div>
        </div>
        <div class="w-4/5"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
