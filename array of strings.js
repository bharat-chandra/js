<!DOCTYPE html>
<html>
<body>

<p>Click the button to check where if the string includes the specified value.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<p><strong>Note:</strong> The includes() method is not supported in IE 11 (and earlier versions).</p>

<script>
function myFunction() {
  var str = ['a','b','c','d'];
  var n = str.includes("x");
  document.getElementById("demo").innerHTML = n;
}
</script>

</body>
</html>
