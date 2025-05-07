class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.velocidad = 0;
    }

    acelerar(cantidad) {
        this.velocidad += cantidad;
    }

    frenar(cantidad) {
        this.velocidad = Math.max(0, this.velocidad - cantidad);
    }

    detalles() {
        return `${this.marca} ${this.modelo} (${this.anio}) - Velocidad: ${this.velocidad} km/h`;
    }
}

// Clase Auto que hereda de Vehiculo
class Auto extends Vehiculo {
    constructor(marca, modelo, anio, puertas) {
        super(marca, modelo, anio);
        this.puertas = puertas;
    }

    detalles() {
        return `${super.detalles()} - Puertas: ${this.puertas}`;
    }
}

// Clase Moto que hereda de Vehiculo
class Moto extends Vehiculo {
    constructor(marca, modelo, anio, tipoManillar) {
        super(marca, modelo, anio);
        this.tipoManillar = tipoManillar;
    }

    detalles() {
        return `${super.detalles()} - Manillar: ${this.tipoManillar}`;
    }
}

// Crear instancias y probar métodos
const auto1 = new Auto("Toyota", "Corolla", 2020, 4);
const moto1 = new Moto("Yamaha", "MT-07", 2021, "deportivo");

auto1.acelerar(50);
moto1.acelerar(30);
auto1.frenar(10);

console.log(auto1.detalles()); // "Toyota Corolla (2020) - Velocidad: 40 km/h - Puertas: 4"
console.log(moto1.detalles()); // "Yamaha MT-07 (2021) - Velocidad: 30 km/h - Manillar: deportivo"
