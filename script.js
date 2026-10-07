(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add('in')})}
var fb=document.querySelectorAll('.filters button');
fb.forEach(function(x){x.addEventListener('click',function(){fb.forEach(function(y){y.classList.remove('on')});x.classList.add('on');document.querySelectorAll('.proj').forEach(function(p){p.hidden=x.dataset.f!=='all'&&p.dataset.cat!==x.dataset.f})})});
var f=document.getElementById('cf');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var ok=true,s=document.getElementById('fs');
f.querySelectorAll('input,textarea').forEach(function(i){var bad=!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value));i.classList.toggle('err',bad);if(bad)ok=false});
if(!ok){s.textContent='Please fill in all fields with valid details.';return}
var d=f.elements;location.href='mailto:sunbulbroter@gmail.com?subject='+encodeURIComponent(d.subject.value)+'&body='+encodeURIComponent(d.msg.value+'\n\nFrom: '+d.name.value+' ('+d.email.value+')');
s.textContent='Opening your email app. If nothing happens, email me directly.'});
var p=document.getElementById('pr');if(p)p.addEventListener('click',function(e){e.preventDefault();window.print()});
})();
(function(){
var ENDPOINT='/.netlify/functions/chat';
var btn=document.getElementById('cbtn'),pn=document.getElementById('cpanel');if(!btn)return;
var log=document.getElementById('cmsg'),fm=document.getElementById('cform'),inp=document.getElementById('cin'),sug=document.getElementById('csug'),hist=[],busy=false;
function toggle(o){pn.hidden=!o;btn.setAttribute('aria-expanded',o);if(o)inp.focus()}
btn.addEventListener('click',function(){toggle(pn.hidden)});
document.getElementById('cx').addEventListener('click',function(){toggle(false);btn.focus()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!pn.hidden)toggle(false)});
function add(t,c){var p=document.createElement('p');p.className=c;p.textContent=t;log.appendChild(p);log.scrollTop=log.scrollHeight;return p}
function ask(q){
 q=q.trim();if(!q||busy)return;busy=true;sug.hidden=true;add(q,'me');hist.push({role:'user',text:q});inp.value='';
 var w=add('Typing...','bot');
 fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:hist.slice(-8)})})
 .then(function(r){if(r.status===429)throw new Error('rate');if(!r.ok)throw new Error('x');return r.json()})
 .then(function(d){w.textContent=d.reply;hist.push({role:'model',text:d.reply})})
 .catch(function(e){hist.pop();w.textContent=e.message==='rate'?'Too many questions for now. Please try again in a few minutes.':'The assistant is not available right now. You can email sunbulbroter@gmail.com.'})
 .then(function(){busy=false;log.scrollTop=log.scrollHeight});
}
fm.addEventListener('submit',function(e){e.preventDefault();ask(inp.value)});
sug.addEventListener('click',function(e){if(e.target.tagName==='BUTTON')ask(e.target.textContent)});
})();
