import <%= name %> from "./core/<%= name %>.vue";

export default{
  install( Vue, prefix="<%= slug %>" ){
    console.log( 'installing <%= name %>');
    Vue.component( prefix, <%= name %> );
  },
  <%= name %>
}

export{
  <%= name %>
}
