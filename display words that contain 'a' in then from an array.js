<!DOCTYPE html>
<html>
<body>

<p>Click the button to check where if the string includes the specified value.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<p><strong>Note:</strong> The includes() method is not supported in IE 11 (and earlier versions).</p>

<script>
function myFunction() {
var a = [];
var list = [];
  var str = ['abc','bh','ck','dag'];
  for(let i=0;i<str.length;i++){
  a=str[i];
  if(a.indexOf('a') > -1){
  list.push(a);
  }
  document.getElementById("demo").innerHTML = list;
  }
 
}

</script>

</body>
</html>
