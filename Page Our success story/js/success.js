var img=Array.from( document.querySelectorAll(".allImages"));

var lightboxcontainer=document.getElementById("lightboxcontainer");
var lightboxcontaineritem=document.getElementById("lightboxcontaineritem");

var closebtn=document.getElementById("close");
var nextbtn=document.getElementById("next");
var prevbtn=document.getElementById("prev");

var currentindex=0;

var replace=['img/1d.jpg','img/2d.jpg','img/3d.jpg','img/4d.jpg','img/5d.png','img/6d.png','img/7d.jpg','img/8d.jpg','img/9d.jpg','img/10d.jpg','img/11d.jpg']

 

for(var i=0;i<img.length;i++)
{
   img[i].addEventListener("click",function(eventInfo){
       
       currentindex=img.indexOf(eventInfo.target);
       var src= eventInfo.target.getAttribute("src");
       
       console.log(currentindex)


       lightboxcontaineritem.style.backgroundImage="url("+replace[currentindex-2]+")";
       lightboxcontainer.style.display="flex";

   })

   
}



closebtn.addEventListener("click",function()
{
  lightboxcontainer.style.display="none ";    
})



function nextslide()
{
currentindex++;
if(currentindex==replace.length)
{
    currentindex=0; 
}
var src=img[currentindex].getAttribute("src");
lightboxcontaineritem.style.backgroundImage="url("+replace[currentindex-1]+")";
}
nextbtn.addEventListener("click",nextslide)


 


function prevslide()
{
currentindex--;
if(currentindex<0)
{
    currentindex=replace.length-1 ; 
}
var src=img[currentindex].getAttribute("src");
lightboxcontaineritem.style.backgroundImage="url("+replace[currentindex-1]+")";
}

prevbtn.addEventListener("click",prevslide)







document.addEventListener("keydown",function(eventInfo){

    if(eventInfo.keyCode==39)
    {
    nextslide();    
    }
        
    })
    
    document.addEventListener("keydown",function(eventInfo){
    
        if(eventInfo.keyCode==37 )
        {
        prevslide();    
        }
            
        })
  
        document.addEventListener("keydown",function(eventInfo){
    
          if(eventInfo.keyCode==27 )
          {
            lightboxcontainer.style.display="none ";    
  
          }
              
          })
          
      
        
    