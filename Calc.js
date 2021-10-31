total = ''

function input_numbers(numbers){
	
    val = document.getElementById(numbers).value
    total += val
    document.getElementById("screen").value = total
}
