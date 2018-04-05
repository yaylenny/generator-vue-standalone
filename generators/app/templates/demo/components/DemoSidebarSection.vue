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
  <div class="demo-sidebar-section">
    <slot name="title">
      <span class="demo-sidebar-section-title" v-if="title">{{title}}</span>
    </slot>
    <slot name="default"></slot>
  </div>
</template>
