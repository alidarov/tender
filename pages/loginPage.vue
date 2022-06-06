<template>
  <div class="relative md:h-screen">
    <staticHeader />
    <div class="flex justify-between md:h-screen">
      <div class="relative sm:w-1/2 lg:w-3/5 loginPage hidden md:block">
        <img class="logoCenter w-1/3" src="../assets/img/logo.png" alt="" />
        <div class="w-full py-6 bg-white absolute bottom-0 z-50">
          <p class="text-black opacity-50 text-sm text-center">
            © APPLECity Corps — AppleCity — сайта для просмотра новостей
            компании
          </p>
        </div>
      </div>
      <div
        class="w-full md:w-1/2 lg:w-2/5 px-10 lg:px-0 flex items-center bg-grBack bg-opacity-5"
      >
        <div class="mx-auto max-w-md font-rubik py-10 lg:py-0">
          <img
            class="block md:hidden w-3/4 mx-auto"
            src="../assets/img/logo.png"
            alt=""
          />
          <h1 class="text-grBack font-light text-4xl mb-6">
            Добро пожаловать!
          </h1>
          <p class="mb-5 font-bold text-2xl text-grBack">Авторизация</p>
          <p class="text-sm text-grBack">
            Данные ниже являются справочными и отображаются по состоянию на
            текущую дату. Расчет заработной платы может производится с первого
            по десятое число каждого месяца.
          </p>
          <form action="">
            <div class="my-4">
              <label for="">Логин<span class="text-red-400">*</span></label>
              <input class="border border-inp w-full p-2 mt-1" type="text" />
            </div>
            <div class="my-4">
              <label for="">Пароль<span class="text-red-400">*</span></label>
              <input class="border border-inp w-full p-2 mt-1" type="text" />
            </div>
            <div class="relative">
              <div class="divider"></div>
            </div>
            <button class="w-full py-5 bg-grBack text-white mt-7">Войти</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  head: {
    title: 'Тендерная площадка - авторизация',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
}
</script>
