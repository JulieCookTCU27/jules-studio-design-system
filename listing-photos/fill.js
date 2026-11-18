window.__fill = async function(key){
 const RAWJ=window.__RAWJ||'https://raw.githubusercontent.com/JulieCookTCU27/jules-studio-design-system/ba761c33246f0d4e1109a8441daa36455c8b766a/listing-photos/listings.json';
 const L=await (await fetch(RAWJ)).json(); const d=L.find(x=>x.key===key); const log=[];
 const sleep=ms=>new Promise(r=>setTimeout(r,ms));
 const setVal=(el,v)=>{const p=el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:el.tagName==='SELECT'?HTMLSelectElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(p,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}));};
 // photos
 const have=document.querySelectorAll('img[src*="il_"]').length;
 if(have===0){
  const dt=new DataTransfer();
  for(const [i,u] of d.photos.entries()){const b=await (await fetch(u)).blob(); dt.items.add(new File([b],d.sku.toLowerCase()+'-'+(i+1)+'.jpg',{type:'image/jpeg'}));}
  const inp=(document.querySelector('input[type=file][name=listing-media-upload]')||document.querySelector('input[type=file]')); inp.files=dt.files; inp.dispatchEvent(new Event('change',{bubbles:true}));
  log.push('photos '+d.photos.length); await sleep(6000);
 }
 // category
 const cat=document.querySelector('label[for="inline-category-1027"]'); if(cat && !document.body.innerText.includes('Category changed to Wall Decor')){cat.click(); await sleep(1500);}
 setVal(document.getElementById('listing-title-input'),d.title);
 setVal(document.getElementById('listing-description-textarea'),d.desc);
 const price=document.getElementById('listing-price-input'); if(price) setVal(price,String(d.price));
 setVal(document.getElementById('listing-quantity-input'),String(d.qty));
 const sku=document.getElementById('listing-sku-input'); if(sku) setVal(sku,d.sku); else { const b=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Add SKU'); if(b){b.click(); await sleep(500); const s2=document.getElementById('listing-sku-input'); if(s2) setVal(s2,d.sku);} }
 // tags: remove existing
 for(let k=0;k<20;k++){const rm=[...document.querySelectorAll('button')].find(b=>/^Remove tag|Delete tag/i.test(b.getAttribute('aria-label')||'')); if(!rm) break; rm.click(); await sleep(150);}
 const ti=document.getElementById('listing-tags-input');
 for(const t of d.tags){Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(ti,t);ti.dispatchEvent(new Event('input',{bubbles:true}));await sleep(120);ti.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',code:'Enter',keyCode:13,bubbles:true}));await sleep(200);}
 // materials add-all
 for(const el of [...document.querySelectorAll('*')].filter(e=>e.childElementCount===0&&e.textContent.trim()==='Add all')){ (el.closest('button')||el).click(); await sleep(400);} 
 // how made
 const radio=(n,i)=>{const r=document.querySelectorAll('input[name="'+n+'"]')[i]; if(r&&!r.checked)(document.querySelector('label[for="'+r.id+'"]')||r).click();};
 radio('whoMade',0); radio('isSupply',0);
 const wm=document.getElementById('when-made-select'); const o=[...wm.options].find(o=>o.text.includes(d.ready?'2020':'Made To Order')); setVal(wm,o.value);
 // readiness
 const rs=[...document.querySelectorAll('input[name=readinessState]')].find(r=>document.querySelector('label[for="'+r.id+'"]')?.innerText.includes(d.ready?'Ready to ship':'Made to order'));
 if(rs&&!rs.checked){document.querySelector('label[for="'+rs.id+'"]').click(); await sleep(800);}
 // auto renew
 radio('shouldAutoRenew',0);
 log.push('filled');
 return log.join(', ');
};
'ok'
window.__fill2 = async function(key){
 const L=await (await fetch(window.__RAWJ)).json(); const d=L.find(x=>x.key===key); const log=[];
 const sleep=ms=>new Promise(r=>setTimeout(r,ms));
 const dlg=txt=>[...document.querySelectorAll('[role=dialog],[aria-modal=true]')].filter(e=>e.innerText.includes(txt)).pop();
 const btn=(root,txt)=>[...root.querySelectorAll('button')].find(b=>b.innerText.trim()===txt);
 const setIn=(el,v)=>{Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}));};
 // shipping
 if(!/Shipping option \n\nFree US shipping/.test(document.body.innerText)){ const b=btn(document,'Select profile')||btn(document,'Change'); b.click(); await sleep(2000); const dd=dlg('Shipping options'); const ap=[...dd.querySelectorAll('button')].filter(b=>b.innerText.trim()==='Apply').find(b=>{let p=b;for(let i=0;i<4;i++){p=p.parentElement;if(p.innerText.includes('Free US shipping')&&!p.innerText.includes('NA Shipping'))return true;}return false;}); ap.click(); await sleep(2000);} 
 log.push('ship:'+/Free US shipping/.test(document.body.innerText.match(/Shipping option[\s\S]{0,40}/)[0]));
 // returns
 if(!/Returns and exchanges \n\nNo returns/.test(document.body.innerText)){ btn(document,'Change policy').click(); await sleep(2000); const dd=dlg('Return and exchange'); const ap=[...dd.querySelectorAll('button')].filter(b=>b.innerText.trim()==='Apply this policy').find(b=>{let p=b;for(let i=0;i<5;i++){p=p.parentElement; if(p.innerText.includes('No returns or exchanges')&&!p.innerText.includes('Exchanges only')) return true;} return false;}); ap.click(); await sleep(1500);} 
 log.push('ret:'+/Returns and exchanges \n\nNo returns/.test(document.body.innerText));
 // variations
 if(d.display){
  btn(document,'Add variation').click(); await sleep(1500);
  btn(dlg('Add up to 3 variations'),'Create your own').click(); await sleep(1200);
  let cv=dlg('Custom variation'); setIn(cv.querySelector('#le-unstructured-variation-name-input'),'Display'); await sleep(300);
  for(const [o] of d.display){const i=dlg('Custom variation').querySelector('input[placeholder^="Enter an option"]'); Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(i,o); i.dispatchEvent(new Event('input',{bubbles:true})); await sleep(250); i.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',code:'Enter',keyCode:13,bubbles:true})); await sleep(500);} 
  btn(dlg('Custom variation'),'Done').click(); await sleep(2000);
  const mv=dlg('Manage variations'); const lab=[...mv.querySelectorAll('*')].find(e=>e.childElementCount<=2&&e.innerText?.trim().startsWith('Prices')&&e.innerText.includes('vary')&&e.tagName!=='INPUT');
  const sw=[...mv.querySelectorAll('input[type=checkbox]')].find(c=>mv.querySelector('label[for="'+c.id+'"]')?.innerText.includes('Prices vary'));
  (mv.querySelector('label[for="'+sw.id+'"]')).click(); await sleep(800);
  log.push('pv:'+sw.checked);
  btn(dlg('Manage variations'),'Apply').click(); await sleep(2000);
  d.display.forEach(([o,p],i)=>{const el=document.querySelector(`input[name="variations.tables.0.rows.${i}.controls.price"]`); if(el) setIn(el,String(p));});
  await sleep(500); log.push('prices:'+d.display.map((x,i)=>document.querySelector(`input[name="variations.tables.0.rows.${i}.controls.price"]`)?.value).join('/'));
 }
 // section
 const s=document.getElementById('shop-section-select'); let o=[...s.options].find(o=>o.text===d.section);
 if(!o){Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value').set.call(s,'1'); s.dispatchEvent(new Event('change',{bubbles:true})); await sleep(1500); const nd=dlg('New Section'); setIn(nd.querySelector('#section'),d.section); await sleep(300); btn(nd,'Save').click(); await sleep(2500);} else {Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value').set.call(s,o.value); s.dispatchEvent(new Event('change',{bubbles:true}));}
 log.push('section:'+s.options[s.selectedIndex].text);
 const f=document.getElementById('listing-featured-rank-checkbox'); if(d.feature&&!f.checked){(document.querySelector('label[for="listing-featured-rank-checkbox"]')||f).click(); await sleep(400);} log.push('feat:'+f.checked);
 return log.join(', ');
};
window.__pub=async()=>{ const sleep=ms=>new Promise(r=>setTimeout(r,ms)); await sleep(3000);
 const b=[...document.querySelectorAll('button')].find(b=>['Change profile','Add profile'].includes(b.innerText.trim())); b.click(); await sleep(2000);
 const pd=[...document.querySelectorAll('[role=dialog],[aria-modal=true]')].find(e=>e.innerText.startsWith('Your processing profiles'));
 const ap=[...pd.querySelectorAll('button')].filter(b=>b.innerText.trim()==='Apply').find(b=>{let p=b;for(let i=0;i<4;i++){p=p.parentElement; if(/Ready to ship/.test(p.innerText)&&/1-2 days/.test(p.innerText)&&!/weeks|5-7/.test(p.innerText))return true;}return false;});
 ap.click(); await sleep(2000);
 const pb=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Publish with changes')||[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='Publish'); const lbl=pb.innerText.trim(); pb.click(); await sleep(3500);
 const d=[...document.querySelectorAll('[role=dialog],[aria-modal=true],.wt-overlay')].find(e=>e.getBoundingClientRect().height>0&&e.innerText.includes('publish a new listing'));
 if(d){[...d.querySelectorAll('button')].find(b=>b.innerText.trim()==='Publish').click(); await sleep(5000);}
 return JSON.stringify({lbl, dialog:!!d, url:location.href.slice(-30)}); };
