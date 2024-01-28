function generarTitulo(prevTitulo: string[], setTitulo: Function) {
  prevTitulo.forEach((letra, index) => {
    setTimeout(() => {
      setTitulo((prevTitulo: string[]) => [...prevTitulo, letra]);
    }, 100 * index);
  });
}

export default generarTitulo;
