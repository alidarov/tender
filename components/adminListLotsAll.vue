<template>
  <div class="bg-white p-8">
    <div class="w-full border border-adminDivider">
      <table class="w-full font-medium text-sm">
        <tr class="text-adminList border-b border-adminDivider">
          <th class="px-7 py-4">№</th>
          <th class="px-7 py-4" colspan="2">Наименование</th>
          <th class="px-7 py-4">Инициатор</th>
          <th class="px-7 py-4" colspan="2">Дата действия</th>
          <th class="px-7 py-4">Категория</th>
          <th class="px-7 py-4">Статус</th>
        </tr>
        <tbody>
          <tr v-for="(item, index) of getData" :key="item.id">
            <td class="px-7 py-4 font-normal">{{ index + 1 }}</td>
            <td class="w-80 px-7 py-4" colspan="2">
              {{ item.title }}
            </td>
            <td class="px-7 py-4">{{ item.initiator }}</td>
            <td class="px-7 py-4 font-normal" colspan="2">
              {{ item.date_from }} - {{ item.date_to }}
            </td>
            <td class="px-7 py-4">
              <p v-for="s_item of item.category_list" :key="s_item">
                {{ s_item }}
              </p>
            </td>
            <td v-if="item.status == 'Прием заявок'" class="px-7 py-4">
              <p class="w-max px-8 py-2 text-grBack bg-grBack bg-opacity-10">
                {{ item.status }}
              </p>
            </td>
            <td v-if="item.status == 'В работе'" class="px-7 py-4">
              <p class="w-max px-8 py-2 text-grBack bg-grBack bg-opacity-10">
                {{ item.status }}
              </p>
            </td>
            <td v-if="item.status == 'Отменен'" class="px-7 py-4">
              <p
                class="w-max px-8 py-2 text-adminCanceled bg-adminCanceled bg-opacity-10"
              >
                {{ item.status }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
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
      title: 'Пользователи/Административная панель - Тендерная площадка',
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
