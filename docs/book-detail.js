(()=>{
  const detail=document.querySelector('#detail');
  if(!detail)return;
  const name=new URLSearchParams(location.search).get('id')||'';
  let books=window.CATALOGUE||[];
  try{
    const saved=JSON.parse(localStorage.getItem(window.AE_CMS?.key||'ae-content-v1')||'{}');
    if(Array.isArray(saved.books))books=saved.books;
  }catch{}
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
  if(!backImage&&!backText)return;
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
  const summary=detail.querySelector('.detail-desc');
  if(summary)summary.after(section);
})();
