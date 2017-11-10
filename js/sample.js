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
    
//feedback 
    
    $('.plane').on('click', function () {
        
        var userName = $('.username').val();

        var userPhone = $('.userphone').val();
        
        if(userName === ''){
            alert('姓名不能为空！')
        }else if (userPhone === ''){
            alert('联系信息不能为空！')
        }else if(userName !== ''&& userPhone !== ''){
            var data = {
            'userName': userName,
            'company': '',
            'email': '',
            'content': userPhone
        };

            $.ajax({
               type: 'post',
               url: '/api/feedback',
               headers:{'Content-Type':'application/json'},
                data: JSON.stringify(data),
                dataType: 'json',
                cache:false,
                success: function(response) {
                    alert('信息发送成功，我们会尽快与您联系！');
                    $('.username').val('');
                    $('.userphone').val('')
                },
                error: function(response) {
                    console.log(response.errorMessage)
                }
            })
                 
        };

    })
    
    
    
    
})
        
    
      
 


    
    
    




    
  


 
   