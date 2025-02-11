document.addEventListener('DOMContentLoaded', function() {
    const tinWeightInput = document.getElementById('tinWeight');
    const totalMassInput = document.getElementById('totalMass');
    const dryMassInput = document.getElementById('dryMass');
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const tinWeight = parseFloat(tinWeightInput.value);
        const totalMass = parseFloat(totalMassInput.value);
        const dryMass = parseFloat(dryMassInput.value);

        if (isNaN(tinWeight) || isNaN(totalMass) || isNaN(dryMass)) {
            resultDiv.textContent = 'Please enter valid numbers for all fields.';
            return;
        }

        if (dryMass <= tinWeight) {
            resultDiv.textContent = 'Dry Mass must be greater than Tin Weight for valid calculation.';
            return;
        }

        if (totalMass <= dryMass) {
            resultDiv.textContent = 'Total Mass must be greater than Dry Mass for valid calculation.';
            return;
        }

        const moistureContent = ((totalMass - dryMass) / (dryMass - tinWeight)) * 100;

        if (isFinite(moistureContent)) {
            resultDiv.textContent = `Moisture Content: ${moistureContent.toFixed(2)}%`;
        } else {
            resultDiv.textContent = 'Error in calculation. Please check your inputs.';
        }
    });

    clearBtn.addEventListener('click', function() {
        tinWeightInput.value = '';
        totalMassInput.value = '';
        dryMassInput.value = '';
        resultDiv.textContent = '';
    });
});