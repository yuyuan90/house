$(document).ready(function(){
    
       //smooth scroll
  $("header a").on('click', function(event){
      if (this.hash !== "") {
          event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
        window.location.hash = hash;
      });
  };
  });
    
    
    //cases slide down
    $('#cases div.thumbnail').hover(function(){
            $(this).find('.caption').slideDown(250)
        }, 
                          
        function(){
            $(this).find('.caption').slideUp(250)
        })

 
        //wechat
$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'right',
  content: function(){return '<img src="'+$(this).data('img') + '" />';}
    
});
    
    
   //back-to-top
    $(window).on('scroll', function(){
        if($(this).scrollTop() + $(window).height() > $(document).height() - $("#footer").height()){
            $('#back-to-top').css('visibility', 'visible');   
        }else{
            $('#back-to-top').css('visibility', 'hidden');  
        };
    });
    
    

    
    
    
});
        
    
      
 


    
    
    




    
  


 
   