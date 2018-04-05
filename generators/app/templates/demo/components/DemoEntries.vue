<script>
  import DemoEntry from "./DemoEntry.vue";

  export default{
    props: {
      entries: Array
    },
    data(){
      return {};
    },
    components:{
      'demo-entry': DemoEntry
    },
    computed:{},
    methods:{},
    created(){},
    watch:{}
  }
</script>
<template>
  <div class="demo-entries">
    <slot>
      <template v-if="entries">
        <demo-entry
          v-for="entry in entries"
          :key="entry.name">
        </demo-entry>
      </template>
    </slot>
  </div>
</template>
