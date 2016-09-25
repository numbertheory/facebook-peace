// Facebook peace

function start(){
    var a = document.querySelectorAll('form')
    for (i = 0; i < a.length; i++) { 
        if (a[i].getAttribute("action").startsWith("/search") == false)
            {
                if (a[i].getAttribute("action").startsWith("/ajax/updatestatus") == false)
                    {
                        a[i].style.display = "none";
                    }
            }
    }
    setTimeout(start, 3000);
    }
document.onload = start();
