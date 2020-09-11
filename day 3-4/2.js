<!DOCTYPE html>
<html>
<head>
<style>
	#cd{
    display: none;
    }
</style>
</head>
<body>
<input type="text" id="ab">
<input type="text" id="cd">
<button onclick="my()">b1</button>

<script type="text/javascript">
function my(){
document.getElementById('cd').style.display='inline';
document.getElementById('cd').value=document.getElementById('ab').value;
}
</script>
</body>
</html>
