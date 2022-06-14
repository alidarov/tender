<template>
  <div>
    <h1 class="text-3xl text-tenders mt-3 mb-4">
      {{ tender.title }}
    </h1>
    <div>
      <div class="my-5">
        <div class="flex items-center bg-navigation justify-between py-3 px-14">
          <img
            class="opacity-40 w-5 cursor-pointer hover:opacity-100"
            src="~/assets/img/mark.png"
            alt=""
          />
          <p class="text-total text-xs">Обьем</p>
        </div>
        <div class="bg-filters px-14 py-6 text-blCol">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <Countdown deadline="August 22, 2022"></Countdown>
              <div class="ml-12 text-sm">
                <p>
                  Опубликовано:
                  <span class="text-activeCol">{{ tender.date_from }}</span>
                </p>
                <p>
                  Начало подачи:
                  <span class="text-activeCol">{{ tender.date_from }}</span>
                </p>
                <p>
                  Завершение:
                  <span class="text-nonActiveCol">{{ tender.date_from }}</span>
                </p>
              </div>
            </div>
            <div class="text-sm">
              <p>Запланированная сумма:</p>
              <p class="text-grBack text-xl font-semibold mb-2 mt-1">
                {{ tender.price }} <span class="text-setRed">₸</span>
              </p>
              <p class="text-statusTender">
                Статус:
                <span
                  class="bg-grBack bg-opacity-10 px-4 py-1 rounded-md text-grBack"
                  >{{ tender.status }}</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-filters px-14 py-3 text-sm text-blCol">
        <p>Информация по лоту</p>
      </div>
      <div class="text-sm my-2">
        <div
          class="flex items-center justify-between border-b border-dividerCol py-3"
        >
          <p class="w-1/2 text-infoSet">Инициатор:</p>
          <p class="w-1/2">{{ tender.initiator }}</p>
        </div>
        <div
          v-for="(item, index) of tender.additional_info"
          :key="index"
          class="flex items-center justify-between border-b border-dividerCol py-3"
        >
          <p class="w-1/2 text-infoSet">{{ item.title }}:</p>
          <p class="w-1/2">{{ item.value }}</p>
        </div>
      </div>
      <div>
        <p class="text-2xl text-blCol my-4">Документы лота</p>
        <div class="flex items-center flex-col bg-mainBg py-8">
          <p class="mb-4 w-1/2 text-center text-lg text-total">
            На данный момент документов нет. Вы можете прикрепить документы в
            режиме редактирования лота
          </p>
          <button class="bg-grBack text-white text-sm w-1/5 py-3">
            Добавить
          </button>
        </div>
      </div>
      <div>
        <p class="text-2xl text-blCol my-4">Документы исполнителя</p>
        <div class="flex items-center flex-col bg-mainBg py-16">
          <p class="w-1/2 text-center text-lg text-total">
            Исполнитель еще не прикрепил документы
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Countdown from 'vuejs-countdown'

export default {
  name: 'Tenders',
  components: { Countdown },
  asyncData({ route }) {
    return axios
      .get(`http://localhost:3001/tenders/${route.params.id}`)
      .then((res) => {
        return { tender: res.data }
      })
  },
  layout: 'structureLayout',
  head() {
    return {
      title: 'Тендеры',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
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
