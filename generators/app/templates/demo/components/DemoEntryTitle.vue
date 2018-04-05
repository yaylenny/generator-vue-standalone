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
  <div class="demo-entry-title">
    <slot><template v-if="title">title</template></slot>
  </div>
</template>
