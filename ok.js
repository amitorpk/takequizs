
<html>  
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<style>
 
.center {
  
    position:absolute;
    top: 25%;
    left: 50%;
    
    text-align:center;
    margin-top: 0em;
    margin-left: -15em;
}
.container { 
  height: 150px;
  width: 500px;
  position: relative;
  border: 3px solid green; 
}

    
  

  
</style>
<SCRIPT>

function ShowAndHide() {
    var x = document.getElementById('SectionName');
    var y =document.getElementById('ch'); 
    if (x.style.display == 'none') {
        x.style.display = 'table';
    } else {
        x.style.display = 'none';
    }
    if (y.value == 'Click to Answer') {
        y.value = 'Click to hide';
    } else {
        y.value = 'Click to Answer';
    }
}

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
      
     $(this).text($(this).text() == 'Click to Answer' ? 'Click to hide' : 'Click to Answer');
    
  });
});
</SCRIPT>  
</head>
<body>  
 
<table class="center">  
<tr>
<th><div class="container"><div class="center"><p>QUESTION</p></div></div></th>


<tr>
<td><button style="float: right;" id="flip">Click to Answer</button>
</td>
</tr>
<tr>
<td>
<div id="panel" style="display:none;">
<table style="border:1px solid blue;width:500px;height:100px;">
<tr>
<td  align="center"><input type="button" value="OPTION A"></td>
<td  align="center"><input type="button" value="OPTION B"></td></tr>
<tr><td  align="center"><input type="button" value="OPTION C"></td>
<td  align="center"><input type="button" value="OPTION D"></td></tr>
</tr>
</table>
</div>
</td>
</tr>



</table>
  
</body>
</html>   

 