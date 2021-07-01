<template>
  <h1>state entities</h1>
  <pre>{{ entities }}</pre>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { User } from '@/models'

export default defineComponent({
  name: 'App',
  setup() {
    const { state } = useStore()
    const entities = ref(state.entities)

    onMounted(async () => {
      await User.insert({
        data: {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
        },
      })
    })

    return {
      entities,
    }
  },
})
</script>
