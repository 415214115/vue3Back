<template>
  <div class="home">
      <pagination :totalNum="40" @pageNumChange="pageNumChange" ref="pagination"></pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, watchEffect, ref } from "vue";

export default defineComponent({
	setup(porps, cxt) {
        const app = inject('app')
        const pagination = ref('pagination')
        onMounted(()=>{
            
            console.log((pagination.value as any).current)
            
        })
        const pageNumChange = (val: Number) => {
            console.log(val)
        }
        return {
            pageNumChange,
            pagination
        }
    },
});
</script>

<style lang="scss" scoped>

// .aaa{
//     color: $colors
// }
</style>
