var t = new Date();
function displayOpen(){
    if(t.getHours>9&&t.getHours<21){
        document.getElementById("time").innerHTML = "Our store is open, come on in!";
    }else{
        document.getElementById("time").innerHTML = "Our store is closed, hope we see you soon.";
    }
}