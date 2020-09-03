
<html>
   <head>
      <title>JavaScript Dates</title>
   </head>
   <body>
      <script>
         function myTime(time) {
            var hr = ~~(time / 3600);
            var min = ~~((time % 3600) / 60);
            var sec = time * 60;
            var sec_min = "";
           
            return time+" minutes = "+sec+" seconds";
         }
         document.write(myTime(2.5));
      </script>
   </body>
</html>
