
$(document).ready(function(){
	        $(".but").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
    
  });
});