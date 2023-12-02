

 
  


const pics =[
    "img/Laptop (1).png",
    "img/Laptop (2).png", 
    "img/Laptop (3).png",
    "img/Laptop (4).png",
    "img/Laptop (5).png",
    "img/Laptop.png",
 
 ];


setInterval(function(){

    var a =Math.floor(Math.random()*pics.length)

    cartona =  ` 
    
          <img src="${pics[a]}" >
             
                 `
        
        document.getElementById('lab').innerHTML=cartona
    

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
      
      