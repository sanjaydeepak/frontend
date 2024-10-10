var productcontainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=document.querySelectorAll("div")
search.addEventListener("keyup",function()
{
    var entered=event.target.value.toUpperCase()
    for( var count=0;count<productlist.length;count=count+1)
    {
        var productnameElement=productlist[count].querySelector("p")
        if(productnameElement)
            productname=productlist[count].textContent
        if(productname.toUpperCase().indexOf(entered)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})