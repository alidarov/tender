<template>
  <div>
    <div class="w-full flex items-center mb-8">
      <nuxt-link to="/admin/lots"
        ><i class="fa-solid fa-chevron-left mr-7"></i
      ></nuxt-link>
      <h1 class="text-4xl font-bold mr-8">Создание лота</h1>
    </div>
    <div class="w-2/3 p-10 bg-white mx-auto mb-5">
      <p class="text-xl font-bold mb-2">Информация о лоте</p>
      <p class="text-editProfile mb-7">
        Уважаемый пользователь! Просим Вас вводить только достоверные данные
        лота, корректные данные помогут пользователям в определнии итоговой
        ставки. Спасибо!
      </p>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Начало подачи:</p>
        <div class="flex w-3/5">
          <input
            class="w-3/5 border border-inp py-3 px-5 text-sm"
            type="text"
          />
          <input
            class="w-2/5 border border-inp ml-4 py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Завершение:</p>
        <div class="flex w-3/5">
          <input
            class="w-3/5 border border-inp py-3 px-5 text-sm"
            type="text"
          />
          <input
            class="w-2/5 border border-inp ml-4 py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Запланированная сумма:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Адрес загрузки:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Адрес выгрузки:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Категория:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p class="w-2/5">Шаг снижения:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
    </div>
    <div class="w-2/3 p-10 bg-white mx-auto">
      <p class="text-xl font-bold mb-2">Информация о грузе</p>
      <p class="text-editProfile mb-7">
        Уважаемый пользователь! Просим Вас вводить только достоверные данные
        лота, корректные данные помогут пользователям в определнии итоговой
        ставки. Спасибо!
      </p>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Температурный режим (необходимая температура для перевозки):</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Наименование груза:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Количество паллет:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center mb-3">
        <p class="w-2/5">Объем (вес, габариты) груза:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p class="w-2/5">Стоимость груза:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p class="w-2/5">Стоимость перевозки:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p class="w-2/5">Дата осуществления перевозки:</p>
        <div class="flex w-3/5">
          <input
            class="w-full border border-inp py-3 px-5 text-sm"
            type="text"
          />
        </div>
      </div>
    </div>
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
    this.addData()
  },
  head() {
    return {
      title: 'Создание лота/Административная панель - Тендерная площадка',
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
