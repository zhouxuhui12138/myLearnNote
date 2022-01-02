<template>
  <div class="row">
    <div v-for="column in list" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar ? column.avatar : errImg" class="rounded-circle border border-light w-25 my-3" />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>  
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import errImg from '../assets/column.jpg'

export interface IColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

const props = defineProps({
  list: {
    type: Array as PropType<IColumnProps[]>,
    required: true
  }
})

</script>

<style scoped lang="less">
.text-left {
  text-align: left !important;
}
</style>
