<template>
  <div>
    <div class="bg-mainBg">
      <div class="container mx-auto">
        <div class="py-2 flex items-center">
          <img class="w-10 h-auto mr-5" src="../assets/img/logo.png" alt="" />
          <p class="text-xs text-headers">
            AppleCity— сайта для просмотра новостей компании
          </p>
        </div>
      </div>
    </div>
    <div class="bg-navigation py-3">
      <div class="container mx-auto">
        <NuxtLink class="mr-12" to="/">Личный кабинет</NuxtLink>
        <NuxtLink to="/">Тендеры</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'staticHeader',
}
</script>
