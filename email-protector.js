//Inicio código
function protector-m()
//by CONOS.io @conosfera
{
var usuario = "mi-cuenta"
var dominio = "mi-dominio.com"
document.write("<a href=\"mailto:" + usuario + "@" + dominio + "\">" + usuario + "@" + dominio + "</a>")
}
//Fin código

/*
Código javascript para proteger un correo electronico
1. Cambiar los datos: mi-cuenta y: mi-dominio por los que correspondan
2. Debes llamar al archivo js que recoje las funciones desde el código de tu página html
Por ejemplo:
<script src="js/email-protector.js"></script>
3. En el lugar que quieras que aparezca el dato, debes incluir la orden que llama a la función específica
Siguiendo el ejemplo seŕia:
<script>protector-m()</script>
Para que el código sea más libiano se debe incluir todas las funciones en un mismo archivo js, nombrando cada función con un nombre diferente
*/

