<template>
  <div>
    <div class="bg-mainBg">
      <div class="container mx-auto px-4">
        <div class="py-2 flex items-center">
          <nuxt-link to="/"
            ><img
              class="w-10 h-auto mr-5 hover:cursor-pointer"
              src="../assets/img/logo.png"
              alt=""
          /></nuxt-link>
          <p class="text-xs text-headers">
            AppleCity— сайта для просмотра новостей компании
          </p>
        </div>
      </div>
    </div>
    <div class="bg-navigation py-3 font-sans">
      <div class="container mx-auto px-4">
        <nuxt-link class="mr-12" to="/cabinet">Личный кабинет</nuxt-link>
        <nuxt-link class="mr-12" to="/tenders">Тендеры</nuxt-link>
        <nuxt-link to="/admin">Административная панель</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'staticHeader',
}
</script>
