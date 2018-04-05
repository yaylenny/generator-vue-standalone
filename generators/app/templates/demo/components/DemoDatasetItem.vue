<script>
  import DatasetEntry from "./DemoDatasetEntry.vue";
  export default{
    props: {
      item: Object
    },
    data(){
      return {};
    },
    components:{
      'dataset-entry': DatasetEntry
    },
    computed:{},
    methods:{},
    created(){
    },
    watch:{}
  }
</script>
<template>
  <div class="dataset-item">
    <slot>
      <template v-if="item">
        <dataset-entry v-for="( value, name ) in item"
          :key="item.value"
          :name="name"
          :value="value">
        </dataset-entry>
      </template>
      <em v-else>data item not found</em>
    </slot>
  </div>
</template>
