var Generator = require('yeoman-generator')
var addons=require("./addons.js");

function promise( fn, str ){
  return new Promise(( resolve, reject )=>{
    resolve( fn( str ));
  })
}
function unspace( str="" ){
  return str.replace(/ /g, '');
}
function lower( w="" ){
  return w.toLowerCase();
}
function slugify( str="" ){
  if( !str.includes(' ')) return lower( str );
  return str.split(' ').map( lower ).join('-');
}
function capitalize( str="", forcelower ){
  let start=str[0].toUpperCase();
  let end=str.slice(1);
  if( forcelower ) end=end.toLowerCase();
  return start+end;
}
function unslug( str="" ){
  str=str.replace(/ /g, '-');
  if( str.includes('-')){
    return str.split('-').map( s=>capitalize( s, true )).join('');
  }
  return str;
}

class Base extends Generator{
  constructor( args, opt ){
    super( args, opt );
    this.props={};
  }
  copyTpl( tpl, dest ){
    if( Array.isArray( tpl )){
      [ tpl, dest ]=tpl;
    }
    this.fs.copyTpl(
      this.templatePath( tpl ),
      this.destinationPath( dest || tpl ),
      this.props
    );
  }
}

module.exports=class extends Base{
  constructor( args, opt ){
    super( args, opt );
    this.props.addons=[];
    this.argument('slug', { required: false, type: String });
    if( this.options.slug ){
      this.props.slug=slugify( this.options.slug );
      this.props.name=unslug( this.props.slug );
    }
  }
  prompting(){
    var prompts=[];
    if( !this.props.slug ){
      prompts.push(
        {
          type: "input",
          name: "slug",
          message: `Component slug (e.g. my-vue-component),\nThis will be the name of your custom component and should contain DASHES -->`,
          filter:str=>promise( slugify, str ),
          default: slugify(this.appname)
        }
      );
    }
    if( !this.props.name ){
      prompts.push(
        {
          type: 'input',
          name: 'name',
          message: `Library Name (e.g. MyVueComponent ),\nThis is used as the variable name, no dashes or spaces -->`,
          default:({ slug })=>promise( unslug, slug ),
          filter: str=>promise( unslug, str )
        }
      )
    }
    // ADD THE REST OF THE PROMPTS
    prompts.push(
      {
        type: 'input',
        name: 'description',
        message: 'Description of this component. This goes into package.json -->'
      },
      {
        type: 'checkbox',
        name: 'addons',
        message: 'Add ons',
        choices: addons
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author name -->',
        store: true
      }
    );
    return this.prompt( prompts ).then( props=>{
      this.props=Object.assign({}, this.props, props, {
        addons: props.addons.map( value=>addons.find( a=>a.value===value ))
      });
    });
  }

  writing(){
    let { name }=this.props;
    [
      'webpack.config.js',
      'demo.webpack.config.js',
      'package.json',
      'README.md',
      '.babelrc',
      'src/index.js',
      'src/components/SubComponent.vue',
      'src/mixins/mixin.vue',
      'demo/webpack.config.js',
      'demo/index.js',
      'demo/dist/demo.html',
      'demo/lib',
      'demo/src/index.js',
      'demo/src/routes.js',
      'demo/src/components',
      'demo/src/core',
      'demo/src/mixins',
      'demo/src/style/demo.scss',
      'demo/src/views/demo.vue',
      [ 'src/core/Component.vue', `src/core/${name}.vue` ]
    ].forEach( s=>this.copyTpl( s ));
  }

  installing(){
    this.installDependencies({
      callback:()=>{
        this.spawnCommand('npm', [ 'run-script','build'], {})
      }
    });
  }
}
