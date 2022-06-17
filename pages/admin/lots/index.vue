<template>
  <div>
    <div class="w-full flex items-center justify-between">
      <img
        class="hideMenu mr-6 hover:cursor-pointer w-5"
        src="~/assets/img/burger.png"
        alt=""
      />
      <p class="text-4xl font-bold mr-8">Лоты</p>
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
      <nuxt-link to="/admin/lots/createLot"><button
        class="shadow-md py-4 px-16 mb-4 bg-white hover:bg-grBack hover:bg-opacity-10 transition-all"
      >
        Создать лот
      </button></nuxt-link>
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
            Прием заявок
          </p>
          <p
            class="mx-8 py-4 hover:cursor-pointer"
            :class="{ 'text-grBack border-b-4 border-grBack': chooseList == 3 }"
            @click="chooseList = 3"
          >
            В работе
          </p>
          <p
            class="mx-8 py-4 hover:cursor-pointer"
            :class="{ 'text-grBack border-b-4 border-grBack': chooseList == 4 }"
            @click="chooseList = 4"
          >
            Отмененые
          </p>
        </div>
        <div>
          <p class="text-grBack pr-8">Показать 10</p>
        </div>
      </div>
    </div>
    <AdminListLotsAll v-if="chooseList == 1" />
    <AdminListLotsReceiving v-if="chooseList == 2" />
    <AdminListLotsWorking v-if="chooseList == 3" />
    <AdminListLotsCanceled v-if="chooseList == 4" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Lots',
  layout: 'structureAdmin',
  data() {
    return {
      chooseList: 1,
    }
  },
  computed: {
    ...mapGetters(['getData']),
  },
  methods: {
    ...mapActions(['addData']),
  },
  created() {
    this.addData();
  },
  head() {
    return {
      title: 'Лоты/Административная панель - Тендерная площадка',
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

<style scoped>
th {
  text-align: left;
}
td {
  border-bottom: 1px solid #ebeff2;
}
td:nth-last-child(1) {
  border-bottom: none;
}
</style>
