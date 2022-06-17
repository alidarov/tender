<template>
  <div>
    <div class="w-full flex items-center justify-between">
      <img
        class="hideMenu mr-6 hover:cursor-pointer w-5"
        src="~/assets/img/burger.png"
        alt=""
      />
      <p class="text-4xl font-bold mr-8">Поставщики</p>
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
        @click="addUser = 1"
        class="shadow-md py-4 px-16 mb-4 bg-white hover:bg-grBack hover:bg-opacity-10 transition-all"
      >
        Создать поставщика
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
    <AdminListUsersAll v-if="chooseList == 1" />
    <AdminListUsersUsers v-if="chooseList == 2" />
    <AdminListUsersAdmins v-if="chooseList == 3" />
    <div v-if="addUser == 1" class="absolute top-0 left-0 w-full h-full z-10">
      <div class="relative w-full h-full">
        <div
          @click="addUser = 0"
          class="fixed left-0 top-0 w-full h-full bg-black bg-opacity-30"
        ></div>
        <div
          class="absolute w-full lg:w-2/3 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 lg:p-7"
        >
          <div class="py-6 px-9">
            <p class="text-blCol text-xl">Создание нового пользователя</p>
            <p class="text-editProfile text-sm mb-4 mt-2">Информация</p>
            <form action="">
              <div class="flex justify-between text-sm">
                <div class="w-1/2 mr-3">
                  <div class="w-full mb-4">
                    <p class="text-labelCol font-medium mb-1">Ф.И.О:</p>
                    <input
                      v-model="form.fio"
                      class="w-full px-4 py-3 border border-black border-opacity-10"
                      type="text"
                      placeholder="Согласовать ТУ с ТОО “Интерфуд”"
                    />
                  </div>
                  <div class="w-full mb-4">
                    <p class="text-labelCol font-medium mb-1">Номер:</p>
                    <input
                      v-model="form.phone"
                      class="w-full px-4 py-3 border border-black border-opacity-10"
                      type="text"
                      placeholder="Согласовать ТУ с ТОО “Интерфуд”"
                    />
                  </div>
                  <div class="w-full">
                    <p class="text-labelCol font-medium mb-1">Статус:</p>
                    <select
                      name=""
                      id=""
                      v-model="form.status"
                      class="w-full px-4 py-3 border border-black border-opacity-10"
                    >
                      <option value="Активен">Активен</option>
                      <option value="Заблокирован">Заблокирован</option>
                    </select>
                  </div>
                </div>
                <div class="w-1/2 ml-3">
                  <div class="w-full mb-4">
                    <p class="text-labelCol font-medium mb-1">Должность:</p>
                    <input
                      v-model="form.job_title"
                      class="w-full px-4 py-3 border border-black border-opacity-10"
                      type="text"
                      placeholder="Согласовать ТУ с ТОО “Интерфуд”"
                    />
                  </div>
                  <div class="w-full">
                    <p class="text-labelCol font-medium mb-1">
                      Почтовый адрес:
                    </p>
                    <input
                      v-model="form.post"
                      class="w-full px-4 py-3 border border-black border-opacity-10"
                      type="text"
                      placeholder="Согласовать ТУ с ТОО “Интерфуд”"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap justify-between mt-6">
                <div
                  class="flex justify-between items-center w-permission my-2 bg-adminDivider p-4"
                >
                  <p>Создание</p>
                  <input
                    type="checkbox"
                    name="user_info"
                    @click="setPrivilege('Создание')"
                  />
                </div>
                <div
                  class="flex justify-between items-center w-permission my-2 bg-adminDivider p-4"
                >
                  <p>Редактирование всех заявок</p>
                  <input
                    type="checkbox"
                    name="user_info"
                    @click="setPrivilege('Редактирование всех заявок')"
                  />
                </div>
                <div
                  class="flex justify-between items-center w-permission my-2 bg-adminDivider p-4"
                >
                  <p>Редактирование своих заявок</p>
                  <input
                    type="checkbox"
                    name="user_info"
                    @click="setPrivilege('Редактирование своих заявок')"
                  />
                </div>
                <div
                  class="flex justify-between items-center w-permission my-2 bg-adminDivider p-4"
                >
                  <p>Удаление заявки</p>
                  <input
                    type="checkbox"
                    name="user_info"
                    @click="setPrivilege('Удаление заявки')"
                  />
                </div>
              </div>
              <div class="flex justify-end">
                <button
                  @click="addUser = 0"
                  class="bg-cancelEdit text-white px-10 py-3 mt-7 w-full lg:w-max"
                >
                  Отменить
                </button>
                <button
                  @click="sendNewUser"
                  class="bg-grBack ml-4 text-white px-10 py-3 mt-7 w-full lg:w-max"
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Senders',
  layout: 'structureAdmin',
  data() {
    return {
      chooseList: 1,
      addUser: 0,
      form: {
        fio: '',
        job_title: '',
        phone: '',
        post: '',
        status: '',
        type: '',
        privileges: [],
        registration_date: '',
      },
    }
  },
  methods: {
    setPrivilege(item) {
      if (this.form.privileges.includes(item)) {
        let index = parseInt(this.form.privileges.indexOf(item))
        this.form.privileges.splice(index, 1)
        console.log(index)
      } else {
        this.form.privileges.push(item)
      }
      if (this.form.privileges.length >= 4) {
        this.form.type = 'Админ'
      } else {
        this.form.type = 'Пользователь'
      }
      console.log(this.form.privileges)
    },
    async sendNewUser() {
      this.form.registration_date = new Date().toLocaleString()
      await axios.post('http://localhost:3001/users', this.form)
      console.log(this.form)
    },
  },
  mounted() {
    this.form.type = 'Пользователь'
    this.form.status = 'Активен'
  },
  head() {
    return {
      title: 'Поставщики/Административная панель - Тендерная площадка',
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
