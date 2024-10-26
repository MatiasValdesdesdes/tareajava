//Declare una variable denominada challenge y asígnela a un valor inicial '30 Days of JavaScript'
    let challenge = '30 Days of JavaScript'

//Impirma la cadena en la consola del navegador usando console.log() 
    console.log(challenge);

//imprima la longitud de la cadena en la consola del navegador usando console.log() 
    console.log(challenge.length)

//Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()
    console.log(challenge.toUpperCase())

//Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
    console.log(challenge.toLowerCase())

//Corta la primera palabra de la cadena usando el método substr() o substring()
    console.log(challenge.substring(0,2))

//Corta la frase Days Of JavaScript de 30 Days Of JavaScript
    console.log(challenge.substring(3))

//Compruebe si la cadena contiene una palabra Script usando el método include()
    console.log(challenge.includes('Script'))

//Divida la cadena en una matriz usando el método split()
    console.log(challenge.split())

//Dividida la cadena 30 días de JavaScript en el espacio usando el método split()
    console.log(challenge.split(" "))

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena por la coma y cambia a una matriz 
    let copanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
    console.log(copanies.split(', '))

//Cambie 30 dias de javascript a 30 dias de Node usando el método reemplazar()
    console.log(challenge.replace('JavaScript', 'Node'))






    console.log(' Excercises 2: Diapositiva número 2 ')

    let cadena = '30 días de JavaScript'

//¿Cuál es el caracter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt()
    console.log(cadena.charAt(15))


//¿Cuál es el códido de caracter de J en la cadena '30 Días de JavaScript' usando charCodeAt()?
    console.log(cadena.charCodeAt(cadena.indexOf('J')))


//utilice indexOf para determinar la posición de la primera operación de a en 30 días de JavaScript.
    console.log(cadena.indexOf('a'))


//Utilice lastIndexOf para determinar la posicion de la ultima aparicion de a en 30 días de JavaScript. 
    console.log(cadena.lastIndexOf('a'))


//Utilice indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción'
    let frase = 'No puedes terminar una oración con porque porque porque es una conjunción';
    console.log(frase.indexOf('porque'));


//Utilice lastIndexOf para encontrar la posición de la última aparicion de la palabra porque en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción'
    console.log(frase.lastIndexOf('porque'))


//Utilice la busqueda para encontrar la posicion de la primera aparicion de la  palabra porque en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción'
    console.log(frase.search('porque'))







    console.log(' Exercise 2: Diapositiva número 3 ')
    let cadena1 = ' 30 días de JavaScript '


//Utilice trim() para eliminar cualquier espacio en blanco al principio y al final de una cadena 
    console.log(cadena1.trim())


//Utilice el método startWith con la cadena 30 Days Of JavaScript y que el resultado sea verdadero
    console.log(challenge.startsWith('30'))


//Utilizar el metodo terminaCon8() con la cadena 30 Days Of JavaScript y que haga que el resultado dea verdadero
    console.log(challenge.endsWith('JavaScript'))


//Utilice el metodo match() para encontrar todas las a en 30 Days Of JavaScript 
    console.log(cadena.match(/a/g))


//Utilice concat() y combine '30 dias de' y 'JavaScript' en una sola cadena, '30 Days Of JavaScript' 
    let parte1 = '30 días de'
    let parte2 = 'JavaScript'
    console.log(parte1.concat(' ', parte2))


//Utilice el método repetir() para imprimir 30 Days Of JavaScript 2 veces 
    console.log(cadena.repeat(2))