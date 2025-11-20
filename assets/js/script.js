const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // Verifica se os valores são válidos
   if (weight <= 0 || height <= 0) {
    alert('Valores devem ser positivos!');
    return;
}
    
    // Calcula o IMC (altura deve estar em metros)
   function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

function getBMIClassification(bmi) {
    // Lógica de classificação
}

// No evento submit:
const bmi = calculateBMI(weight, height);
const classification = getBMIClassification(bmi);
    
    // Remove a classe 'hidden' para mostrar o resultado
    document.getElementById('infos').classList.remove('hidden');
    
    // Determina a classificação do IMC
    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
    } else {
        description = "Cuidado! Você está com obesidade mórbida!";
    }
    
    // Exibe o resultado
    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});