const data = {
    labels: ['Janeiro'],
    datasets: [{
        label: 'Número de vendas',
        data: [10],
        borderColor: 'rgba(219, 38, 7, 1)',
        backgroundColor: 'rgba(219, 38, 7, 0.2)',
        borderWidth: 1
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y;
                        }
                        return label;
                    }
                }
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

function addData() {
    const newLabel = prompt("Digite o nome do mês:");
    const newValue = prompt("Digite o valor:");

    if (newLabel && !isNaN(newValue)) {
        data.labels.push(newLabel);
        data.datasets[0].data.push(parseFloat(newValue));
        myChart.update();
    } else {
        alert("Dados inválidos. Por favor, tente novamente.");
    }
}