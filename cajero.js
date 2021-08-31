class Billete {
    constructor(valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
    
}

let caja = [];
let entregado = [];
let imagenes = [];
imagenes[200] = "s200.jpg";
imagenes[100] = "s100.jpg";
imagenes[50] = "s50.jpg";
imagenes[20] = "s20.jpg";

caja.push(new Billete(200, 10));
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));

let dinero = 0;
let div = 0;
let papeles = 0;

let res = document.getElementById("result");
document.getElementById("enviar").onclick = function () {
    entregarDinero();
}


function entregarDinero() {
    res.innerHTML = "";
    let t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    if (!validarSolicitud(dinero)) {
        return false;
    }

    for (let billete of caja) {

        //recorre una rreglo con el valor de los billetes
        if (dinero >= billete.valor) {
            let cont = 0;
            let valorRetirado = 0; //
            if (dinero % billete.valor == 10) {// ambos if, verfican que el residuo sea 10 y 30 respectivamente
                cont = 1;
                dinero = dinero - 20;
                console.log(dinero, "10");
                valorRetirado = 20;
            } else if (dinero % billete.valor == 30) {
                cont = 2;
                dinero = dinero - 40;
                console.log(dinero, "30");
                valorRetirado = 40;
            }
            div = Math.floor(dinero / billete.valor);
            papeles = div;
            console.log("billete de: ", billete.valor, "cantidad", papeles, "id: 1-2", cont);
            entregado.push(new Billete(billete.valor, papeles));
            dinero = dinero - (billete.valor * papeles) + valorRetirado;
        }
    }

    for (var e of entregado) {//entrega el dinero con sus imagenes 
        if (e.cantidad > 0) {
            res.innerHTML = res.innerHTML + e.cantidad + "" + "<img src=" + e.imagen.src + " />" + "<br/>";

        }
    }
    limpiar(); // limpia la consola
}

function limpiar() {
    entregado = [];
}

function validarSolicitud(dinero) {
    if (dinero == "") {
        res.innerHTML = "Ingrese una cantidad";
        return false;
    } else if (dinero % 10 != 0) {
        res.innerHTML = "Solo multiplos de 10";
        return false;
    } else if (dinero == 30 || dinero == 10) {
        res.innerHTML = "No compa, no entregamos estos billetes";
        return false;
    }
    return true;

}
