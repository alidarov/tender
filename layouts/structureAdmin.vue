<template>
  <div>
    <AdminHeader />
    <div class="flex">
      <div class="h-screen shadow-md menuBlock w-1/6">
        <div class="flex items-center px-8 py-6 border-b border-adminDivider">
          <img
            class="w-8 mr-3"
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt=""
          />
          <div>
            <p class="text-grBack">Азиз Баратов</p>
            <p>baratov.a@applecity.kz</p>
          </div>
        </div>
        <div class="block border-b border-adminDivider py-4">
          <nuxt-link to="/admin">
            <div
              :class="{ 'bg-grBack bg-opacity-10 text-grBack' : this.$route.path == '/admin' }"
              class="flex items-center py-4 px-7 hover:bg-grBack hover:bg-opacity-10 hover:cursor-pointer hover:text-grBack"
            >
              <img class="mr-4" src="~/assets/img/users.png" alt="" />
              <p class="text-adminLink">Пользователи</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/admin/lots">
            <div
              :class="{ 'bg-grBack bg-opacity-10 text-grBack' : this.$route.path == '/admin/lots' }"
              class="flex items-center py-4 px-7 hover:bg-grBack hover:bg-opacity-10 hover:cursor-pointer hover:text-grBack"
            >
              <img class="mr-4" src="~/assets/img/lots.png" alt="" />
              <p class="text-adminLink">Лоты</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/admin/categories">
            <div
              :class="{ 'bg-grBack bg-opacity-10 text-grBack' : this.$route.path == '/admin/categories' }"
              class="flex items-center py-4 px-7 hover:bg-grBack hover:bg-opacity-10 hover:cursor-pointer hover:text-grBack"
            >
              <img class="mr-4" src="~/assets/img/lotCategories.png" alt="" />
              <p class="text-adminLink">Категории лотов</p>
            </div>
          </nuxt-link>
          <nuxt-link to="/admin/senders">
            <div
              :class="{ 'bg-grBack bg-opacity-10 text-grBack' : this.$route.path == '/admin/senders' }"
              class="flex items-center py-4 px-7 hover:bg-grBack hover:bg-opacity-10 hover:cursor-pointer hover:text-grBack"
            >
              <img class="mr-4" src="~/assets/img/senders.png" alt="" />
              <p class="text-adminLink">Поставщики</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="px-10 py-8 w-5/6 bg-adminBack">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
