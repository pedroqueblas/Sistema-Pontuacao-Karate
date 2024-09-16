let pontosAka = 0;
let pontosShiro = 0;
let faltasAka = 0;
let faltas2Aka = 0;
let faltasShiro = 0;
let faltas2Shiro = 0;

function adicionarPonto(lutador) {
    if (lutador === 'aka') {
        pontosAka++;
        document.getElementById('pontuacaoAka').textContent = pontosAka;
    } else if (lutador === 'shiro') {
        pontosShiro++;
        document.getElementById('pontuacaoShiro').textContent = pontosShiro;
    }
}

function zerarPontos(lutador) {
    if (lutador === 'aka') {
        pontosAka = 0;
        document.getElementById('pontuacaoAka').textContent = pontosAka;
    } else if (lutador === 'shiro') {
        pontosShiro = 0;
        document.getElementById('pontuacaoShiro').textContent = pontosShiro;
    }
}

function adicionarFalta(lutador, tipo = 1) {
    if (lutador === 'aka') {
        if (tipo === 1) {
            faltasAka++;
            atualizarFaltas('faltasXAka', faltasAka);
        } else if (tipo === 2) {
            faltas2Aka++;
            atualizarFaltas('faltasX2Aka', faltas2Aka);
        }
    } else if (lutador === 'shiro') {
        if (tipo === 1) {
            faltasShiro++;
            atualizarFaltas('faltasXShiro', faltasShiro);
        } else if (tipo === 2) {
            faltas2Shiro++;
            atualizarFaltas('faltasX2Shiro', faltas2Shiro);
        }
    }
}

function atualizarFaltas(elementId, faltas) {
    const faltasElement = document.getElementById(elementId);
    faltasElement.textContent = 'X'.repeat(faltas);
}

function startStopTimer() {
    // Lógica do cronômetro
}

function resetTimer() {
    // Lógica para resetar o cronômetro
}
let timerInterval;
let isRunning = false;
let elapsedTime = 0;

function startStopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    } else {
        timerInterval = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('cronometro').textContent = formatTime(0);
}

function updateTimer() {
    elapsedTime++;
    document.getElementById('cronometro').textContent = formatTime(elapsedTime);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
