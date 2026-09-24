(function(){
var DICT={
"ABOUT US":"ကျွန်ုပ်တို့အကြောင်း","PLATFORM":"ပလက်ဖောင်း","NEWSROOM":"သတင်းများ",
"CAREERS":"အလုပ်အကိုင်များ","CONTACT":"ဆက်သွယ်ရန်","GET ZENO APP":"Zeno အက်ပ်ရယူရန်",
"For agents":"အေးဂျင့်များအတွက်","For developers":"ဒီဗလော့ပါများအတွက်","Partner program":"မိတ်ဖက်အစီအစဉ်",
"Platform":"ပလက်ဖောင်း","Resources":"အရင်းအမြစ်များ","Company":"ကုမ္ပဏီ","Partners":"မိတ်ဖက်များ","Download":"ဒေါင်းလုဒ်",
"Zeno Buy":"Zeno ဝယ်ယူရန်","Zeno Rent":"Zeno ငှားရန်","Zeno Sell":"Zeno ရောင်းရန်","Zeno Invest":"Zeno ရင်းနှီးမြှုပ်နှံရန်",
"Mobile app":"မိုဘိုင်းအက်ပ်","FAQ":"မေးလေ့ရှိသောမေးခွန်းများ","About us":"ကျွန်ုပ်တို့အကြောင်း","Contact us":"ဆက်သွယ်ရန်",
"Help Center →":"အကူအညီစင်တာ →","Terms":"စည်းမျဉ်းစည်းကမ်းများ","Privacy policy":"ကိုယ်ရေးအချက်အလက်မူဝါဒ","Cookie policy":"Cookie မူဝါဒ",
"Copyright © 2026 Zeno Property Co.,ltd,. All Right Reserved.":"မူပိုင်ခွင့် © ၂၀၂၆ Zeno Property Co.,LTD။ မူပိုင်ခွင့်အားလုံးကို ကာကွယ်ထားသည်။",
"Copyright © 2026 Zeno Property Co.,LTD. All Right Reserved.":"မူပိုင်ခွင့် © ၂၀၂၆ Zeno Property Co.,LTD။ မူပိုင်ခွင့်အားလုံးကို ကာကွယ်ထားသည်။",
"The":"ဤ","Trusted":"ယုံကြည်ရသော","Property":"အိမ်ခြံမြေ","For":"အတွက်","ASEAN":"အာဆီယံ",
"The Trusted":"ယုံကြည်စိတ်ချရသော","Platform For":"ပလက်ဖောင်း",
"Southeast Asia's property market is vast and often opaque. Zeno exists to close that gap: connecting serious buyers, sellers, and investors with verified opportunities across Thailand, Myanmar, and ASEAN, through a seamless, hassle-free experience built on trust.":"အရှေ့တောင်အာရှ၏ အိမ်ခြံမြေဈေးကွက်သည် ကျယ်ပြန့်ပြီး ပွင့်လင်းမှုနည်းပါးလေ့ရှိသည်။ Zeno သည် ထိုကွာဟချက်ကို ဖြေရှင်းရန် တည်ထောင်ထားပါသည်။ ယုံကြည်စိတ်ချရသော အတွေ့အကြုံဖြင့် ထိုင်း၊ မြန်မာနှင့် အာဆီယံတစ်ဝှမ်းရှိ အတည်ပြုပြီးသား အခွင့်အလမ်းများနှင့် ဝယ်သူ၊ ရောင်းသူနှင့် ရင်းနှီးမြှုပ်နှံသူများကို ချိတ်ဆက်ပေးပါသည်။",
"Every home, in every light. Browse verified listings around the clock.":"နေ့ည မရွေး၊ အိမ်တိုင်းကို ကြည့်ရှုနိုင်သည်။ အချိန်မရွေး အတည်ပြုပြီးသား စာရင်းများကို ရှာဖွေပါ။",
"Day":"နေ့","Night":"ညနေ",
"Our Rationale":"ကျွန်ုပ်တို့၏ အကြောင်းရင်း","Why Zeno Exists":"Zeno အဘယ်ကြောင့်တည်ရှိသနည်း",
"Where We Are Going":"ကျွန်ုပ်တို့ ဦးတည်နေရာ","Our Vision for ASEAN Property":"အာဆီယံ အိမ်ခြံမြေအတွက် ကျွန်ုပ်တို့၏ မျှော်မှန်းချက်",
"Core Brand Pillars":"ကုမ္ပဏီ၏ အဓိကတန်ဖိုးများ","Our Value System":"ကျွန်ုပ်တို့၏ တန်ဖိုးစနစ်",
"The Zeno Service Charter":"Zeno ဝန်ဆောင်မှု သဘောတူညီချက်","Our Promise to Every Client":"ဖောက်သည်တိုင်းအတွက် ကျွန်ုပ်တို့၏ကတိကဝတ်",
"Our Region":"ကျွန်ုပ်တို့ဒေသ","Built for Southeast Asia":"အရှေ့တောင်အာရှအတွက် တည်ဆောက်ထားသည်",
"How to join":"ပါဝင်ရန် နည်းလမ်း","Becoming a Zeno agent":"Zeno အေးဂျင့်တစ်ဦး ဖြစ်လာခြင်း",
"Incentives and benefits":"အားပေးမှုနှင့် အကျိုးကျေးဇူးများ","What you get for meeting the standard":"စံနှုန်းနှင့်ကိုက်ညီပါက ရရှိမည့်အရာများ",
"Agent tiers":"အေးဂျင့်အဆင့်များ","Earn your way up":"အဆင့်မြှင့်တင်ပါ",
"Rules and regulations":"စည်းမျဉ်းစည်းကမ်းများ","The Zeno agent code of conduct":"Zeno အေးဂျင့် ကျင့်ဝတ်စည်းကမ်း",
"Agent questions":"အေးဂျင့်များ မေးလေ့ရှိသောမေးခွန်းများ","Before you apply":"လျှောက်ထားခြင်းမပြုမီ",
"Ready to work with better clients?":"ပိုမိုကောင်းမွန်သော ဖောက်သည်များနှင့် အလုပ်လုပ်ရန် အသင့်ရှိပါသလား?",
"Why partner with Zeno":"Zeno နှင့် အဘယ်ကြောင့်ပူးပေါင်းသင့်သနည်း","Benefits of being a Zeno developer":"Zeno ဒီဗလော့ပါတစ်ဦးဖြစ်ခြင်း၏ အကျိုးကျေးဇူးများ",
"Exclusive partnership":"အထူးပူးပေါင်းဆောင်ရွက်မှု","Becoming an exclusive Zeno developer":"Zeno ၏ အထူးဒီဗလော့ပါတစ်ဦးဖြစ်လာခြင်း",
"Developer enquiry":"ဒီဗလော့ပါ စုံစမ်းမှု","Submit your development":"သင့်ပရောဂျက်ကို တင်သွင်းပါ",
"Have questions before you submit?":"တင်သွင်းခြင်းမပြုမီ မေးခွန်းများရှိပါသလား?",
"What the programme gives you":"ဤအစီအစဉ်က သင့်အား ပေးစွမ်းသည့်အရာများ",
"Partner tracks":"မိတ်ဖက်လမ်းကြောင်းများ","Six ways to work with Zeno":"Zeno နှင့် အလုပ်လုပ်ရန် နည်းလမ်းခြောက်ခု",
"How it works":"လုပ်ဆောင်ပုံ","From enquiry to live partnership":"စုံစမ်းမှုမှ တကယ့်မိတ်ဖက်အဖြစ်",
"Partner enquiry":"မိတ်ဖက် စုံစမ်းမှု","Apply to the partner program":"မိတ်ဖက်အစီအစဉ်သို့ လျှောက်ထားပါ",
"Not sure which track fits?":"မည်သည့်လမ်းကြောင်း သင့်လျော်သည်ကို မသေချာပါက",
"Leading the way in property innovation.":"အိမ်ခြံမြေ ဆန်းသစ်တီထွင်မှုတွင် ဦးဆောင်လျက်",
"Leading the way in property innovation":"အိမ်ခြံမြေ ဆန်းသစ်တီထွင်မှုတွင် ဦးဆောင်လျက်",
"Buy with Zeno Property":"Zeno Property နှင့်အတူ ဝယ်ယူပါ",
"Sell with Zeno Property":"Zeno Property နှင့်အတူ ရောင်းချပါ",
"Invest with Zeno Property":"Zeno Property နှင့်အတူ ရင်းနှီးမြှုပ်နှံပါ",
"For Professionals":"ကျွမ်းကျင်ပညာရှင်များအတွက်","Grow your business on ASEAN's Most Intelligent Platform":"အာဆီယံ၏ ထိပ်တန်း ပလက်ဖောင်းတွင် သင့်လုပ်ငန်းကို တိုးချဲ့ပါ",
"Support":"အကူအညီ","Frequently Asked Questions":"မေးလေ့ရှိသောမေးခွန်းများ",
"Get In Touch":"ဆက်သွယ်ရန်","We'd Love to Hear from You.":"သင့်ထံမှ ကြားလိုပါသည်။",
"General Enquiry":"အထွေထွေ စုံစမ်းမှု","We're Listening":"ကျွန်ုပ်တို့ နားထောင်နေပါသည်",
"Prefer to Call?":"ဖုန်းခေါ်လိုပါသလား?","Our Locations":"ကျွန်ုပ်တို့၏ တည်နေရာများ",
"Find us in Bangkok & Yangon":"ဘန်ကောက်နှင့် ရန်ကုန်တွင် ကျွန်ုပ်တို့ကို ရှာဖွေပါ",
"Follow Zeno Property":"Zeno Property ကို လိုက်နာပါ","Stay connect across every Channel":"လမ်းကြောင်းအားလုံးတွင် ဆက်သွယ်နေပါ",
"Zeno Newsroom":"Zeno သတင်းစင်တာ","Stories that matter the most.":"အရေးအကြီးဆုံးသော ဇာတ်လမ်းများ",
"Join the Team":"အဖွဲ့သို့ ပါဝင်ပါ","Our Culture":"ကျွန်ုပ်တို့၏ ယဉ်ကျေးမှု","Our core":"ကျွန်ုပ်တို့၏ အဓိကတန်ဖိုး",
"Why Join Us":"အဘယ်ကြောင့် ကျွန်ုပ်တို့နှင့် ပါဝင်သင့်သနည်း","Means":"အဓိပ္ပာယ်","What it means to be a Zeno":"Zeno တစ်ဦးဖြစ်ခြင်း၏ အဓိပ္ပာယ်",
"Join Our Team":"ကျွန်ုပ်တို့အဖွဲ့သို့ ပါဝင်ပါ","Are you ready to be more?":"ပိုမို ဖြစ်လာဖို့ အသင့်ရှိပါသလား?",
"Market Intelligence":"ဈေးကွက်သတင်းအချက်အလက်","Market Intelligence for ASEAN":"အာဆီယံအတွက် ဈေးကွက်သတင်းအချက်အလက်",
"What's new on Zeno":"Zeno တွင် အသစ်ဖြစ်နေသောအရာများ","Latest Updates":"နောက်ဆုံးရ အချက်အလက်များ",
"Terms of Service":"ဝန်ဆောင်မှု စည်းကမ်းချက်များ","Privacy Policy":"ကိုယ်ရေးအချက်အလက်မူဝါဒ","Cookie Policy":"Cookie မူဝါဒ",
"Properties listed":"စာရင်းသွင်းထားသော အိမ်ခြံမြေများ","Verified agencies":"အတည်ပြုပြီးသား အေးဂျင်စီများ",
"Properties sold":"ရောင်းချပြီးသော အိမ်ခြံမြေများ","Client satisfaction":"ဖောက်သည်စိတ်ကျေနပ်မှု",
"Mobile first experience":"မိုဘိုင်းဦးစားပေး အတွေ့အကြုံ",
"Every detail is designed to align with the needs of the discerning property seeker. We combine the finest of technology with the trust of a dedicated concierge team so you can search, discover, and close with total confidence.":"အသေးစိတ်တိုင်းကို အိမ်ခြံမြေရှာဖွေသူများ၏ လိုအပ်ချက်နှင့်ကိုက်ညီအောင် ဒီဇိုင်းရေးဆွဲထားပါသည်။ နည်းပညာအကောင်းဆုံးနှင့် ကျွန်ုပ်တို့၏ ကွန်စီယာချ်အဖွဲ့၏ ယုံကြည်မှုကို ပေါင်းစပ်ထားသဖြင့် သင်စိတ်ချစွာ ရှာဖွေ၊ ရှာတွေ့ပြီး ပြီးမြောက်စေနိုင်ပါသည်။",
"Buyers & Sellers Database":"ဝယ်သူနှင့် ရောင်းသူ ဒေတာဘေ့စ်",
"Smart recommendations based on your lifestyle and budget. The more you interact, the smarter the matches become.":"သင့်နေထိုင်မှုပုံစံနှင့် ဘတ်ဂျက်အပေါ် အခြေခံသော ထောက်ခံချက်များ။ အသုံးပြုလေ၊ ကိုက်ညီမှုစမတ်ကျလေ ဖြစ်ပါသည်။",
"Investment":"ရင်းနှီးမြှုပ်နှံမှု",
"Every agent passes rigorous vetting for trust and quality. Connect directly through the app to book viewings.":"အေးဂျင့်တိုင်းသည် ယုံကြည်မှုနှင့် အရည်အသွေးအတွက် တင်းကျပ်သော စစ်ဆေးမှုကို ဖြတ်သန်းရပါသည်။ ကြည့်ရှုချိန်များကို အက်ပ်မှတစ်ဆင့် တိုက်ရိုက်စာရင်းသွင်းနိုင်ပါသည်။",
"Market Intelligence for ASEAN properties":"အာဆီယံ အိမ်ခြံမြေများအတွက် ဈေးကွက်သတင်းအချက်အလက်",
"Real-time valuations, price history, and neighbourhood data so you can make confident, data-backed decisions.":"အချိန်နှင့်တပြေးညီ တန်ဖိုးဖြတ်မှု၊ စျေးနှုန်းမှတ်တမ်းနှင့် ဒေသဆိုင်ရာအချက်အလက်များဖြင့် ယုံကြည်စိတ်ချစွာ ဆုံးဖြတ်နိုင်ပါသည်။",
"Cross-Border Search":"နယ်စည်းခြားကျော် ရှာဖွေမှု",
"Browse properties across Thailand, Myanmar, and all of ASEAN from a single unified platform.":"ထိုင်း၊ မြန်မာနှင့် အာဆီယံတစ်ခုလုံးရှိ အိမ်ခြံမြေများကို ပလက်ဖောင်းတစ်ခုတည်းမှ ရှာဖွေနိုင်ပါသည်။",
"End-to-End Support":"အစမှအဆုံး ပံ့ပိုးမှု",
"From search to settlement, guided every step of the way with legal support and full transparency.":"ရှာဖွေခြင်းမှ ပြီးမြောက်ခြင်းအထိ ဥပဒေရေးရာ ပံ့ပိုးမှုနှင့် ပွင့်လင်းမှုအပြည့်ဖြင့် လမ်းညွှန်ပေးပါသည်။",
"Sample Title":"နမူနာခေါင်းစဉ်",
"Sample paragraph placeholder. Replace this copy with the description you provide.":"နမူနာစာပိုဒ် နေရာယူထားခြင်း။ ဤစာသားကို သင်ပေးမည့်ဖော်ပြချက်ဖြင့် အစားထိုးပါ။",
"One ecosystem, infinite possibilities":"စနစ်တစ်ခုတည်း၊ အလားအလာအဆုံးမရှိ",
"Everything you need to buy, sell, and invest across ASEAN":"အာဆီယံတစ်ဝှမ်း ဝယ်ယူ၊ ရောင်းချ၊ ရင်းနှီးမြှုပ်နှံရန် လိုအပ်သမျှ",
"AI powered matching":"AI ဖြင့် ကိုက်ညီမှုရှာဖွေခြင်း",
"We understand more about those looking for a home. AI that learns your taste of the market.":"အိမ်ရှာနေသူများအကြောင်း ပိုမိုနားလည်ပါသည်။ သင့်ဈေးကွက်ဆန္ဒကို သင်ယူနိုင်သော AI။",
"Top vetted advantage":"အကောင်းဆုံး စစ်ဆေးထားသော အားသာချက်",
"We combine technology with the expertise of our dedicated team to help you find the best deals.":"အကောင်းဆုံးသော ဈေးနှုန်းများကို ရှာဖွေနိုင်ရန် နည်းပညာနှင့် ကျွန်ုပ်တို့၏ ကျွမ်းကျင်အဖွဲ့ကို ပေါင်းစပ်ထားပါသည်။",
"Radical transparency":"အပြည့်အဝ ပွင့်လင်းမှု",
"Every listing is verified and supported by our dedicated analysts, so you can trust us to be honest.":"စာရင်းသွင်းမှုတိုင်းကို ကျွန်ုပ်တို့၏ ခွဲခြမ်းစိတ်ဖြာသူများက အတည်ပြုပြီး ပံ့ပိုးပေးပါသည်။",
"Regional intelligence":"ဒေသဆိုင်ရာ အသိပညာ",
"From Thailand to Myanmar, south to the entire ASEAN region. Our local experts know every market.":"ထိုင်းမှ မြန်မာအထိ၊ အာဆီယံဒေသတစ်ခုလုံးအထိ။ ကျွန်ုပ်တို့၏ ဒေသတွင်း ကျွမ်းကျင်သူများသည် ဈေးကွက်တိုင်းကို သိရှိပါသည်။",
"One platform, every solution":"ပလက်ဖောင်းတစ်ခုတည်း၊ ဖြေရှင်းချက်အားလုံး",
"Everything you need to buy, sell, rent, and invest":"ဝယ်ယူ၊ ရောင်းချ၊ ငှားရမ်း၊ ရင်းနှီးမြှုပ်နှံရန် လိုအပ်သမျှ",
"A full-spectrum platform driving intelligent technology, institutional expertise, and expert human guidance. Four tools to simplify your ASEAN real estate journey.":"အသိပညာရှိသော နည်းပညာ၊ အဖွဲ့အစည်းအသိပညာနှင့် ကျွမ်းကျင်သူများ၏ လမ်းညွှန်မှုကို ပေါင်းစပ်ထားသော ပလက်ဖောင်းတစ်ခု။ သင့်အာဆီယံ အိမ်ခြံမြေခရီးကို ရိုးရှင်းစေမည့် ကိရိယာလေးမျိုး။",
"Discover your ideal property with our AI-powered search and recommendation engine. Smart filters, virtual tours, and instant alerts for every listing.":"AI ဖြင့်ပါဝါရှာဖွေရေးစနစ်ဖြင့် သင့်အိမ်ကို ရှာဖွေပါ။ စမတ်ဖစ်တာများ၊ virtual ခရီးစဉ်များနှင့် စာရင်းတိုင်းအတွက် ချက်ချင်းအကြောင်းကြားချက်များ။",
"Coming Soon":"မကြာမီရောက်ရှိမည်",
"Find rental homes that match your lifestyle. Short-term, long-term, furnished. Every unit verified.":"သင့်နေထိုင်မှုပုံစံနှင့်ကိုက်ညီသော ငှားရမ်းအိမ်များကို ရှာဖွေပါ။ ရေတိုနှင့် ရေရှည်၊ ပရိဘောဂပါ။ ယူနစ်တိုင်းကို အတည်ပြုထားသည်။",
"List your property, find first-matched buyers. Automated valuations, qualified agents always ready.":"သင့်အိမ်ခြံမြေကို စာရင်းသွင်းပြီး ကိုက်ညီသော ဝယ်သူများကို ရှာဖွေပါ။ အလိုအလျောက် တန်ဖိုးဖြတ်မှုနှင့် အရည်အချင်းပြည့်မီသော အေးဂျင့်များ အသင့်ရှိပါသည်။",
"Market insights · AI analysis · Live properties":"ဈေးကွက်အချက်အလက် · AI ခွဲခြမ်းစိတ်ဖြာမှု · တိုက်ရိုက်အိမ်ခြံမြေများ",
"Stay ahead with the latest in ASEAN real estate":"အာဆီယံ အိမ်ခြံမြေ နောက်ဆုံးရသတင်းများဖြင့် ရှေ့ဆောင်နေပါ",
"Zeno distills the most important ASEAN real estate news, verified by our local agents. Be the first to know what to stand by, buy, or sell. With clarity, always.":"Zeno သည် ကျွန်ုပ်တို့၏ ဒေသတွင်းအေးဂျင့်များက အတည်ပြုထားသော အရေးကြီးဆုံးအာဆီယံ အိမ်ခြံမြေသတင်းများကို နှစ်ချုပ်ဖော်ပြပါသည်။ ရပ်တည်ရန်၊ ဝယ်ရန် သို့မဟုတ် ရောင်းရန် အရင်ဆုံးသိရှိပါ။",
"Find your corner":"သင့်နေရာကို ရှာဖွေပါ",
"Find your place in Southeast Asia":"အရှေ့တောင်အာရှတွင် သင့်နေရာကို ရှာဖွေပါ",
"Whether you're buying, selling, renting, or investing, Zeno Property puts the entire region in your pocket.":"ဝယ်ယူ၊ ရောင်းချ၊ ငှားရမ်း သို့မဟုတ် ရင်းနှီးမြှုပ်နှံသည်ဖြစ်စေ Zeno Property သည် ဒေသတစ်ခုလုံးကို သင့်လက်ထဲတွင် ထားပေးပါသည်။",
"Scan to download":"ဒေါင်းလုဒ်ရယူရန် စကင်ဖတ်ပါ"
};
function norm(s){return (s||'').replace(/\s+/g,' ').trim();}
function getLang(){return localStorage.getItem('zeno-lang')||'en';}
function translateLeaf(el, lang){
  var key = norm(el.textContent);
  if (!key) return;
  if (lang==='my'){
    if (!el.dataset.enOrig) el.dataset.enOrig = el.textContent;
    var t = DICT[key];
    if (t) el.textContent = t;
  } else if (el.dataset.enOrig){
    el.textContent = el.dataset.enOrig;
  }
}
function walk(el, lang){
  if (!el.children || el.children.length === 0){ translateLeaf(el, lang); return; }
  Array.prototype.forEach.call(el.children, function(c){ walk(c, lang); });
}
function apply(lang){
  document.documentElement.setAttribute('lang', lang==='my'?'my':'en');
  var sel = ['.nav-left a','.nav-right-group a','.footer-col-title','.footer-help-label',
    '.footer-col ul a','.footer-help-link','.footer-copyright','.footer-legal-links a',
    '.overline','h2.sec','h1','h2','.hero-sub','.hero-toggle-btn','.hero-toggle-caption',
    '.hero-badge','.hero-eyebrow','.stat-label','.sec-sub','.updated','.jobs-hero h1',
    '.app-sub','.app-frow-title','.app-frow-desc','.section-sub','.feature-title','.feature-desc',
    '.platform-card-title','.platform-card-desc','.platform-card-soon','.cta-sub','.qr-caption'];
  document.querySelectorAll(sel.join(',')).forEach(function(el){ walk(el, lang); });
  document.querySelectorAll('.lang-dropdown [data-lang]').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-lang')===lang);
  });
  var label = document.querySelector('.lang-current');
  if (label) label.textContent = lang==='my' ? 'MY' : 'EN';
}
function setLang(l){ localStorage.setItem('zeno-lang', l); apply(l); }
function init(){
  apply(getLang());
  document.querySelectorAll('.lang-dropdown [data-lang]').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); var d=b.closest('.lang-dropdown'); if(d) d.classList.remove('open'); });
  });
  document.querySelectorAll('.lang-trigger').forEach(function(trigger){
    trigger.addEventListener('click', function(e){ e.stopPropagation(); trigger.closest('.lang-dropdown').classList.toggle('open'); });
  });
  document.addEventListener('click', function(){
    document.querySelectorAll('.lang-dropdown.open').forEach(function(d){ d.classList.remove('open'); });
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
window.ZenoI18n = {getLang:getLang, setLang:setLang, apply:apply};
})();
