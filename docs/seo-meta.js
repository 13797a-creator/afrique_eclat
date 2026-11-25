(()=>{
  const site='https://13797a-creator.github.io/afrique_eclat/';
  const path=location.pathname;
  const file=path.split('/').pop()||'index.html';
  const params=new URLSearchParams(location.search);
  const canonical=new URL(file,site);
  if((file==='livre.html'||file==='auteur.html')&&params.has('id'))canonical.searchParams.set('id',params.get('id'));
  const title=document.title||'Éditions Afrique Éclat';
  const description=document.querySelector('meta[name="description"]')?.content||'Maison d’édition et organisation pour la promotion des arts et des lettres.';
  const image=new URL('assets/carnet-cover.webp',site).href;
  const set=(key,value,property=false)=>{
    const selector=property?`meta[property="${key}"]`:`meta[name="${key}"]`;
    let tag=document.head.querySelector(selector);
    if(!tag){tag=document.createElement('meta');tag.setAttribute(property?'property':'name',key);document.head.append(tag)}
    tag.content=value;
  };
  let link=document.head.querySelector('link[rel="canonical"]');
  if(!link){link=document.createElement('link');link.rel='canonical';document.head.append(link)}
  link.href=canonical.href;
  set('og:type','website',true);
  set('og:site_name','Éditions Afrique Éclat',true);
  set('og:locale','fr_FR',true);
  set('og:title',title,true);
  set('og:description',description,true);
  set('og:url',canonical.href,true);
  set('og:image',image,true);
  set('og:image:alt','Les Éditions Afrique Éclat, maison d’édition au Bénin et présente au Sénégal',true);
  set('twitter:card','summary_large_image');
  set('twitter:title',title);
  set('twitter:description',description);
  set('twitter:image',image);
})();
