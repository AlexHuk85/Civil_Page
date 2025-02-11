document.addEventListener('DOMContentLoaded', function() {
    const tinWeightInput = document.getElementById('tinWeight');
    const totalMassInput = document.getElementById('totalMass');
    const dryMassInput = document.getElementById('dryMass');
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const resultDiv = document.getElementById('result');
    const continueButtonArea = document.getElementById('continueButtonArea');
    const continueBtn = document.getElementById('continueBtn');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    calculateBtn.addEventListener('click', function() {
        const tinWeight = parseFloat(tinWeightInput.value);
        const totalMass = parseFloat(totalMassInput.value);
        const dryMass = parseFloat(dryMassInput.value);

        if (isNaN(tinWeight) || isNaN(totalMass) || isNaN(dryMass)) {
            resultDiv.textContent = 'Please enter valid numbers for all fields.';
            continueButtonArea.classList.remove('show'); // Hide Continue button on error
            return;
        }

        if (dryMass <= tinWeight) {
            resultDiv.textContent = 'Dry Mass must be greater than Tin Weight for valid calculation.';
            continueButtonArea.classList.remove('show'); // Hide Continue button on error
            return;
        }

        if (totalMass <= dryMass) {
            resultDiv.textContent = 'Total Mass must be greater than Dry Mass for valid calculation.';
            continueButtonArea.classList.remove('show'); // Hide Continue button on error
            return;
        }

        const moistureContent = ((totalMass - dryMass) / (dryMass - tinWeight)) * 100;

        if (isFinite(moistureContent)) {
            resultDiv.textContent = `Moisture Content: ${moistureContent.toFixed(2)}%`;
            continueButtonArea.classList.add('show'); // Show Continue button on success
        } else {
            resultDiv.textContent = 'Error in calculation. Please check your inputs.';
            continueButtonArea.classList.remove('show'); // Hide Continue button on error
        }
    });

    clearBtn.addEventListener('click', function() {
        tinWeightInput.value = '';
        totalMassInput.value = '';
        dryMassInput.value = '';
        resultDiv.textContent = '';
        continueButtonArea.classList.remove('show'); // Hide Continue button on clear
    });

    continueBtn.addEventListener('click', function() {
        // Add functionality for Continue button here if needed
        console.log('Continue button clicked'); // Example action
        alert('Continue button clicked!'); // Another example action
    });

    hamburgerBtn.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active'); // Toggle 'active' class to show/hide menu
    });

    // Close hamburger menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            hamburgerMenu.classList.remove('active');
        }
    });
});
