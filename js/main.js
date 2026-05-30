// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// Sticky nav highlight on scroll
const sections = document.querySelectorAll('section[id], div[id="top"]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(s=>{
    if(window.scrollY >= s.offsetTop - 80) current = s.getAttribute('id');
  });
  navLinks.forEach(a=>{
    a.style.color = a.getAttribute('href')==='#'+current ? 'var(--or)' : '';
  });
});

// Template Store filter
var tplActiveCat='all';
function tplCat(btn,cat){
  tplActiveCat=cat;
  document.querySelectorAll('.tpl-fb').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  tplRun();
}
function tplRun(){
  var q=document.getElementById('tplQ').value.toLowerCase().trim();
  var cards=document.querySelectorAll('#popGrid .tc2,#allGrid .tc2');
  var total=0;
  cards.forEach(function(c){
    var cat=c.getAttribute('data-cat')||'';
    var kw=(c.getAttribute('data-kw')||'').toLowerCase();
    var catOk=tplActiveCat==='all'||cat===tplActiveCat;
    var qOk=!q||kw.includes(q)||cat.includes(q);
    if(catOk&&qOk){c.classList.remove('hidden');total++;}
    else{c.classList.add('hidden');}
  });
  var popVis=document.querySelectorAll('#popGrid .tc2:not(.hidden)').length;
  document.getElementById('popHead').style.display=popVis?'block':'none';
  document.getElementById('popGrid').style.display=popVis?'grid':'none';
  document.getElementById('tplNR').style.display=total===0?'block':'none';
}
