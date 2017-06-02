var btnPrev = document.querySelector('#btnPrev');
var btnNext = document.querySelector('#btnNext');

var images = document.querySelectorAll('.imgSlider');
var minImgages = document.querySelectorAll('.imgSliderMin');
var i = 0;

btnPrev.onclick = function(){
    images[i].style.display = 'none';
    minImgages[i].style.opacity = '0.5';
    minImgages[i].style.border = '1px solid transperent';
    i--;
    if(i < 0){
        i = images.length -1;
    }
    images[i].style.display = 'block';
    minImgages[i].style.opacity = '1';
};
btnNext.onclick = function(){
    images[i].style.display = 'none';
    minImgages[i].style.opacity = '0.5';
    i++;
    if(i >= images.length){
        i = 0;
    }
    images[i].style.display = 'block';
    minImgages[i].style.opacity = '1';
};

//---TAB--------------------------------
function openCity(evt, cityName) {
    var j, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (j = 0; j < tabcontent.length; j++) {
        tabcontent[j].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (j = 0; j < tablinks.length; j++) {
        tablinks[j].className = tablinks[j].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
};

//------------------------------------------------

var btnKitchen = document.querySelector('#btnKitchen');
var kitchenBox = document.querySelector('#kitchenBox');
    btnKitchen.onclick = function(){
        if (kitchenBox.style.display !== 'none') {
            kitchenBox.style.display = 'none';
            btnKitchen.innerHTML = "<big>Кухня</big> &#x2228";
        } else {
            kitchenBox.style.display = 'block';
            btnKitchen.innerHTML = "<big>Кухня</big> &#x2227";
        }
};

var btnTechnique = document.querySelector('#btnTechnique');
var techniqueBox = document.querySelector('#techniqueBox');
    btnTechnique.onclick = function(){
        if (techniqueBox.style.display !== 'none') {
            techniqueBox.style.display = 'none';
            btnTechnique.innerHTML = "Техника для кухни &#x2228";
        } else {
            techniqueBox.style.display = 'block';
            btnTechnique.innerHTML = "Техника для кухни &#x2227";
        }
};

var btnAccessories = document.querySelector('#btnAccessories');
var accessoriesBox = document.querySelector('#accessoriesBox');
    btnAccessories.onclick = function(){
        if (accessoriesBox.style.display !== 'none') {
            accessoriesBox.style.display = 'none';
            btnAccessories.innerHTML = "Кухонные аксесуары &#x2228";
        } else {
            accessoriesBox.style.display = 'block';
            btnAccessories.innerHTML = "Кухонные аксесуары &#x2227";
        }
};

