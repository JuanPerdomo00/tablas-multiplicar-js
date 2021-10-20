function tablasMultiplicar() {

        // pedir datos por consola a los usuarios
        let base = prompt("Deme el numero de la tabla: ");
        let limite = prompt("Deme el numero de hasta cuanto se le multiplica: ");

                // i se incrementa en 1
         //  como i < al limite, se va
        //   invrementar en 1
         for(let i = 0; i <= limite; i++) {
                 // muntiplicamos base * i
                 // como i va aumentando en cada vuelta
                 // hay es donde sale la multiplicacion
                 let resultado = base * i;
                 console.log(base + " x " + i + " = " + resultado );

  }
}

tablasMultiplicar();

