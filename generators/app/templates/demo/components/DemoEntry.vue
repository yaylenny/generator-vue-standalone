<script>
  export default{
    props: {
      title: String
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
  <div class="demo-entry">
    <h4 class="demo-title" v-if="title">{{title}}</h4>
    <slot name="title" v-else></slot>
    <slot>

    </slot>
  </div>
</template>
