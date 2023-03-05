function menyou(){
    var nav=document.getElementById('topnav');
    var btn=document.getElementById('menu');
    var cont=document.querySelector('body');
    if (nav.className==='nav'){
        nav.className+=' res';
    }
    else{
        nav.className='nav';
    }
    if (btn.innerHTML==='<img src="icon-menu.svg">'){
        btn.innerHTML='<img src="icon-menu-close.svg">';
        cont.style.backgroundColor='rgba(0, 0, 0, .4)';
    }else{
        btn.innerHTML='<img src="icon-menu.svg">';
        cont.style.backgroundColor='hsl(36, 100%, 99%)';
    }
}
