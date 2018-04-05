<script>
  // import SubComponent from "../components/SubComponent.vue";

  export default{
    props: {},
    data(){
      return {
      };
    },
    components:{
    },
    methods:{
    },
    computed:{
    },
    // created(){},
    // mounted(){}
    // watch:{}
  }
</script>
<template>
  <div class="<%= slug %>">
    <p>
      A vue component named<strong><%= name %></strong>, with
      a slug of <em><%= slug %></em>
    </p>
  </div>
</template>
