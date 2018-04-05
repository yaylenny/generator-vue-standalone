<script>
  export default{
    props: {
      name: String,
      value: {}
    },
    data(){
      return {};
    },
    components:{},
    computed:{},
    methods:{},
    created(){},
    watch:{}
  }
</script>
<template>
  <div class="dataset-entry">
    <slot>
      <span class="dataset-key" v-if="name">{{name}}:</span>
      <span class="dataset-value" v-if="value !== undefined">{{value}}</span>
    </slot>
  </div>
</template>
