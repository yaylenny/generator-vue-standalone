import DemoApp from "./DemoApp.vue";
import DemoBlock from "./DemoBlock.vue";
import DemoContent from "./DemoContent.vue";
import DemoDataset from "./DemoDataset.vue";
import DemoEntries from "./DemoEntries.vue";
import DemoEntry from "./DemoEntry.vue";
import DemoEntryTitle from "./DemoEntryTitle.vue";
import DemoInstanceBlock from "./DemoInstanceBlock.vue";
import DemoRow from "./DemoRow.vue";
import DemoSidebar from "./DemoSidebar.vue";
import DemoSidebarSection from "./DemoSidebarSection.vue";
import DemoTitle from "./DemoTitle.vue";

export default{
  install( Vue ){
    Vue.component( 'demo', DemoApp );
    Vue.component( 'demo-block', DemoBlock );
    Vue.component( 'demo-content', DemoContent );
    Vue.component( 'demo-dataset', DemoDataset );
    Vue.component( 'demo-entries', DemoEntries );
    Vue.component( 'demo-entry', DemoEntry );
    Vue.component( 'demo-entry-title', DemoEntryTitle );
    Vue.component( 'demo-instance-block', DemoInstanceBlock );
    Vue.component( 'demo-row', DemoRow );
    Vue.component( 'demo-sidebar', DemoSidebar );
    Vue.component( 'demo-sidebar-section', DemoSidebarSection );
    Vue.component( 'demo-title', DemoTitle );
  },
  DemoApp,
  DemoBlock,
  DemoContent,
  DemoDataset,
  DemoEntries,
  DemoEntry,
  DemoEntryTitle,
  DemoInstanceBlock,
  DemoRow,
  DemoSidebar,
  DemoTitle
}
