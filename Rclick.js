<<<<<<< HEAD
document.oncontextmenu=function(ev){var oEvent=ev||event;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;var x=oEvent.pageX||oEvent.clientX+scrollX;var y=oEvent.pageY||oEvent.clientY+scrollY;var oDiv=document.getElementById("Rclick");oDiv.style.display="block";oDiv.style.left=x+"px";oDiv.style.top=y+"px";return false};document.onclick=function(){var oDiv=document.getElementById("Rclick");oDiv.style.display="none"};
=======
document.oncontextmenu = function (ev)
{
var oEvent=ev||event;
var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
var x = oEvent.pageX || oEvent.clientX + scrollX;
var y = oEvent.pageY || oEvent.clientY + scrollY;
var oDiv=document.getElementById('Rclick');   
oDiv.style.display='block';
oDiv.style.left=x+'px';
oDiv.style.top=y+'px';
return false;
};
document.onclick=function ()
{
var oDiv=document.getElementById('Rclick');   
oDiv.style.display='none';
};
>>>>>>> 521a0c28b710526d9f5569df48f8074c8e294924
