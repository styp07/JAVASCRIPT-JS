class Phone{
    constructor(marca, color, peso, resolucionP, resolucionC, memoriaRam, memoriaRom){
        this.marca = marca,
        this.color = color,
        this.peso = peso,
        this.resolucionP = resolucionP,
        this.resolucionC = resolucionC,
        this.memoriaRam = memoriaRam,
        this.memoriaRom = memoriaRom
    } 

    onn(){
        return `Celular encendido`
    }

    off(){
        return `Celular apagado`
    }

    reinicio(){
        return `Celular reiniciado`
    }

    tomarFoto(){
        return `Foto tomada`
    }

    grabar(){
        return `Inicio grabación`
    }

    message(){
        return `<br><br><br>${this.marca} <br><br> color: ${this.color}<br>peso: ${this.peso}<br>Resolución pantalla: ${this.resolucionP}<br>Resolución cámara: ${this.resolucionC}<br>Memoria RAM: ${this.memoriaRam}<br>Memoria ROM: ${this.memoriaRom}`
    }

}

class PhoneGA extends Phone{
    
    constructor(camaraExtra, marca, color, peso, resolucionP, resolucionC, memoriaRam, memoriaRom){
        super( marca, color, peso, resolucionP, resolucionC, memoriaRam, memoriaRom)
        this.camaraExtra = camaraExtra
    }

    grabarLent(){
        return `Inicio grabación cámara lenta`
    }

    ReconocimientoFacial(){
        return `Reconocimiento facial exitoso`
    }

    messageExtra(){
        return `<br>Camara extra: ${this.camaraExtra}`
    }

}

const celular1 = new Phone('Moto G31','Azul', '2kg', '50', '20', '4GB', '64GB');
const celular2 = new Phone('Samsung A51','Rojo', '3KG', '60', '25', '6GB', '64GB');
const celular3 = new Phone('Motorola G51','Negro', '5kg', '50', '30', '8GB', '128GB');
const celular4 = new PhoneGA('20px','Xiaomi 11 Pro max','Negro', '5kg', '50', '30', '12GB', '256GB');
const celular5 = new PhoneGA('20px','Xiaomi 12 Pro max','Blanco', '5kg', '100', '40', '16GB', '256GB');

document.write(celular1.message())
document.write(celular2.message())
document.write(celular3.message())
document.write(celular4.message()+celular4.messageExtra())
document.write(celular5.message()+celular5.messageExtra())