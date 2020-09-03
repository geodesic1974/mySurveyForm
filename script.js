<!-- Validate a number for age field --> 
    <script type="text/javascript"> 
        $(document).ready(function() { 
            $("submit").click(function() { 
                var inputVal = $("number-label").val(); 
                alert($.isNumeric(inputVal)); 
            }); 
        }); 
    </script> 	