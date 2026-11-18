window.__fill = async function(key){
 const RAWJ='https://raw.githubusercontent.com/JulieCookTCU27/jules-studio-design-system/ba761c33246f0d4e1109a8441daa36455c8b766a/listing-photos/listings.json';
 const L=await (await fetch(RAWJ)).json(); const d=L.find(x=>x.key===key); const log=[];
 const sleep=ms=>new Promise(r=>setTimeout(r,ms));
 const setVal=(el,v)=>{const p=el.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:el.tagName==='SELECT'?HTMLSelectElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(p,'value').set.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));el.dispatchEvent(new Event('blur',{bubbles:true}));};
 // photos
 const have=document.querySelectorAll('img[src*="il_"]').length;
 if(have===0){
  const dt=new DataTransfer();
  for(const [i,u] of d.photos.entries()){const b=await (await fetch(u)).blob(); dt.items.add(new File([b],d.sku.toLowerCase()+'-'+(i+1)+'.jpg',{type:'image/jpeg'}));}
  const inp=document.querySelector('input[type=file][name=listing-media-upload]'); inp.files=dt.files; inp.dispatchEvent(new Event('change',{bubbles:true}));
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
