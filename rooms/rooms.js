(function(){var L=window.CDP_LINKS||{};document.querySelectorAll('a.level[data-link]').forEach(function(a){var u=L[a.getAttribute('data-link')];if(u){a.href=u;a.target='_blank';a.rel='noopener';a.removeAttribute('aria-disabled');}else{a.addEventListener('click',function(e){e.preventDefault();});}});})();

(function(){var s=document.currentScript,p=location.pathname.toLowerCase();
var F={'sala-de-aulas':['elsa',124],'biblioteca':['leonor',124],'cozinha':['maria',104],'jardins':['joaquim',172]};
var k=Object.keys(F).filter(function(r){return p.indexOf('/'+r+'/')>-1})[0];
var l=document.querySelector('.levels');if(!k||!s||!l)return;
var i=document.createElement('img');i.className='peek';i.setAttribute('data-r',F[k][0]);i.alt='';i.setAttribute('aria-hidden','true');i.width=F[k][1];
i.src=new URL('../images/figures/'+F[k][0]+'.svg',s.src).href;l.appendChild(i);})();
