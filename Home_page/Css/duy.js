//read more
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more >"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "< Read less"; 
      moreText.style.display = "inline";
    }
  }
//hover
  function show(x){
    document.getElementById(x).style.display = "block";
  }
  function clearShow(x){
    document.getElementById(x).style.display = "none";
  }

  //click

  function clickMenu(x, y){
    if(document.getElementById(x).style.display==="none"){
        document.getElementById(x).style.display = "block";
        document.getElementById(y).style.display = "none";
    }
    else{
      document.getElementById(x).style.display ="none"
      document.getElementById(y).style.display = "none";
    }
  }


  