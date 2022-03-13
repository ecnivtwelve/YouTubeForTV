const YouTubeApp = document.getElementById("app");

function PressApp(code) {
    YouTubeApp.sendInputEvent({type: 'keyDown', keyCode: code})
    YouTubeApp.sendInputEvent({type: 'char', keyCode: code})
    YouTubeApp.sendInputEvent({type: 'keyUp', keyCode: code})
}

let img;

YouTubeApp.addEventListener("dom-ready", function(){
    setTimeout(function () {
        PressApp("Left");
        PressApp("Down");
        PressApp("Down");
        PressApp("Down");
        PressApp("Down");
        PressApp("Down");
        PressApp("Down");
        PressApp("Down");
        PressApp("Return");
        setTimeout(function () {
            PressApp("Down");
            PressApp("Down");
            PressApp("Down");

            setTimeout(function () {
                GetCode();
            }, 2000)
        }, 1000)
    }, 2000)
});

async function GetCode() {
    let rect = {
        x: 469,
        y: 441,
        width: 314,
        height: 49
    };

    var Cap = await YouTubeApp.capturePage(rect);
    var dataURLFinal = Cap.toDataURL();

    $("#phoneCode").attr("src", dataURLFinal);
    setTimeout(function () {
        $("#bn").css("background-color", "#0088ff");
        $("#bn").css("opacity", "100%");
        $("#bn").attr("onclick", "dismissModal()");
    }, 200)
}

function dismissModal() {
    PressApp("Left");
    PressApp("Up");
    PressApp("Up");
    PressApp("Up");
    PressApp("Up");
    PressApp("Up");
    PressApp("Up");
    PressApp("Up");
    PressApp("Right");

    setTimeout(function () {
        $("#OverCode").css("display", "none");
        YouTubeApp.classList.add("opened");
        YouTubeApp.focus();
    }, 300)
}