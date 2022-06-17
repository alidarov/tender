<template>
  <div>
    <TendersList />
  </div>
</template>

<script>
import TendersList from '~/components/tendersList.vue'
const titleCase = require('ap-style-title-case')

export default {
  name: 'Tenders',
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []

      let path = ''

      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)

        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })

      return crumbs
    },
  },
  layout: 'structureLayout',
  head() {
    return {
      title: 'Тендеры - Тендерная площадка',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  components: { TendersList },
}
</script>
