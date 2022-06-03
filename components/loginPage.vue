<template>
  <div class="container mx-auto relative">
    <div class="flex justify-between">
      <div class="relative w-3/5">
        <img class="logoCenter" src="../assets/img/logo.png" alt="" />
        <img class="relative z-20" src="../assets/img/main.png" alt="" />
        <img
          class="w-full h-full absolute left-0 top-0 z-10"
          src="../assets/img/dots.png"
          alt=""
        />
        <div class="w-full py-6 bg-white absolute bottom-0 z-50">
          <p class="text-black opacity-50 text-sm text-center">
            © APPLECity Corps — AppleCity — сайта для просмотра новостей
            компании
          </p>
        </div>
      </div>
      <div class="w-2/5 flex items-center bg-grBack bg-opacity-5">
        <div class="mx-auto max-w-md font-rubik">
          <h1 class="text-grBack font-light text-5xl mb-6">
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
            <div class="divider"></div>
            <button class="w-full py-5 bg-grBack text-white">Войти</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
}
</script>
