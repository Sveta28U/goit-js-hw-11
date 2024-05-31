import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const a="22356210-f5a6fb995cd777b2b01184cc9",l="https://pixabay.com/api/";function u(s){const e=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${l}/?${e}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json("")})}function f(s){return s.map(e=>`<li class='photo-card'>
    <a href='${e.largeImageURL}'>
      <img src='${e.webformatURL}' alt='${e.tags}' loading='lazy' />
    </a>
    <div class='info'>
      <p class='info-item'>
        <b>Likes ${e.likes}</b>
      </p>
      <p class='info-item'>
        <b>Views ${e.views}</b>
      </p>
      <p class='info-item'>
        <b>Comments ${e.comments}</b>
      </p>
      <p class='info-item'>
        <b>Downloads ${e.downloads}</b>
      </p>
    </div>
  </li>
  `).join("")}const m=document.querySelector(".search-form"),p=document.querySelector(".gallery");m.addEventListener("submit",d);function d(s){s.preventDefault();const e=s.currentTarget.elements.searchQuery.value.trim();u(e).then(r=>{r.hits.length===0&&c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(r),p.innerHTML=f(r.hits)}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
