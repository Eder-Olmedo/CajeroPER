class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}


function entregarDinero() {
    res.innerHTML = "";
    let t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    if (dinero == '') {
        res.innerHTML = "Ingrese una cantidad";
    } else if (dinero % 10 != 0) {
        res.innerHTML = "Solo multiplos de 10";
    } else if (dinero == 30 || dinero == 10) {
        res.innerHTML = "No compa, no entregamos estos billetes";
    } else {
        for (let bi of caja) {
            if ((dinero % bi.valor == 0) && (dinero >= bi.valor)) {
                div = Math.floor(dinero / bi.valor);
                papeles = div;
                entregado.push(new Billete(bi.valor, papeles));
                dinero = dinero - (bi.valor * papeles);
            }
        }
    }

    for (var e of entregado) {
        if (e.cantidad > 0) {
            res.innerHTML = res.innerHTML + e.cantidad + " billetes de " + e.valor + "<br/>";
        }
    }
    entregado = [];

}


let caja = [];
let entregado = [];
let cbilletes = [];
let vbilletes = [];

caja.push(new Billete(200, 10));
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));

let dinero;
let div = 0;
let papeles = 0;

let res = document.getElementById("result");
document.getElementById("enviar").onclick = function () {
    entregarDinero();
}
