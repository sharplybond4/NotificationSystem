$(function () {
    var icons = {
        "general" : "fas fa-keyboard",
        "info" : "fas fa-info-circle",
        "success" : "fas fa-check-circle",
        "error" : "fas fa-server",
        "warning" : "fas fa-exclamation-triangle",
        "sms" : "fas fa-sms"
    };

    var colours = {
        "general" : "#95a5a6",
        "info" : "#3498db",
        "success" : "#1abc9c",
        "error" : "#dc3545",
        "warning" : "#f1c40f",
        "sms" : "#e67e22"
    };

    var sound = new Audio('notification.wav');
    sound.volume = 0.6;
    window.addEventListener('message', function (event) {
        if (event.data.action == 'notify') {
            var number = Math.floor((Math.random() * 1000) + 1);
            $('.notify-wrapper').append(`
            <div class="notify-div wrapper-${number}" style="border-left: 5px solid ${colours[event.data.type]}; display:none">
                <div class="align-items-baseline notify-title"><i class="${icons[event.data.type]} fa-ms notify-icon" style="color: ${colours[event.data.type]}"></i>
                    <h5 class="text-uppercase notify-title-text" style="color: ${colours[event.data.type]}">${event.data.title}</h5>
                </div>
            <p class="text-break notify-main-text">${event.data.message}</p>
            </div>`)
            $(`.wrapper-${number}`).fadeIn("slow");
            sound.play();
            setTimeout(function () {
                $(`.wrapper-${number}`).fadeOut( "slow", function () {
                    $(`.wrapper-${number}`).remove()
                })
            }, event.data.time)
        }
    })
})