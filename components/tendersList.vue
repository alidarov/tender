<template>
  <div>
    <div class="my-4" v-for="item of getData" :key="item.id">
      <div>
        <div
          class="px-3 lg:px-14 py-7 block lg:flex items-start justify-between bg-filters"
        >
          <div class="w-max mr-4">
            <img
              @click="setTenderNum"
              class="opacity-40 w-5 cursor-pointer hover:opacity-100"
              src="~/assets/img/mark.png"
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
  name: 'TendersList',
  data() {
    return {
      tenders: '',
    }
  },
  computed: {
    ...mapGetters(['getData']),
  },
  methods: {
    ...mapActions(['addData']),
    setTenderNum() {
      localStorage.setItem('tenderNum', 1)
      console.log('...')
    },
  },
  async mounted() {
    this.addData()
  },
}
</script>
