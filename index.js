var n1=(Math.floor(Math.random()*6))+1;
var n2=(Math.floor(Math.random()*6))+1;

var d1="dice"+n1+".png";
var d2="dice"+n2+".png";

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",d1);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",d2);

if(n1>n2)
{
    document.querySelector("h1").innerHTML="🏆 Player1 wins!";
}
else if(n1<n2)
{
    document.querySelector("h1").innerHTML="🏆 Player2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}