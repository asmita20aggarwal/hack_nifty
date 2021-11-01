total = ''

function input_numbers(numbers){
	
if(numbers == 'del'){

total = total.slice(0, -1);
document.getElementById("screen").value = total

}else{
    val = document.getElementById(numbers).value
    total += val
    document.getElementById("screen").value = total
       }
}
