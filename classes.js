
class Curso{
    constructor (nome,cargaHoraria,periodo){

    this.nome= nome;
    this.periodo= periodo;
    this.cargaHoraria= cargaHoraria;
    }   
}

class Universidade{
    constructor(nome,cursos,campus){
    this.nome= nome;
    this.cursos= cursos;
    this.campus= campus;
    }
}

class Republica{
    constructor(nome,moradores,idade){
    this.nome= nome;
    this.moradores= moradores;
    this.idade= idade;
    }
}

class Pessoa{
    constructor (nome,idade,sexo){    
    this.nome= nome;
    this.idade= idade;
    this.sexo= sexo;
    }
    checarIDs(pessoa){
        if (pessoa.idade<18){
            return `${pessoa.nome} pode tomar cerveja`;   
        }        
    
        else{
            return `${pessoa.nome} vai tomar COCA COLA` ;
        }
    }

    calcularTotal(pedido1,pedido2,pedido3,pedido4){ 

        var total= pedido1 + pedido2 + pedido3 + pedido4;            
        return "A conta deu R$" + total + " galerinha";      
    }

    calcularIndividual(pedido1,pedido2,pedido3,pedido4){
        var ContaIndividual= (pedido1+pedido2+pedido3+pedido4)/4;
        return "Deu R$" + ContaIndividual + " para cada um";
}
}

class Estudante extends Pessoa{
    super(nome,idade,sexo){
    
    this.republica= republica;
    this.curso= curso;
    }

    pedirConta(garçom){
        return `Traga a conta por favor`;
}
}

class Bebida{
    constructor (nome,preço){
    this.nome= nome;
    this.preço= preço;
    }
}

class Pedido{
    constructor (bebida,cliente){ 
    this.bebida= bebida;
    this.cliente= cliente;
    }
}









