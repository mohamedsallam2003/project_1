$(document).ready(function(){
    $('.navbar_home').click(function(){
        $(window).scrollTop(0); 
    })
    $('.navbar_features').click(function(){ 
        $(window).scrollTop(564);
    })
    $('.navbar_about').click(function(){ 
        $(window).scrollTop(4545);
    })
    $('.navbar_Testimonials').click(function(){ 
        $(window).scrollTop(6678);
    })
    $('.navbar_Blog').click(function(){ 
        $(window).scrollTop(7382);
    })
    $('.navbar_Contact').click(function(){ 
        $(window).scrollTop(8182);
    })





    // $('.box').hover(function(){
    //     $(this).hasClass('icon').css({
    //         'backgroundColor':'white',
    //         'color':'#4285f4'
    //     })
    //     $(this).hasClass('.svg').css({
    //         'color':'#4285f4'
    //     })      
    //      } , function(){
    //         $('.icon').css({
    //             'backgroundColor':'#4285f4',
    //             'color':'white'
    //         })
    //         $(this).hasClass('.svg').css({
    //             'color':'white'
    //         })
    //     })

        $('.features .box').hover(function(){
            $(this).addClass("active")
        } , function(){
            $(this).removeClass("active")
            
        })

        $('.ourteam .person').hover(function(){
            $(this).addClass("person_active")
        } , function(){
            $(this).removeClass("person_active")
            
        })

        $('.slide .dot1').click(function(){
            $('.dott').css('color','#42e2f4')
            $(this).css('color','#4285f4')
            $('.person1').show(500)
            $('.person2').hide(500)
            $('.person3').hide(500)
            $('.person4').hide(500)
        })
        $('.slide .dot2').click(function(){
            $('.dott').css('color','#42e2f4')
            $(this).css('color','#4285f4')
            $('.person2').show(500)
            $('.person1').hide(500)
            $('.person3').hide(500)
            $('.person4').hide(500)
        })
        $('.slide .dot3').click(function(){
            $('.dott').css('color','#42e2f4')
            $(this).css('color','#4285f4')
            $('.person3').show(500)
            $('.person2').hide(500)
            $('.person1').hide(500)
            $('.person4').hide(500)
        })
        $('.slide .dot4').click(function(){
            $('.dott').css('color','#42e2f4')
            $(this).css('color','#4285f4')
            $('.person4').show(500)
            $('.person2').hide(500)
            $('.person3').hide(500)
            $('.person1').hide(500)
        })

        $('.throw').hover(function(){
            $('.menu .list').show()
        } , function(){
            $('.menu .list').hide()
            
        })
        

        // $('.features .box').scrollDown(1000)

        // if( $(window).scrollTop() > 564){
        //     $('.navbar_home').css('color','#4285f4')
        // }
        // // if($(window).scrollTop(564)){
        // //     $('.navbar_features').css('color','#4285f4')
        // // }
        // // if($(window).scrollTop(4545)){
        // //     $('.navbar_about').css('color','#4285f4')
        // // }
        // // if($(window).scrollTop(6678)){
        // //     $('.navbar_Testimonials').css('color','#4285f4')
        // // }
        // // if($(window).scrollTop(7382)){
        // //     $('.navbar_Blog').css('color','#4285f4')
        // // }
        // // if($(window).scrollTop(8182)){
        // //     $('.navbar_Contact').css('color','#4285f4')
        // // }

})


