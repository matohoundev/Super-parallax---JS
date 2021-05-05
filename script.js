let backgroundParallax = document.getElementById('bg');

let seriadParallax = document.getElementById('seriad');
let lasParallax = document.getElementById('las');
let wyinParallax = document.getElementById('wyin');
let quyiWeaponParallax = document.getElementById('quyi_weapon');
let quyiParallax = document.getElementById('quyi');
let monsterParallax = document.getElementById('monster');



backgroundParallax.addEventListener('mousemove', (e) => {
    let bgX = backgroundParallax.style.backgroundPositionX = e.x / window.innerWidth * 100 + "%";
    bgY = backgroundParallax.style.backgroundPositionY = e.y / window.innerHeight * 40 + "%";

    seriadParallax.style.transform = "translate3d(" + "-" + e.x / window.innerWidth * 100 + "px" + "," + " " + e.y / window.innerHeight* 20 + "px" + " " + "," + " 0px" + ")";

    lasParallax.style.transform = "translate3d(" + "-" + e.x / window.innerWidth * 6 + "px" + "," + " " + e.y / window.innerHeight* 20 + "px" + " " + "," + " 0px" + ")";

    wyinParallax.style.transform = "translate3d(" + "-" + bgX  + "," + " " + e.y / window.innerHeight* 15 + "px" + " " + "," + " 0px" + ")";

    quyiWeaponParallax.style.transform = "translate3d(" + "-" + e.x / window.innerWidth * 60 + "px" + "," + " " + e.y / window.innerHeight* 10 + "px" + " " + "," + " 0px" + ")";


    quyiParallax.style.transform = "translate3d(" + "-" + e.x / window.innerWidth * 20 + "px" + "," + " " + e.y / window.innerHeight* 10 + "px" + " " + "," + " 0px" + ")";

    monsterParallax.style.transform = "translate3d(" + "-" + e.x / window.innerWidth * 180 + "px" + "," + " " + e.y / window.innerHeight* 10 + "px" + " " + "," + " 0px" + ")";

})