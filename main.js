// Classe abstrata Veiculo
class Veiculo {
    constructor(marca, modelo) {
        if (this.constructor === Veiculo) {
            throw new Error("Classe abstrata não pode ser instanciada.");
        }
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método que deve ser sobrescrito
    detalhes() {
        throw new Error("Método 'detalhes' deve ser implementado.");
    }
}

// Classe Carro que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    detalhes() {
        return `Carro: ${this.marca} - Modelo: ${this.modelo} - Portas: ${this.portas}`;
    }
}

// Classe Moto que herda de Veiculo
class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    detalhes() {
        return `Moto: ${this.marca} - Modelo: ${this.modelo} - Cilindradas: ${this.cilindradas}cc`;
    }
}

// Função para criar um Carro
function criarCarro(marca, modelo, portas) {
    return new Carro(marca, modelo, portas);
}

// Função para criar uma Moto
function criarMoto(marca, modelo, cilindradas) {
    return new Moto(marca, modelo, cilindradas);
}

// Função para exibir detalhes de um veículo
function exibirDetalhes(veiculo) {
    console.log(veiculo.detalhes());
}

// Criar instâncias usando as funções
const carro1 = criarCarro("Toyota", "Corolla", 4);
const carro2 = criarCarro("Honda", "Civic", 4);
const moto1 = criarMoto("Yamaha", "MT-07", 689);

// Exibir detalhes
exibirDetalhes(carro1); // Carro: Toyota - Modelo: Corolla - Portas: 4
exibirDetalhes(carro2); // Carro: Honda - Modelo: Civic - Portas: 4
exibirDetalhes(moto1);  // Moto: Yamaha - Modelo: MT-07 - Cilindradas: 689cc
