$(init);

var request;
function init()
{
  $("#sortable").sortable();
  $(".draggable").draggable();

}

function dash(menuitem, event) {
//  alert(menuitem);
  request = new XMLHttpRequest();
    request.open("GET", "/routes/"+menuitem);
    request.onreadystatechange = displayFile;
    request.send(null);
event.preventDefault();
}

function displayFile()
{
    if (request.readyState == 4) {
       
            var text = request.responseText;
            //text = text.replace(/\n/g, "<br />");
            document.getElementById("artcl").innerHTML = request.responseText ;
       
    }
}