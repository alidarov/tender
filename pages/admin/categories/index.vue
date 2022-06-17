<template>
  <div>
    <div class="w-full flex items-center justify-between">
      <img
        class="hideMenu mr-6 hover:cursor-pointer w-5"
        src="~/assets/img/burger.png"
        alt=""
      />
      <p class="text-4xl font-bold mr-8">Шаблоны лотов</p>
      <div class="relative w-full">
        <input
          type="text"
          class="w-full py-3 pl-14 border border-adminInp"
          placeholder="Введите текст для поиска"
        />
        <i
          class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-6"
        ></i>
      </div>
    </div>
    <div class="mt-8">
      <button
        class="shadow-md py-4 px-16 mb-4 bg-white hover:bg-grBack hover:bg-opacity-10 transition-all"
      >
        Создать категорию
      </button>
      <div class="bg-white flex items-center justify-between mb-4">
        <div class="text-adminList flex items-center">
          <p
            class="mx-8 py-4 hover:cursor-pointer"
            :class="{ 'text-grBack border-b-4 border-grBack': chooseList == 1 }"
            @click="chooseList = 1"
          >
            Все
          </p>
          <p
            class="mx-8 py-4 hover:cursor-pointer"
            :class="{ 'text-grBack border-b-4 border-grBack': chooseList == 2 }"
            @click="chooseList = 2"
          >
            Пользователи
          </p>
          <p
            class="mx-8 py-4 hover:cursor-pointer"
            :class="{ 'text-grBack border-b-4 border-grBack': chooseList == 3 }"
            @click="chooseList = 3"
          >
            Администраторы
          </p>
          <p
            class="mx-8 py-4 hover:cursor-pointer"
            :class="{ 'text-grBack border-b-4 border-grBack': chooseList == 4 }"
            @click="chooseList = 4"
          >
            Запросы на модерацию
          </p>
          <p
            class="mx-8 py-4 hover:cursor-pointer"
            :class="{ 'text-grBack border-b-4 border-grBack': chooseList == 5 }"
            @click="chooseList = 5"
          >
            Запросы на регистрацию
          </p>
        </div>
        <div>
          <p class="text-grBack pr-8">Показать 10</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminCategories',
  layout: 'structureAdmin',
  data() {
    return {
      chooseList: 1,
      addUser: 0,
    }
  },
  head() {
    return {
      title: 'Категории/Административная панель - Тендерная площадка',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>
