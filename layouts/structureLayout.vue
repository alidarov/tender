<template>
  <div>
    <div>
      <staticHeader />
      <div class="container mt-10 mb-16 mx-auto px-4">
        <div class="block lg:flex justify-between">
          <FiltersBlock v-if="currentRouteName != 'tenders-id'" />
          <Participation v-else />
          <div class="w-full my-4 lg:my-0 lg:w-4/5 lg:pl-5 font-sans">
            <Breadcrumbs />
            <Nuxt />
          </div>
        </div>
      </div>
      <StaticFooter />
    </div>
  </div>
</template>

<script>
import StaticHeader from '~/components/staticHeader.vue'
import StaticFooter from '~/components/staticFooter.vue'
export default {
  components: { StaticHeader, StaticFooter },
  computed: {
    currentRouteName() {
      return this.$route.name
    },
  },
}
</script>
