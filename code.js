window.onload = function() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (!userAgent.includes('windows')) {
        
        document.getElementById("button1").style.display = "none";
        document.getElementById("message").innerText = "Your operating system is not supported.Try using a windows OS"; 
    }
    else { 
        document.getElementById("button1").style.display = "inline-block";
    }
}