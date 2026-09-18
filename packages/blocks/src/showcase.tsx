'use client';
import {useId,useState} from 'react';
import * as Blocks from './index';
export function BlockShowcase({slug}:{slug:string}){
  const anchor=useId(),href=`#${anchor}`;
  const [notice,setNotice]=useState(''),[name,setName]=useState('Acme'),[query,setQuery]=useState('');
  const [members,setMembers]=useState([{id:'alex',name:'Alex Morgan',email:'alex@example.com',role:'Owner'},{id:'sam',name:'Sam Taylor',email:'sam@example.com',role:'Member'}]);
  const [keys,setKeys]=useState([{id:'preview',name:'Development',prefix:'demo_',created:'Sep 17, 2026'}]);
  const [notifications,setNotifications]=useState([{id:'1',title:'Project ready for review',description:'Sam updated the customer portal.',time:'10 minutes ago',unread:true},{id:'2',title:'Welcome to your workspace',description:'Everything is ready for your next idea.',time:'Yesterday',unread:false}]);
  const action=(label:string)=>()=>setNotice(`${label} — preview action received.`);
  const submitted=async(data:FormData)=>{if(data.has('workspace'))setName(String(data.get('workspace')));setNotice('Preview form submitted. No data was sent to a service.');};
  const rows=[{name:'Customer portal',status:'In progress',owner:'Alex'},{name:'Marketing site',status:'Review',owner:'Sam'},{name:'Mobile app',status:'Planning',owner:'Jamie'}],columns=[{key:'name',label:'Project'},{key:'status',label:'Status'},{key:'owner',label:'Owner'}];
  let content;
  switch(slug){
    case 'login':content=<Blocks.LoginBlock onSubmit={submitted} signupHref={href} forgotHref={href}/>;break;
    case 'signup':content=<Blocks.SignupBlock onSubmit={submitted} loginHref={href}/>;break;
    case 'forgot-password':content=<Blocks.ForgotPasswordBlock onSubmit={submitted} loginHref={href}/>;break;
    case 'reset-password':content=<Blocks.ResetPasswordBlock onSubmit={submitted}/>;break;
    case 'otp':content=<Blocks.OtpBlock onSubmit={submitted}/>;break;
    case 'app-sidebar':content=<Blocks.AppSidebarBlock workspace="Acme" accountName="Alex Morgan" items={[{label:'Overview',href,active:true},{label:'Projects',href:href+'-projects'},{label:'Settings',href:href+'-settings'}]}/>;break;
    case 'app-header':content=<Blocks.AppHeaderBlock breadcrumbs={[{label:'Workspace',href},{label:'Projects'}]} accountName="Alex Morgan" onSearch={action('Search')} onSignOut={action('Sign out')}/>;break;
    case 'profile':content=<Blocks.ProfileBlock name="Alex Morgan" email="alex@example.com" bio="Making useful things on the internet." onSave={submitted}/>;break;
    case 'settings':content=<Blocks.SettingsBlock workspaceName={name} onSave={submitted} onNotificationSave={submitted}/>;break;
    case 'team':content=<Blocks.TeamBlock members={members} onInvite={async data=>{const email=String(data.get('email'));setMembers(items=>[...items,{id:crypto.randomUUID(),name:email.split('@')[0],email,role:'Invited'}]);setNotice('Preview invitation added locally. No email sent.')}} onRemove={id=>setMembers(items=>items.filter(item=>item.id!==id))}/>;break;
    case 'billing':content=<Blocks.BillingBlock plan="Team" price="$29 / month" renewal="Renews October 1" usage={3} limit={5} onManage={action('Manage sample subscription')} invoices={[{id:'1',date:'September 1, 2026',amount:'$29',href}]}/>;break;
    case 'api-keys':content=<Blocks.ApiKeysBlock keys={keys} onCreate={async data=>{setKeys(items=>[...items,{id:crypto.randomUUID(),name:String(data.get('name')),prefix:'demo_',created:'Just now'}]);setNotice('Preview record created. This is not a usable API credential.')}} onRevoke={id=>setKeys(items=>items.filter(item=>item.id!==id))}/>;break;
    case 'notifications':content=<Blocks.NotificationsBlock items={notifications} onReadAll={()=>setNotifications(items=>items.map(item=>({...item,unread:false})))} onOpen={id=>{setNotifications(items=>items.map(item=>item.id===id?{...item,unread:false}:item));setNotice('Preview notification opened.')}}/>;break;
    case 'data-table':content=<Blocks.DataTableBlock title="Projects" description="Everything your team is working on." columns={columns} rows={rows} onCreate={action('Add record')}/>;break;
    case 'filters':content=<><Blocks.FiltersBlock statuses={[{value:'active',label:'Active'},{value:'archived',label:'Archived'}]} onChange={filters=>setQuery(JSON.stringify(filters))}/><p role="status" className="cr-description">Current filters: {query||'None'}</p></>;break;
    case 'search':content=<Blocks.SearchBlock items={rows.map((row,index)=>({id:String(index),title:row.name,description:row.status}))} onSelect={id=>setNotice(`Selected ${rows[Number(id)].name}`)}/>;break;
    case 'empty-state':content=<Blocks.EmptyStateBlock title="A fresh start" description="Your first project is one click away." actionLabel="Create project" onAction={action('Create project')}/>;break;
    case 'detail-view':content=<Blocks.DetailViewBlock title="Customer portal" status="In progress" fields={[{label:'Owner',value:'Alex Morgan'},{label:'Due date',value:'October 1, 2026'},{label:'Team',value:'Product'}]} onEdit={action('Edit project')}/>;break;
    case 'stats':content=<Blocks.StatsBlock items={[{label:'Active projects',value:'24',change:'+4 this month',trend:'positive'},{label:'Team members',value:'12',change:'+2 this month',trend:'positive'},{label:'Completed tasks',value:'148',change:'Across all projects',trend:'neutral'}]}/>;break;
    case 'hero':content=<Blocks.HeroBlock eyebrow="YOUR NEXT BIG IDEA" title="Make room for better work." description="One workspace to turn everyday ideas into remarkable things." primary={{label:'Get started',href}} secondary={{label:'See how it works',href}}/>;break;
    case 'features':content=<Blocks.FeaturesBlock title="Everything in its place." description="A toolkit designed around the way you work." items={[{title:'Make it yours',description:'Adapt every detail to fit your team.',icon:'◇'},{title:'Move together',description:'Keep everyone on the same page.',icon:'↗'},{title:'Stay focused',description:'Spend more time on what matters.',icon:'◎'}]}/>;break;
    case 'pricing':content=<Blocks.PricingBlock title="A plan for your next chapter." plans={[{name:'Personal',price:'$0',period:'/ month',description:'For individual projects.',features:['1 workspace','Community support'],href,action:'Start free'},{name:'Team',price:'$29',period:'/ month',description:'For teams building together.',features:['Unlimited workspaces','Priority support','Advanced permissions'],href,action:'Choose Team',featured:true}]}/>;break;
    case 'testimonials':content=<Blocks.TestimonialsBlock title="Sample testimonial layout" quotes={[{quote:'This is illustrative placeholder copy. Replace it with a real customer quote before publishing.',name:'Alex Morgan',role:'Sample customer'},{quote:'Use this space to show what your customers value about your product.',name:'Sam Taylor',role:'Sample customer'}]}/>;break;
    case 'faq':content=<Blocks.FaqBlock title="A few things to know." items={[{question:'Can I customize this block?',answer:'Yes. You own the source and can adapt it to your product.'},{question:'How do I connect real data?',answer:'Pass your records and action callbacks as typed React props.'},{question:'Does it require a SaaS connection?',answer:'No. Exported blocks work entirely in your application.'}]}/>;break;
    case 'cta':content=<Blocks.CtaBlock title="Your next idea starts here." description="Create something you’re proud to share." action={{label:'Start building',href}}/>;break;
    case 'footer':content=<Blocks.FooterBlock brand="Acme" description="A little more room for great work." groups={[{title:'Product',links:[{label:'Features',href},{label:'Pricing',href:href+'-projects'}]},{title:'Resources',links:[{label:'Documentation',href},{label:'Contact',href:href+'-settings'}]}]} copyright="© 2026 Acme. Sample company."/>;break;
    default:content=<p>Block unavailable.</p>;
  }
  return <div className="cr-block-demo"><p className="cr-demo-label">INTERACTIVE PREVIEW · SAMPLE DATA</p>{content}<p role="status" className="cr-description" style={{marginTop:20}}>{notice}</p><div id={anchor} className="cr-demo-destination"><span id={anchor+'-projects'}/><span id={anchor+'-settings'}/>Preview links stay in this example. Connect them to your application routes.</div></div>
}
