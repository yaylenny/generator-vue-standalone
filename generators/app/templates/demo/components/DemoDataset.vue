<script>
  import DatasetItem from "./DemoDatasetItem.vue";

  export default{
    props: {
      items: Array
    },
    data(){
      return {};
    },
    components:{
      'dataset-item': DatasetItem
    },
    computed:{},
    methods:{},
    created(){
      console.log('DemoDataset created', this.items )
    },
    watch:{}
  }
</script>
<template>
  <div class="demo-dataset">
    <slot>
      <dataset-item v-for="item in items"
        :key="item.id"
        :item="item">
      </dataset-item>
    </slot>
  </div>
</template>
