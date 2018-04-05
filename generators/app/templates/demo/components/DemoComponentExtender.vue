<script>
  import VueAutoComplete from "../../src";
  export default{
    mixins: [ VueAutoComplete ],
    props: {},
    data(){
      return {};
    },
    components:{},
    computed:{
      finalTextProp(){
        return 'name';
      },
      finalValueProp(){
        return 'id';
      },
      finalSearchProps(){
        return [ 'name' ];
      }

    },
    methods:{
      getTextProp(){}
    },
    created(){},
    watch:{}
  }
</script>
