<template>
  <div>
    <staticHeader />
    <div class="container mt-10 mx-auto px-4">
      <div class="block lg:flex justify-between">
        <div class="w-full lg:w-1/5">
          <div class="font-sans">
            <div class="bg-navigation p-3">
              <nuxt-link to="/loginPage"
                ><h2>Фильтр по параметрам</h2></nuxt-link
              >
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
                  placeholder="1 500"
                />
                <input
                  class="w-half border-inp border p-3"
                  type="text"
                  placeholder="25 500"
                />
              </div>
            </div>
          </div>
          <div class="bg-filters p-7 font-arial mt-4">
            <h3 class="text-xl mb-6">Есть вопросы?</h3>
            <p class="my-2 text-sm">С 9:00 до 18:00</p>
            <p class="my-2 text-sm">по времени</p>
            <p class="my-2 text-sm">Нур-Султан (Астаны)</p>
            <p class="my-2 text-sm">+7(727)318-76-09</p>
            <a
              class="block my-2 text-sm underline"
              href="email:support@tenderplus.kz"
              >support@tenderplus.kz</a
            >
            <a class="block my-2 text-sm underline" href="https://tenderplus.kz"
              >tenderpluskz</a
            >
          </div>
        </div>
        <div class="w-full my-4 lg:my-0 lg:w-4/5 lg:pl-5 font-sans">
          <p class="text-sm">Главная / Тендеры</p>
          <h1 class="text-3xl text-tenders mt-3 mb-4">
            Тендеры и закупки компаний Казахстана
          </h1>
          <p
            @click="categorySet = 1"
            v-if="categorySet === 0"
            class="mb-5 text-grBack underline hover:cursor-pointer"
          >
            Выбрать категорию
          </p>
          <p
            @click="categorySet = 0"
            v-if="categorySet === 1"
            class="mb-5 text-grBack underline hover:cursor-pointer"
          >
            Скрыть
          </p>
          <div v-if="categorySet == 1" class="py-5 px-6 w-full bg-filters my-5">
            <p>Категории</p>
            <div class="flex items-center justify-between">
              Категории генерирует пользователь..
            </div>
          </div>
          <form class="flex justify-between w-full" action="">
            <div class="w-1/2 relative">
              <i
                class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-5"
              ></i>
              <input
                type="text"
                class="border-inp w-full border p-3 pl-14"
                placeholder="Поиск"
              />
            </div>
            <select class="border-inp border p-3 w-1/4 mx-3" name="" id="">
              <option value="">Алматы</option>
              <option value="">Нур-Султан</option>
            </select>
            <button type="submit" class="bg-grBack text-white w-1/4">
              Найти
            </button>
          </form>
          <p class="mb-5 mt-4 text-grBack underline hover:cursor-pointer">
            Расширенный поиск
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      categorySet: 0,
    }
  },
}
</script>
