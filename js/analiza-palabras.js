/* Crea tu función aquí */

function analizaPalabras(palabras) {
  let analisisPalabra = "########";

  for (const i in palabras) {
    const palabra = palabras[i];
    analisisPalabra += `\nPalabra ${+i + 1}: ${palabra}`;
    analisisPalabra += `\nNº de caracteres: ${palabra.length}`;

    const deletrear = palabra.split("").join("-");
    analisisPalabra += `\nDeletreo: ${deletrear}`;

    const esPar = palabra.length % 2 === 0 ? "par" : "impar";
    const esMayuscula =
      palabra.charAt(0) === palabra.charAt(0).toUpperCase() ? "" : " no";
    analisisPalabra += `\nLa palabra es ${esPar} y${esMayuscula} empieza por mayúscula`;

    const contieneBle = palabra.includes("ble") ? " " : " no ";
    analisisPalabra += `\nLa palabra${contieneBle}contiene ble`;
    analisisPalabra += `\n#######`;
  }
  return analisisPalabra;
}
