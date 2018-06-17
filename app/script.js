window.onload = function() {
    var players = document.querySelectorAll('.js-youtube_player')

    var loadPlayer = function (event) {
    var target = event.currentTarget
    var iframe = document.createElement('iframe')
    
    iframe.height = target.clientHeight
    iframe.width = target.clientWidth
    iframe.src = target.dataset.videoId
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
};