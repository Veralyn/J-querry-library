$(function(){
    $i = 1;
    $sum = 0;
  $number =  $(".vera").data("number"); 
    while($i <= $number){
    
        if($i%2 == 0){
           $sum = $sum + $i;            
        }
       ++$i;
   

    }
     $(".vera").append("The Number Its SummingUp To is " +$number + " While The Result Is "  + $sum);
  //  console.log($sum); 
  
});