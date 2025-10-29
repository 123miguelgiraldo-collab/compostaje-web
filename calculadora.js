
function calcular() {
    let G = parseFloat(document.getElementById('massGreen').value) || 0;
    let B = parseFloat(document.getElementById('massBrown').value) || 0;
    let Rg = parseFloat(document.getElementById('typeGreen').value);
    let Rb = parseFloat(document.getElementById('typeBrown').value);
    let Robj = parseFloat(document.getElementById('targetCN').value);

    let Cg = G * (Rg / (Rg + 1));
    let Ng = G * (1 / (Rg + 1));

    if (B === 0) {
        let num = Robj * Ng - Cg;
        let den = Rb - Robj;
        B = (num * (Rb + 1)) / den;
    }

    let Cb = B * (Rb / (Rb + 1));
    let Nb = B * (1 / (Rb + 1));
    let CNFinal = ((Cg + Cb) / (Ng + Nb)).toFixed(2);

    let densidad = 400;
    let volumen = ((G + B) / densidad).toFixed(2);
    let agua = ((G + B) * 0.5).toFixed(2);

    document.getElementById('results').innerHTML = `
        <div class="big">Resultados</div>
        <div class="muted-row"><div>Material seco recomendado:</div><div>${B.toFixed(2)} kg</div></div>
        <div class="muted-row"><div>Proporción C:N final:</div><div>${CNFinal}:1</div></div>
        <div class="muted-row"><div>Agua estimada a añadir:</div><div>${agua} litros</div></div>
        <div class="muted-row"><div>Volumen del compost:</div><div>${volumen} m³</div></div>
        `;
}

document.getElementById('calcBtn').addEventListener('click', calcular);

// Presets (chips)
document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const g = chip.getAttribute('data-g');
        const gb = chip.getAttribute('data-gb');
        if (g) document.getElementById('typeGreen').value = g;
        if (gb) document.getElementById('typeBrown').value = gb;
    });
});
