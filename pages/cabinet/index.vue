<template>
  <div>
    <h1 class="text-3xl text-tenders mt-3 mb-4">Личный кабинет</h1>
    <div class="py-6 px-9 bg-filters">
      <p class="text-blCol text-xl">Редактирование профиля</p>
      <p class="text-editProfile text-sm mb-4 mt-2">
        Уважаемый пользователь! Просим Вас вводить только достоверные данные
        своей компании, корректные номера телефонов по которым наша команда
        будет выходить с Вами на связь. Спасибо!
      </p>
      <form action="">
        <div class="flex justify-between text-sm">
          <div class="w-1/2 mr-3">
            <div class="w-full mb-4">
              <p class="text-labelCol font-medium mb-1">Ф.И.О:</p>
              <input
                class="w-full px-4 py-3 border border-black border-opacity-10"
                type="text"
                placeholder="Согласовать ТУ с ТОО “Интерфуд”"
              />
            </div>
            <div class="w-full">
              <p class="text-labelCol font-medium mb-1">Номер:</p>
              <input
                class="w-full px-4 py-3 border border-black border-opacity-10"
                type="text"
                placeholder="Согласовать ТУ с ТОО “Интерфуд”"
              />
            </div>
          </div>
          <div class="w-1/2 ml-3">
            <div class="w-full mb-4">
              <p class="text-labelCol font-medium mb-1">Почтовый адрес:</p>
              <input
                class="w-full px-4 py-3 border border-black border-opacity-10"
                type="text"
                placeholder="Согласовать ТУ с ТОО “Интерфуд”"
              />
            </div>
            <div class="w-full">
              <p class="text-labelCol font-medium mb-1">Пароль:</p>
              <input
                class="w-full px-4 py-3 border border-black border-opacity-10"
                type="text"
                placeholder="Согласовать ТУ с ТОО “Интерфуд”"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="bg-navigation px-0 lg:px-12 block lg:flex items-center my-5">
      <p
        class="px-9 py-3 hover:cursor-pointer"
        :class="{
          'border-b-2 border-grBack text-grBack font-semibold': menuCheck == 1,
        }"
        @click="menuCheck = 1"
      >
        Мои тендеры
      </p>
      <p
        class="px-9 py-3 hover:cursor-pointer"
        :class="{
          'border-b-2 border-grBack text-grBack font-semibold': menuCheck == 2,
        }"
        @click="menuCheck = 2"
      >
        В работе
      </p>
      <p
        class="px-9 py-3 hover:cursor-pointer"
        :class="{
          'border-b-2 border-grBack text-grBack font-semibold': menuCheck == 3,
        }"
        @click="menuCheck = 3"
      >
        Избранное
      </p>
      <p
        class="px-9 py-3 hover:cursor-pointer"
        :class="{
          'border-b-2 border-grBack text-grBack font-semibold': menuCheck == 4,
        }"
        @click="menuCheck = 4"
      >
        Архив
      </p>
    </div>
    <div class="my-4" v-for="item of getData" :key="item.id">
      <div>
        <div
          class="px-3 lg:px-14 py-7 block lg:flex items-start justify-between bg-filters"
        >
          <div class="w-max mr-4 flex lg:block">
            <img
              class="opacity-40 w-5 cursor-pointer hover:opacity-100 mb-5 mr-5 lg:mr-0"
              src="~/assets/img/mark.png"
              alt=""
            />
            <img
              class="w-5 cursor-pointer mb-5"
              src="~/assets/img/edit.png"
              alt=""
            />
          </div>
          <div class="mr-0 lg:mr-8">
            <nuxt-link
              :to="`/tenders/${item.id}`"
              class="text-lg text-grBack hover:cursor-pointer"
            >
              {{ item.title }}
            </nuxt-link>
            <div class="my-4 text-total text-sm">
              <p>Регион: {{ item.region }}</p>
              <p>Место поставки: {{ item.destination }}</p>
            </div>
            <div class="block lg:flex items-center my-3 lg:my-0">
              <p
                class="text-grBack bg-grBack bg-opacity-10 px-4 py-1 text-sm rounded-md"
              >
                Лот №{{ item.lot_number }}
              </p>
              <p
                class="text-grBack bg-grBack bg-opacity-10 px-4 py-1 text-sm rounded-md mx-0 lg:mx-3 my-3 lg:my-0"
              >
                Тендер №{{ item.tender_number }}
              </p>
              <p
                class="text-grBack bg-grBack bg-opacity-10 px-4 py-1 text-sm rounded-md"
              >
                <span v-for="cat of item.category_list" :key="cat">
                  {{ cat }}
                </span>
              </p>
            </div>
          </div>
          <div class="w-auto">
            <p class="text-grBack text-xl font-semibold">
              {{ item.price }} <span class="text-setRed">₸</span>
            </p>
            <p class="text-statusTender text-sm">
              Статус: <span class="text-statusSt">{{ item.status }}</span>
            </p>
          </div>
        </div>
        <div
          class="flex items-center justify-between px-3 lg:px-14 py-3 bg-navigation text-xs lg:text-base"
        >
          <div class="flex items-center justify-start">
            <p class="mr-6">Инициатор: {{ item.initiator }}</p>
            <p class="mr-6">{{ item.date_from }} — {{ item.date_to }}</p>
            <p>Осталось {{ item.days_left }} дней</p>
          </div>
          <p>Файлы: {{ item.files.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Cabinet',
  layout: 'structureLayout',
  data() {
    return {
      menuCheck: 1,
      tenders: '',
    }
  },
  computed: {
    ...mapGetters(['getData', 'getUsers']),
    userTenders() {
      this.getData.filter((item) => item.id == 1)
    },
  },
  methods: {
    ...mapActions(['addData', 'userData']),
  },
  async mounted() {
    this.addData()
  },
  head() {
    return {
      title: 'Личный кабинет - Тендерная площадка',
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
