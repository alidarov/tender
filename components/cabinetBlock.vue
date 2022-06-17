<template>
  <div class="w-full lg:w-1/5">
    <div class="font-sans">
      <div class="w-full bg-filters px-4 py-5">
        <button class="bg-grBack w-full text-white py-3">Создать лот</button>
      </div>
      <div class="w-full bg-filters px-4 py-5 mt-4">
        <button
          @click="editProfile = 1"
          class="bg-grBack w-full text-white py-3"
        >
          Редактировать профиль
        </button>
      </div>
    </div>
    <QuestionBlock />
    <div
      v-if="editProfile == 1"
      class="absolute top-0 left-0 w-full h-full z-10"
    >
      <div class="relative w-full h-full">
        <div
          @click="editProfile = 0"
          class="fixed left-0 top-0 w-full h-full bg-black bg-opacity-30"
        ></div>
        <div
          class="absolute w-full lg:w-2/3 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 lg:p-7"
        >
          <div class="py-6 px-9">
            <p class="text-blCol text-xl">Редактирование профиля</p>
            <p class="text-editProfile text-sm mb-4 mt-2">
              Уважаемый пользователь! Просим Вас вводить только достоверные
              данные своей компании, корректные номера телефонов по которым наша
              команда будет выходить с Вами на связь. Спасибо!
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
                    <p class="text-labelCol font-medium mb-1">
                      Почтовый адрес:
                    </p>
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
              <div class="flex justify-end">
                <button class="bg-grBack text-white px-10 py-3 mt-7 w-full lg:w-max">
                  Отправить на модерацию
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
export default {
  name: 'CabinetBlock',
  data() {
    return {
      editProfile: 0,
    }
  },
}
</script>
