window.onload = function() {
    var players = document.querySelectorAll('.js-youtube_player')

    var loadPlayer = function (event) {
    var target = event.currentTarget
    var iframe = document.createElement('iframe')
    
    iframe.height = target.clientHeight;
    iframe.width = target.clientWidth;
    iframe.src = target.dataset.videoId;
    iframe.setAttribute('allowfullscreen', true)
    iframe.setAttribute('frameborder', 0)
    
    target.classList.remove('pristine')
    
    if (target.children.length) {
        target.replaceChild(iframe, target.firstElementChild)
    } else {
        target.appendChild(iframe)
    }
    }

    var config = { once: true }
 
    Array.from(players).forEach(function (player) {
    player.addEventListener('click', loadPlayer, config)
    })



    $(window).scroll(function() {
        $('.js-scroll').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow + 200) {
            $(".panel__points-item.active").removeClass("active");
            $($(".panel__points-item")[+$(this).data("position")]).addClass("active");
          }
        });
    });


    $(".js-participate").on("click", function() {
        $(".js-modal").addClass("active");
    });

    $(".js-modal").on("click", function(event) {
        if ($(event.target).hasClass("js-modal")) $(this).removeClass("active");
    });

    $(".js-success").on("click", function(event) {
        if ($(event.target).hasClass("js-success")) $(this).removeClass("active");
    });

    $(".js-form").on("submit", function(event) {

        $(this).find(".form__input.novalid").removeClass("novalid");
        
        if (! $(this).find('.form__input[name="vk"]').val().trim().length && ! $(this).find('.form__input[name="twitter"]').val().trim().length) {
            
            event.preventDefault(); 
            $(this).find('.form__input[name="vk"]').addClass("novalid");
             $(this).find('.form__input[name="twitter"]').addClass("novalid");
        }
        
        // if (! $(this).find('.form__input[name="steam"]').val().trim().length) {
        //     event.preventDefault();
        //     $(this).find('.form__input[name="steam"]').addClass("novalid");
        // } 

        if (($(this).find('.form__input[name="vk"]').val().trim().length || $(this).find('.form__input[name="twitter"]').val().trim().length)) {
            sessionStorage.setItem('Registration', 1);
        }
    });
    
    if (+sessionStorage.getItem('Registration')) {
        $(".js-success").addClass("active");
        sessionStorage.setItem('Registration', 0);
    }
};