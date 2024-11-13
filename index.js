import{S as p,i}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h="47057239-824e754b75c5fca36ae14ba66",y="https://pixabay.com/api/";async function g(o,t=1,a=12){const s=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:a});try{const e=await fetch(`${y}?${s}`);if(!e.ok)throw new Error("Error fetching images");return await e.json()}catch(e){throw console.error(e),e}}let c;function b(o){const t=document.querySelector(".gallery"),a=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:n,views:f,comments:d,downloads:m})=>`
      <div class="photo-card">
        <a href="${e}">
          <img src="${s}" alt="${r}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${n}</p>
          <p><b>Views:</b> ${f}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${m}</p>
        </div>
      </div>`).join("");t.innerHTML=a,w()}function L(){document.querySelector(".gallery").innerHTML=""}function w(){c?c.refresh():c=new p(".gallery a")}const S=document.querySelector("#search-form"),u=document.querySelector(".loader");let l="";S.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.target.elements.searchQuery.value.trim(),!l){i.error({title:"Error",message:"Please enter a search query."});return}L(),u.classList.remove("hidden");try{const t=await g(l);if(t.hits.length===0){i.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(t.hits)}catch{i.error({title:"Error",message:"Something went wrong, please try again."})}finally{u.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
