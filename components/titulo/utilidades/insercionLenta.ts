/*
    Descripción: inserta palabras, letra por letra, al título de la página de inicio usando el método setTimeout para añadir intervalos de tiempo.
    Parámetros:
        * eslogans: arreglo de strings que almacena todas las palabras que se insertarán.
        * setEslogan:   función actualizadora para asignarle un valor a la variable de estado eslogan en el componente padre.
*/

export default function insercionLenta(
  eslogans: string[],
  setEslogan: Function
): void {
  let retraso: number = 0;

  eslogans.forEach((palabra) => {
    palabra.split("").forEach((letra) => {
      setTimeout(() => {
        setEslogan((eslogan: string[]) => [...eslogan, letra]);
      }, retraso);

      retraso += 100;
    });

    const retrasoEntrePalabra = retraso + 600;

    if (palabra !== "day") {
      setTimeout(() => {
        // Limpia la variable de estado para solo insertar una palabra a la vez.
        setEslogan([]);
      }, retrasoEntrePalabra);
    }

    retraso = retrasoEntrePalabra;
  });
}
