(()=>{
  const detail=document.querySelector('#detail');
  if(!detail)return;
  const name=new URLSearchParams(location.search).get('id')||'';
  const books=window.AE_CMS?.read()?.books||window.CATALOGUE||[];
  const book=books.find(item=>item.title===name);
  if(!book)return;
  const safeURL=value=>{
    const raw=String(value||'').trim();
    if(!raw)return '';
    if(raw.startsWith('assets/')||raw.startsWith('./')||(raw.startsWith('/')&&!raw.startsWith('//')))return raw;
    try{const url=new URL(raw,location.href);return url.protocol==='https:'?url.href:''}catch{return ''}
  };
  const front=safeURL(book.coverImage);
  if(front){
    const image=document.createElement('img');
    image.src=front;
    image.alt=`Couverture de ${book.title}`;
    const frame=detail.querySelector('.detail-cover');
    if(frame)frame.replaceChildren(image);
  }
  const backImage=safeURL(book.backCoverImage);
  const backText=String(book.backCoverText||'').trim();
  const summary=detail.querySelector('.detail-desc');
  if(backImage||backText){
    const section=document.createElement('section');
    section.className='back-cover-copy';
    const heading=document.createElement('p');
    heading.className='eyebrow';
    heading.textContent='QUATRIÈME DE COUVERTURE';
    section.append(heading);
    if(backImage){
      const image=document.createElement('img');
      image.src=backImage;
      image.alt=`Quatrième de couverture de ${book.title}`;
      image.loading='lazy';
      section.append(image);
    }
    if(backText){
      const text=document.createElement('p');
      text.textContent=backText;
      section.append(text);
    }
    if(summary)summary.after(section);
  }
  const source=String(book.sourceURL||'').trim();
  if(source.startsWith('https://')){
    const note=document.createElement('p');
    note.className='book-source-note';
    note.textContent='Notice enrichie à partir des informations publiques de la maison.';
    const link=document.createElement('a');
    link.href=source;
    link.target='_blank';
    link.rel='noopener';
    link.textContent='Voir la page Facebook officielle ↗';
    note.append(' ',link);
    const retailers=detail.querySelector('.book-retailers');
    (retailers||detail).append(note);
  }
  const subtitle=String(book.subtitle||'').trim();
  const title=detail.querySelector('.detail-copy h1');
  if(subtitle&&title){
    const line=document.createElement('p');
    line.className='detail-subtitle';
    line.textContent=subtitle;
    title.after(line);
  }
})();
