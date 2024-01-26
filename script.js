console.log("probando")


// OBJECTS

/* 

{
  nombreDeLaPropiedad: valorDeLaPropiedad,
  nombreDeLaPropiedad: valorDeLaPropiedad,
  nombreDeLaPropiedad: valorDeLaPropiedad,
  nombreDeLaPropiedad: valorDeLaPropiedad,
}

{
  key: value
}

*/


let headPhones = {
  price: 100,
  brand: "SteelSeries",
  isNew: false,
  "max volume": 50,
  // someArr: ["patata"],
  // someObj: { name: "Jorge" },
  // someFunction: function() {
  //   // hace algo
  //   return "hola"
  // }
  serial: {
    number: 1234,
    manufacturingCode: "ZXCV"
  }
}

console.log(headPhones)


// Notación de punto
console.log( headPhones.price )
console.log( headPhones.brand )
console.log( headPhones.age ) // undefined. No existe.

// Notación de corchetes => siempre con ""
console.log( headPhones["max volume"] ) 
console.log( headPhones["isNew"] )

// modificar propiedades de objetos

headPhones.isNew = true; // estoy cambiando el valor de propiedad

console.log(headPhones)

// agregar una propiedad nueva
headPhones.color = "black"

console.log(headPhones)

// borrar propiedades => delete
delete headPhones.brand;

console.log(headPhones)




console.log(headPhones.serial.number)
console.log(headPhones["serial"]["number"])
console.log(headPhones["serial"]["manufacturingCode"])

headPhones["serial"]["manufacturingCode"] = "ABCD"

console.log(headPhones)





// Metodos especiales y loops

let allProperties = Object.keys( headPhones )
console.log(allProperties)

console.log( Object.values( headPhones ) )


// bucle for in
for ( let nombreDePropiedad in headPhones ) {

  // let nombreDePropiedad = "price";
  // let nombreDePropiedad = "isNew";
  // let nombreDePropiedad = "max volume";
  // let nombreDePropiedad = "serial";
  // let nombreDePropiedad = "color";

  // console.log(nombreDePropiedad)
  console.log(nombreDePropiedad, headPhones[nombreDePropiedad])

  if (typeof headPhones[nombreDePropiedad] === "number") {
    headPhones[nombreDePropiedad] = headPhones[nombreDePropiedad].toString()
  }

}

console.log(headPhones)




// Estructura de Data

const users = [
  {
    username: "Pablo",
    bitcoins: 1,
    hasNFTs: false
  },
  {
    username: "Fran",
    bitcoins: 0,
    hasNFTs: false
  },
  {
    username: "Meri",
    bitcoins: 0,
    hasNFTs: true
  },
  {
    username: "Oriol",
    bitcoins: 3.5,
    hasNFTs: true
  }
]


// quiero ver la propiedad username, del tercer usuario del array
console.log( users[2]["username"] )
console.log( users[2].username )


// quiero agregarle dos bitcoins al segundo usuario
// users[1].bitcoins = 2

console.log(users)

// el array tiene 8 => 7
// queremos agregar 3 bitcoins al usuario en la ultima posición
// users[users.length - 1].bitcoins = users[users.length - 1].bitcoins + 3
users[users.length - 1].bitcoins += 3

// ["tomate", "aguacate", "lechuga"]
// queremos agregar un nuevo usuario al array
users.push({
  username: "Adri",
  bitcoins: 1,
  hasNFTs: true
} )

console.log(users)



// crear una function que verifique si un usuario tiene bitcoins o tiene NFTs y nos de un mensaje acorde.

function userVerification( oneUser ) {
  console.log(oneUser)
  if (oneUser.bitcoins > 0 || oneUser.hasNFTs === true) {
    return `${oneUser.username} tiene cripto!! facturando 💸`
  } else {
    return `El usuario ${oneUser.username} no cree en Crypto.`
  }


}

// uso de la funcion con un usuario
console.log( userVerification( users[0] ) ) // true
console.log( userVerification( users[1] ) ) // true

// uso de la funcion en TODOS los usuarios a la vez
for (let i = 0; i < users.length; i++) {

  // console.log(users[i])
  console.log( userVerification( users[i] ) )

  // ejemplo de como esta información se usuaria para mostrarlo en la pagina web. TODO ESTO LO VEREMOS LA SEMANA QUE VIENE
  // document.querySelector("ul").innerHTML += `<li>${userVerification( users[i] )}</li>`

}




// Ejemplo de funcionalidad creada basado en el concepto de TDD


// funcion que reciba un valor numero en centimos y lo convierta en euros.


function centsToDecimals(cents) {

  // clausula de guardia
  if (cents === undefined) {
    return 0
  }

  // clausula de guardia
  if (typeof cents === "string") {
    return undefined
  }

  let euros = cents / 100;
  return euros

}


console.log("1. Deberia convertir el valor en centimos a euros")
console.log( centsToDecimals(122) === 1.22 )
console.log( centsToDecimals(0) === 0 )
console.log( centsToDecimals(56) === 0.56 )

console.log("2. Si recibe el valor como string, deberia returnar undefined")
console.log( centsToDecimals("1.44 cents") === undefined )

console.log("3. Si el valor no se recibe. Deberia retornar 0")
console.log( centsToDecimals() === 0 )