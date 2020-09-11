<!DOCTYPE html>
<html>

<body>
<button onclick="my()">start</button>

<script type="text/javascript">
function my(){
var dict = {"name":"bharat","age":20,"country":"india","hobies":['coding','watching movies']};
for(let i in dict){
    console.log(dict[i]);
}
}
</script>
</body>
</html>
