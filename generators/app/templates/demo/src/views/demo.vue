<script>

  export default{
    data(){
      return {
        items: []
      };
    },
    components:{},
    computed:{
    },
    methods:{},
    created(){},
    watch:{}
  }
</script>
<template>
  <div class="demo-app">
    <div class="demo-sidebar">
      <div class="demo-sidebar-section">
        <h4>Dataset</h4>
        <div class="dataset">
          <div class="dataset-item" v-for="item in items">
            <div class="dataset-entry"
              v-for="( value, prop ) in item">
              <span class="dataset-key">{{prop}}:</span>
              <span class="dataset-value">{{value}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="demo-content">
      <div class="demo-entries">
        <div class="demo-entry">
          <h4 class="subtitle">
            <%= name %>
          </h4>
          <div class="demo-row">
            <div class="demo-block">
              <div class="demo-entry-content">
                <<%= slug %> :items="items">
                </<%= slug %>>
              </div>
            </div>
            <div class="demo-block">
              <div class="demo-code demo-row">
                <textarea class="flex"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="../style/demo.scss"></style>
