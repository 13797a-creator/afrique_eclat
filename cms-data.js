(function(){
  const KEY='ae-content-v1';
  const NEWS=[
    {id:'story-mere-afrique',kind:'Parution',image:'assets/carnet-poetry.webp',imageAlt:'Manuscrit de poésie posé sur une étoffe indigo',imageLabel:'POÉSIE · 2025',eyebrow:'UN RECUEIL · 54 POÈMES',title:'Écrire l’Afrique au pluriel.',excerpt:'Avec Mère Afrique, Manuella Myrtille compose un recueil de 54 poèmes inspirés par les réalités multiples du continent.',link:'livre.html?id=M%C3%A8re%20Afrique',linkLabel:'Lire la fiche du livre'},
    {id:'story-maison',kind:'Maison',image:'assets/carnet-house.webp',imageAlt:'Table de travail éditorial dans une maison d’édition',imageLabel:'BÉNIN · SÉNÉGAL',eyebrow:'VIE DE LA MAISON',title:'Une maison, plusieurs scènes.',excerpt:'Depuis 2020, les Éditions Afrique Éclat associent le travail éditorial à la promotion des arts et des lettres.',link:'maison.html',linkLabel:'Découvrir la maison'},
    {id:'story-theatre',kind:'Parution',image:'assets/carnet-theatre.webp',imageAlt:'Répétition théâtrale dans une lumière rouge et bleue',imageLabel:'THÉÂTRE · 2025',eyebrow:'THÉÂTRE · ROLLAND SOTCHOEDO',title:'Quand la scène questionne le pouvoir.',excerpt:'Le Bal des Mirages Politiques met en jeu les promesses déçues, la justice et les fractures sociales.',link:'livre.html?id=Le%20Bal%20des%20Mirages%20Politiques',linkLabel:'Découvrir la pièce'},
    {id:'story-anita',kind:'Rencontres',image:'assets/event-recap-poster.webp',imageAlt:'Affiche typographique de la rencontre littéraire de Cocody',imageLabel:'ILLUSTRATION · PAS UNE PHOTO DE L’ÉVÉNEMENT',eyebrow:'RENCONTRE · COCODY · 7 NOVEMBRE 2026',title:'Une histoire partagée à Cocody.',excerpt:'Anita Moulot a présenté son recueil de nouvelles Quand l’espoir renaît à la Librairie Carrefour Siloé. Selon le reportage publié par la maison, la rencontre a mêlé dédicaces, lectures, performances et échanges autour de l’infertilité. Le recueil est annoncé à la Librairie de France Abidjan et à la Librairie Carrefour Siloé ; le reportage indiquait une disponibilité prochaine à la Fnac.',link:'livre.html?id=Quand%20l%E2%80%99espoir%20rena%C3%AEt',linkLabel:'Découvrir le recueil',source:'https://www.facebook.com/share/1K9vVdQyNc/?mibextid=wwXIfr',sourceLabel:'Lire la publication source'},
    {id:'story-archives',kind:'Archives',image:'assets/carnet-archive.webp',imageAlt:'Manuscrits anciens classés à la main',imageLabel:'ARCHIVES · 2023',eyebrow:'DANS LES ARCHIVES',title:'Les visages changeants de la poésie.',excerpt:'Paru en 2023, Les Masques Évanescents de Rolland Sotchoedo rejoint les premières traces du catalogue aujourd’hui présenté par la maison.',link:'livre.html?id=Les%20Masques%20%C3%89vanescents',linkLabel:'Retrouver le recueil'}
  ];
  function read(){
    let stored={};
    try{stored=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{}
    const books=Array.isArray(stored.books)?stored.books:(Array.isArray(window.CATALOGUE)?window.CATALOGUE:[]);
    const names=[...new Set(books.map(b=>String(b.author||'').trim()).filter(Boolean))];
    const authors=Array.isArray(stored.authors)?stored.authors:names.map(name=>({name,genre:books.find(b=>b.author===name)?.genre||'Auteur',bio:'',photo:''}));
    return {books,authors,news:Array.isArray(stored.news)?stored.news:NEWS.map(x=>({...x}))};
  }
  function save(value){localStorage.setItem(KEY,JSON.stringify(value));}
  window.AE_CMS={key:KEY,read,save,defaultNews:()=>NEWS.map(x=>({...x}))};
})();
