class Persona {

    name;
    email;
    edad;
    cc;
    estadoCivil;
    estadoEconomico;
    password;
    puntaje;


    constructor(name,email,edad,cc,estadoCivil,estadoEconomico,password,puntaje){
        this.name=name;
        this.edad=edad;
        this.email=email;
        this.cc=cc;
        this.estadoCivil=estadoCivil;
        this.estadoEconomico=estadoEconomico;
        this.password=password;
        this.puntaje=puntaje;
    }
    
    get name ( ){
        return this.name; 
    }
    get edad ( ){
        return this.edad;
    }
    get email ( ){
        return this.email;
    }
    get cc ( ){
        return this.cc;
    }
    get estadoCivil ( ){
        return this.estadoCivil;
    }
    get estadoEconomico ( ){
        return this.estadoEconomico;
    }
    get password ( ){ 
        return this.password;
    }
    get puntaje ( ){
        return this.puntaje;
    }


}