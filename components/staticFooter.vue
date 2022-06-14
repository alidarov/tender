<template>
  <div class="bg-grBack py-10 font-rubik">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="block lg:flex text-center lg:text-left">
        <img
          class="mr-auto lg:mr-14 mx-auto lg:mx-0 mb-3 lg:mb-0"
          src="../assets/img/logo_footer.png"
          alt=""
        />
        <div class="flex justify-between flex-col mr-0 lg:mr-12">
          <div class="block lg:flex justify-between mb-3 lg:mb-0">
            <nuxt-link
              class="text-white block lg:flex text-xl underline underline-offset-4"
              to="/"
              >Контакты</nuxt-link
            >
            <nuxt-link
              class="text-white block lg:flex text-xl underline underline-offset-4"
              to="/"
              >О компании</nuxt-link
            >
            <nuxt-link
              class="text-white block lg:flex text-xl underline underline-offset-4"
              to="/"
              >Реклама на сайте</nuxt-link
            >
            <nuxt-link
              class="text-white block lg:flex text-xl underline underline-offset-4"
              to="/"
              >API</nuxt-link
            >
          </div>
          <div class="text-white text-sm mb-3 lg:mb-0">
            <p>
              Мониторинг тендеров Казахстана, оповещение о новых лотах на
              e-mail.
            </p>
            <p>Сопровождение при участии в тендерах</p>
          </div>
        </div>
        <div class="flex justify-end flex-col">
          <div class="text-white text-sm">
            <p>© 2010—2022 TenderPlus</p>
            <p>Все права защищены</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'staticFooter',
}
</script>
