//Tabs
const se = document.getElementById('se');
const ss = document.getElementById('ss');
const es = document.getElementById('es');

//Tab descriptions
const sed = document.getElementById('sed');
const ssd = document.getElementById('ssd');
const esd = document.getElementById('esd');

se.addEventListener('click', (e) => {
    e.preventDefault();
    se.classList.add('active');
    ss.classList.remove('active');
    es.classList.remove('active');

    ssd.classList.add('hide');
    esd.classList.add('hide');
    sed.classList.remove('hide');
});

ss.addEventListener('click', (e) => {
    e.preventDefault();
    ss.classList.add('active');
    se.classList.remove('active');
    es.classList.remove('active');

    sed.classList.add('hide');
    esd.classList.add('hide');
    ssd.classList.remove('hide');
});

es.addEventListener('click', (e) => {
    e.preventDefault();
    es.classList.add('active');
    ss.classList.remove('active');
    se.classList.remove('active');

    sed.classList.add('hide');
    ssd.classList.add('hide');
    esd.classList.remove('hide');
});



// FAQ 
const lis = document.getElementsByClassName('sq')
lis[0].addEventListener("click", (e)=>{
    e.preventDefault();
    const p = lis[0].getElementsByTagName('p')[0];
    p.style.display=  (p.style.display.length == 0 || p.style.display== "none" ) 
    ? "block" : "none";
})

lis[1].addEventListener("click", (e)=>{
    e.preventDefault();
    const p = lis[1].getElementsByTagName('p')[0]
    p.style.display=  (p.style.display.length == 0 || p.style.display== "none" ) 
    ? "block" : "none";
})

lis[2].addEventListener("click", (e)=>{
    e.preventDefault();
    const p = lis[2].getElementsByTagName('p')[0];
    p.style.display=  (p.style.display.length == 0 || p.style.display== "none" ) 
    ? "block" : "none";
})

lis[3].addEventListener("click", (e)=>{
    e.preventDefault();
    const p = lis[3].getElementsByTagName('p')[0]
    p.style.display=  (p.style.display.length == 0 || p.style.display== "none" ) 
    ? "block" : "none";
})






