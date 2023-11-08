var btnHeroOne =document.getElementById("btnHeroOne");
var btnTemp =document.getElementById("btnTemp");
var btnSuper =document.getElementById("btnSuper");
var btnTwo =document.getElementById("btnTwo");
var btnPlam= document.getElementById("btnPlam");
var btnPower= document.getElementById("btnPower");
var btnLock= document.getElementById("btnLock");
var btnFace= document.getElementById("btnFace")
var btnAC = document.getElementById("btnAC")
var BtnproLite = document.getElementById("BtnproLite")
var btnvirdiPro = document.getElementById("btnvirdiPro")
var btnXface = document.getElementById("btnXface")






var heroOne =  document.getElementById("heroOne");
var heroTemp = document.getElementById("heroTemp");
var SuperHero= document.getElementById("SuperHero");
var heroTwo= document.getElementById("heroTwo");
var heroPlam = document.getElementById("heroPlam");
var heroPower =document.getElementById("heroPower");
var heroLock =document.getElementById("heroLock");
var heroFace =document.getElementById("heroFace");
var virdiAC =document.getElementById("virdiAC");
var proLite =document.getElementById("proLite");
var virdiPro =document.getElementById("virdiPro")
var Xface =document.getElementById("Xface")






var allcomponent = document.querySelectorAll('.data-information');



//////////////////// hero one Left ////////////////////

btnHeroOne.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



    heroOne.classList.add("show")
})


//////////////////// Hero One Temp ////////////////////

btnTemp.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



heroTemp.classList.add("show")
})



//////////////////// Super Hero ////////////////////

btnSuper.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



SuperHero.classList.add("show")
})

////////////////////   Hero Tow  ////////////////////

btnTwo.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



heroTwo.classList.add("show")
})



////////////////////    hero Lock Face  ////////////////////

btnFace.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});


heroFace.classList.add("show")
})



////////////////////     hero Power   ////////////////////

btnPower.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



heroPower.classList.add("show")
})



////////////////////     hero palm   ////////////////////

btnPlam.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



heroPlam.classList.add("show")
})





////////////////////    hero Lock    ////////////////////

btnLock.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});


heroLock.classList.add("show")
})


////////////// virdiAC /////////////

btnAC.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});


virdiAC.classList.add("show")
})


///////////BtnproLite ////////

BtnproLite.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});


proLite.classList.add("show")
})


/////////// virdiPro ////////


btnvirdiPro.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});


virdiPro.classList.add("show")
})





///////////  X face ////////


btnXface.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});


Xface.classList.add("show")
})



