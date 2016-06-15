
var input_div = document.getElementById("input_div");
var reverse_div = document.getElementById("reverse_div");

var input_e = document.createElement('input');
    input_e.setAttribute("type", "text");
    input_e.setAttribute("id", "str");
    input_e.setAttribute("placeholder", "Enter String");
    input_div.appendChild(input_e);

var button_e = document.createElement('input');
    button_e.setAttribute("type", "button");
    button_e.setAttribute("value", "Get Reverse");
    input_div.appendChild(button_e);
    button_e.onclick = function() {
		document.getElementById("reverse_div").innerHTML = (reverse (text_value.value).fontcolor("red"));
		alert(reverse (text_value.value));
	};

var text_value = document.getElementById("str");

var reverse = function (str) {
    var output = '';
    for (var i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }
  return output;
};

    







