<template>
  <div>
    <TendersList />
  </div>
</template>

<script>
import TendersList from '~/components/tendersList.vue'
export default {
  name: 'Tenders',
  layout: 'structureLayout',
  head() {
    return {
      title: 'Тендеры',
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
