

 
  


const pics =[
    "img/ai-cloud-concept-with-robot-arm 2.png ",
    "img/anniversarry copy 1.png", 
    "img/Group 87.png",
    "img/Group 88.png",
    "img/10d 2.png",
     "img/BID 2012 2.png",
 
 ];


setInterval(function(){

    var a =Math.floor(Math.random()*pics.length)

    cartona =  ` 
    
          <img src="${pics[a]}">
             
                 `
        
        document.getElementById('inside-img').innerHTML=cartona
    

},2000)






    // scroll to top button
    function scrollToTop() {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
      }
      
      window.addEventListener('scroll', function() {
        const scrollToTopButton = document.getElementById('scrollToTop');
        if (scrollY >= 100) { 
          scrollToTopButton.style.display = 'block';
        } else {
          scrollToTopButton.style.display = 'none';
        }
      });
      
      const scrollToTopButton = document.getElementById('scrollToTop');
      scrollToTopButton.addEventListener('click', scrollToTop);
      
      