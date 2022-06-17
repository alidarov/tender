<template>
  <div class="bg-white p-8">
    <div class="w-full border border-adminDivider">
      <table class="w-full font-medium text-sm">
        <tr class="text-adminList border-b border-adminDivider">
          <th class="px-7 py-4">№</th>
          <th class="px-7 py-4">Имя Фамилия</th>
          <th class="px-7 py-4">Должность</th>
          <th class="px-7 py-4" colspan="2">Дата заведения</th>
          <th class="px-7 py-4">Тип</th>
          <th class="px-7 py-4">Статус</th>
        </tr>
        <tbody>
          <tr v-for="(item, index) of adminsTable" :key="item.id">
            <td class="px-7 py-4 font-normal">{{ index + 1 }}</td>
            <td class="w-80 px-7 py-4">
              {{ item.fio }}
            </td>
            <td class="px-7 py-4">{{ item.job_title }}</td>
            <td class="px-7 py-4 font-normal" colspan="2">
              {{ item.registration_date }}
            </td>
            <td class="px-7 py-4 font-normal">
              {{ item.type }}
            </td>
            <td v-if="item.status == 'Активен'" class="px-7 py-4">
              <p class="w-max px-8 py-2 text-grBack bg-grBack bg-opacity-10">
                {{ item.status }}
              </p>
            </td>
            <td v-if="item.status == 'Заблокирован'" class="px-7 py-4">
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
  methods: {
    ...mapActions(['userData']),
  },
  computed: {
    ...mapGetters(['getUsers', 'adminsTable']),
  },
  created() {
    this.userData()
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
