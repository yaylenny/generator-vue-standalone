import <%= name %> from "./core/<%= name %>.vue";

export default{
  install( Vue ){
    console.log( 'installing <%= name %>');
    Vue.component('<%= slug %>', <%= name %> );
  },
  <%= name %>
}
