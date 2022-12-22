 var audio=new Audio("Welcome.mp3");
 audio.play();
var total=[];
let amount=0;
var items=[];
function cart(y)
{
    var x=document.querySelectorAll("b")[y-1].innerHTML;
    items.push(x);
    var z=document.querySelectorAll("span")[y-1].innerHTML;
    amount=parseFloat(z)+parseFloat(amount);
    total.push(z);
    document.querySelector("h4").innerHTML="Amount to be paid = " + amount;
}
function remove(a)
{
    if(items.length===0 && reduced.length===0)
    {
        alert("Cart is empty");
    }
    else
    {
        var b=document.querySelectorAll("h1")[a-1].innerHTML;
        var index=items.indexOf(b);
        if(index!==-1)
        {
            items.splice(index, 1);
        }     
        var c=document.querySelectorAll("span")[a-1].innerHTML;
        var index1=total.indexOf(c);
        if(index1>-1)
        {
            amount=parseFloat(amount)-parseFloat(c);
            total.splice(index1,1);
        }
        document.querySelector("h4").innerHTML="Amount to be paid = " + amount;
    }
}
function display()
{
    if((items.length===0 && total.length===0) || amount===0)
    {
        alert("Your Cart Is Empty");
    }
    else
    {
        var x1=Math.floor(Math.random()*2)+1;
        alert("Thanks!! Please pay your bill, Amount to be paid = "+amount+" collect your order from counter " + x1 + " after 15 minutes.");
        amount=0.00;
    }
}
