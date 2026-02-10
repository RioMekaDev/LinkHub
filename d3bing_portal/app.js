async function loadLinks(){
  const res = await fetch('links.json');
  const links = await res.json();
  const container = document.getElementById('linkContainer');
  links.forEach(item=>{
    const a=document.createElement('a');
    a.href=item.url;
    a.className='card';
    a.innerText=item.title;
    a.target='_blank';
    container.appendChild(a);
  });
}
loadLinks();
