let changefont = ()=>{
    let devicewidth = document.documentElement.clientWidth;
    console.log(devicewidth);
    document.documentElement.style.fontSize = devicewidth / 3.5 + 'px';
}
window.addEventListener('load', changefont);
window.addEventListener('resize', changefont);