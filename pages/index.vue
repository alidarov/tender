<template>
  <div>
    <h1 class="text-3xl text-tenders mt-3 mb-4">
      Тендеры и закупки компаний Казахстана
    </h1>
    <p
      @click="categorySet = 1"
      v-if="categorySet === 0"
      class="mb-5 text-grBack underline hover:cursor-pointer w-max"
    >
      Выбрать категорию
    </p>
    <p
      @click="categorySet = 0"
      v-if="categorySet === 1"
      class="mb-5 text-grBack underline hover:cursor-pointer w-max"
    >
      Скрыть
    </p>
    <div v-if="categorySet == 1" class="py-5 px-6 w-full bg-filters my-5">
      <p>Категории</p>
      <div class="flex items-center justify-between">
        Категории генерирует пользователь..
      </div>
    </div>
    <form class="flex justify-between w-full mainRes" action="">
      <div class="w-1/2 relative">
        <i
          class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 left-5"
        ></i>
        <input
          type="text"
          v-model="searchInp"
          class="border-inp w-full border p-3 pl-14 inpRes"
          placeholder="Поиск"
        />
        <div class="sResults">
          <p
            class="hover:cursor-pointer"
            v-for="filter of filteredList"
            :key="filter.key"
          >
            <nuxt-link :to="`/tenders/${filter.id}`">{{
              filter.title
            }}</nuxt-link>
          </p>
        </div>
      </div>
      <select class="border-inp border p-3 w-1/4 mx-3" name="" id="">
        <option value="">Алматы</option>
        <option value="">Нур-Султан</option>
      </select>
      <button type="submit" class="bg-grBack text-white w-1/4">Найти</button>
    </form>
    <p
      @click="searchExp = 1"
      v-if="searchExp === 0"
      class="mb-4 mt-4 text-grBack w-max underline hover:cursor-pointer"
    >
      Расширенный поиск
    </p>
    <p
      @click="searchExp = 0"
      v-if="searchExp === 1"
      class="mb-4 mt-4 text-grBack w-max underline hover:cursor-pointer"
    >
      Скрыть
    </p>
    <div
      class="bg-filters px-9 py-6 mb-4 flex justify-between"
      v-if="searchExp == 1"
    >
      <div class="w-full mr-2">
        <div class="flex items-center">
          <p class="mb-4 text-sm text-total w-1/2 mr-1">Расширеный поиск</p>
          <p class="mb-4 text-sm text-total w-1/2 ml-1">Промежуток времени</p>
        </div>
        <div class="flex">
          <div class="w-full relative mr-1">
            <div>
              <input
                type="text"
                placeholder="Статус лота"
                class="w-full px-4 py-2 bg-white border border-inp"
              />
              <img
                class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                src="../assets/img/arrow.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full ml-1 flex justify-between">
            <div class="w-full relative mr-1">
              <input
                type="text"
                placeholder="Дата начала"
                class="w-full px-4 py-2 bg-white border border-inp"
              />
              <img
                class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                src="../assets/img/arrow.png"
                alt=""
              />
            </div>
            <div class="w-full relative ml-1">
              <input
                type="text"
                placeholder="Дата окончания"
                class="w-full px-4 py-2 bg-white border border-inp"
              />
              <img
                class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                src="../assets/img/arrow.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="w-full relative mt-5 mr-1">
            <input
              type="text"
              placeholder="Категория"
              class="w-full px-4 py-2 bg-white border border-inp"
            />
            <img
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              src="../assets/img/arrow.png"
              alt=""
            />
          </div>
          <div class="w-full relative mt-5 ml-1">
            <input
              type="text"
              placeholder="Утверждение результатов"
              class="w-full px-4 py-2 bg-white border border-inp"
            />
            <img
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              src="../assets/img/arrow.png"
              alt=""
            />
          </div>
        </div>
        <div class="flex justify-between">
          <div class="w-full relative mt-5 mr-1">
            <input
              type="text"
              placeholder="Инициатор"
              class="w-full px-4 py-2 bg-white border border-inp"
            />
            <img
              class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              src="../assets/img/arrow.png"
              alt=""
            />
          </div>
          <div class="w-full ml-1 relative mt-5 flex justify-end">
            <button class="bg-grBack text-white text-sm h-full py-2 px-14 mx-3">
              Сбросить
            </button>
            <button class="bg-grBack text-white text-sm h-full py-2 px-14">
              Применить
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-between bg-navigation py-3 px-12 text-total text-xs"
    >
      <div class="flex items-center">
        <p class="mr-8">Всего: {{ dataCount }}</p>
        <p class="mr-8">Тендеров: {{ dataCount }}</p>
        <p>Лотов: {{ dataCount }}</p>
      </div>
      <p>Обьем</p>
    </div>
    <TendersList />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StaticFooter from '~/components/staticFooter.vue'
import TendersList from '~/components/tendersList.vue'
import Breadcrumbs from '../components/breadcrumbs.vue'

export default {
  name: 'IndexPage',
  data() {
    return {
      categorySet: 0,
      searchExp: 0,
      searchInp: '',
    }
  },
  layout: 'structureLayout',
  computed: {
    ...mapGetters(['getData', 'currentUser']),
    dataCount() {
      if (this.getData != null) {
        return this.getData.length
      } else {
        return console.log('Собираем количество тендеров...')
      }
    },
    filteredList() {
      if (this.getData != null) {
        return this.getData.filter((post) => {
          return post.title.toLowerCase().includes(this.searchInp.toLowerCase())
        })
      } else {
        return console.log('Готовимся к фильтрации поиска...')
      }
    },
  },
  components: {
    StaticFooter,
    TendersList,
    Breadcrumbs,
  },
  methods: {
    ...mapActions(['addData', 'userData']),
  },
  async mounted() {
    this.addData()
    this.userData()
  },
  head() {
    return {
      title: 'Главная - Тендерная площадка',
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
