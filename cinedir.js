function calcular () {
    let l1 = document.getElementById("elo1").value;
    let l2 = document.getElementById("elo2").value;
    let a1 = document.getElementById("ang1").value;
    let a2 = document.getElementById("ang2").value;

    if (l1 == "" || l2 == "" || a1 == "" || a2 == "") {
        document.getElementById("resultado").innerText = "Erro: Preencha todos os campos.";
    } else {
        a1 = a1*(Math.PI/180)
        a2 = a2*(Math.PI/180)

        let x = l1*Math.cos(a1)+l2*Math.cos(a1+a2);
        x = x.toFixed(2);

        let y = l1*Math.sin(a1)+l2*Math.sin(a1+a2);
        y = y.toFixed(2);
        
        document.getElementById("resultado").innerText = `Resultado: coordenadas (${x}, ${y}) no plano cartesiano.`;
    }
}