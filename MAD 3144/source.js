function auto()
{
    setInterval(backgr,3000);
}


function backgr()
{
    var backimg = ["images/pic.jpg","images/pic2.jpeg","images/pic3.jpeg"];
    var randimg =Math.floor(Math.random()*3);
    document.body.background = backimg[randimg];
}
