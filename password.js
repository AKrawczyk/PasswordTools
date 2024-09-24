function importFormMPG() {
    document.getElementById('inputForm').innerHTML = `
        <form id="passwordForm">
            <div id="formHeader">
                <button type="button" onclick="generatePasswords()">Generate Passwords</button>
                <div id="optionsContainer">
                    <h4>Options</h4>
                    <div id="options">  
                        <span id="toggleSettings" class="option-toggle">
                            <i class="bi bi-gear" style="cursor: pointer;"></i> Settings
                        </span>
                        <span id="toggleMyWords" class="option-toggle">
                            <i class="bi bi-journal-text" style="cursor: pointer;"></i> My Words
                        </span>
                    </div>
                </div>
            </div>
            <div id="optional" style="display: none;">
                <div id="settingsSection" style="display: none;">
                    <h4>Settings</h4>
                    <div>
                        <label for="minLength">Minimum Word Length:</label>
                        <input type="number" id="minLength" min="3" max="9" value="4" required>
                    </div>
                    <div>
                        <label for="maxLength">Maximum Word Length:</label>
                        <input type="number" id="maxLength" min="1" max="9" value="6" required>
                    </div>
                    <div>
                        <label for="numWords">Number of Words:</label>
                        <input type="number" id="numWords" min="1" max="20" value="3" required>
                    </div>
                    <div>
                        <label for="numPasswords">Number of Passwords:</label>
                        <input type="number" id="numPasswords" min="1" max="99" value="10" required>
                    </div>
                </div>
                <div id="myWordsSection" style="display: none;">
                    <h4>My Words</h4>
                    <div>
                        <label for="firstWord">1st Word:</label>
                        <input type="text" id="firstWord" min="3" max="20" value="">
                    </div>
                    <div>
                        <label for="secondWord">2nd Word:</label>
                        <input type="text" id="secondWord" min="3" max="20" value="">
                    </div>
                    <div>
                        <label for="thirdWord">3rd Word:</label>
                        <input type="text" id="thirdWord" min="3" max="20" value="">
                    </div>
                </div>
            </div>
        </form>
    `;

    document.getElementById('toggleSettings').addEventListener('click', function() {
        toggleSection('settingsSection', 'toggleSettings');
    });

    document.getElementById('toggleMyWords').addEventListener('click', function() {
        toggleSection('myWordsSection', 'toggleMyWords');
    });

    msg = `<p>Click Generate Passwords or Choose an option.</p></br>
        <p>Password check powered by <a href=https://www.haveibeenpwned.com>haveibeenpwned.com</a></p>
        <p>The password strength used here is calculated based on 200 billion password combinations generated per second.
        </br></br>Second scource to check password strength <a href=https://www.security.org/how-secure-is-my-password/>how-secure-is-my-password</a></p>`;

    document.getElementById('output').innerHTML = msg;

    const inputminlength = document.getElementById('minLength');
    inputminlength.addEventListener('input', function() {
        if (this.value && !isNaN(this.value)) {
            this.value = Math.max(3, Math.min(9, parseInt(this.value)));
        }
    });

    const inputmaxlength = document.getElementById('maxLength');
    inputmaxlength.addEventListener('input', function() {
        if (this.value && !isNaN(this.value)) {
            this.value = Math.max(3, Math.min(9, parseInt(this.value)));
        }
    });

    const inputnumword = document.getElementById('numWords');
    inputnumword.addEventListener('input', function() {
        if (this.value && !isNaN(this.value)) {
            this.value = Math.max(1, Math.min(20, parseInt(this.value)));
        }
    });

    const inputnumpass = document.getElementById('numPasswords');
    inputnumpass.addEventListener('input', function() {
        if (this.value && !isNaN(this.value)) {
            this.value = Math.max(1, Math.min(99, parseInt(this.value)));
        }
    });

    const inputWord1 = document.getElementById('firstWord');
    inputWord1.addEventListener('input', function() {
        if (this.value.length > 20) {
            this.value = this.value.slice(0, 20);
        }
    });

    inputWord1.addEventListener('blur', function() {
        if (this.value.length < 3) {
            this.value = '';
            this.placeholder = 'Must be 3 letters or more';
        }
    });

    const inputWord2 = document.getElementById('secondWord');
    inputWord2.addEventListener('input', function() {
        if (this.value.length > 20) {
            this.value = this.value.slice(0, 20);
        }
    });

    inputWord2.addEventListener('blur', function() {
        if (this.value.length < 3) {
            this.value = '';
            this.placeholder = 'Must be 3 letters or more';
        }
    });

    const inputWord3 = document.getElementById('thirdWord');
    inputWord3.addEventListener('input', function() {
        if (this.value.length > 20) {
            this.value = this.value.slice(0, 20);
        }
    });

    inputWord3.addEventListener('blur', function() {
        if (this.value.length < 3) {
            this.value = '';
            this.placeholder = 'Must be 3 letters or more';
        }
    });
}

function importFormRPG() {
    document.getElementById('inputFormRandom').innerHTML = `
        <form id="passwordForm">
            <div id="formHeader">
                <button type="button" onclick="generateRandomPassword()">Generate Passwords</button>
                <div id="optionsContainer">
                    <h4>Options</h4>
                    <div id="options">  
                        <span id="toggleSettingsRandom" class="option-toggle">
                            <i class="bi bi-gear" style="cursor: pointer;"></i> Settings
                        </span>
                    </div>
                </div>
            </div>
            <div id="optionalRandom" style="display: none;">
                <div id="settingsSectionRandom" style="display: none;">
                    <h4>Settings</h4>
                    <div>
                        <label for="numLetters">Password Length:</label>
                        <input type="number" id="numLetters" min="6" max="99" value="12" required>
                    </div>
                    <div>
                        <label for="numPasswordsRandom">Number of Passwords:</label>
                        <input type="number" id="numPasswordsRandom" min="1" max="99" value="10" required>
                    </div>
                </div>
            </div>
        </form>
    `;

    document.getElementById('toggleSettingsRandom').addEventListener('click', function() {
        toggleSectionRandom('settingsSectionRandom', 'toggleSettingsRandom');
    });

    msg = `<p>Click Generate Passwords or Choose an option.</p></br>
        <p>Password check powered by <a href=https://www.haveibeenpwned.com>haveibeenpwned.com</a></p>
        <p>The password strength used here is calculated based on 200 billion password combinations generated per second.
        </br></br>Second scource to check password strength <a href=https://www.security.org/how-secure-is-my-password/>how-secure-is-my-password</a></p>`;

    document.getElementById('outputRandom').innerHTML = msg;


    const inputnumletters = document.getElementById('numLetters');
    inputnumletters.addEventListener('inputFormRandom', function() {
        if (this.value && !isNaN(this.value)) {
            this.value = Math.max(6, Math.min(99, parseInt(this.value)));
        }
    });

    const inputnumpassrand = document.getElementById('numPasswordsRandom');
    inputnumpassrand.addEventListener('inputFormRandom', function() {
        if (this.value && !isNaN(this.value)) {
            this.value = Math.max(1, Math.min(99, parseInt(this.value)));
        }
    });
}

// Add this after the HTML insertion
function toggleSection(sectionId, iconId) {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById(iconId);
    const optional = document.getElementById('optional');
    
    if (section.style.display === "none") {
        section.style.display = "block";
        icon.style.color = "#0d6efd"; // Bootstrap primary color
        optional.style.display = "block"; // Show optional section
    } else {
        section.style.display = "none";
        icon.style.color = ""; // Reset color
        
        // Check if both sections are now hidden
        const otherSectionId = sectionId === 'settingsSection' ? 'myWordsSection' : 'settingsSection';
        const otherSection = document.getElementById(otherSectionId);
        if (otherSection.style.display === "none") {
            optional.style.display = "none"; // Hide optional section if both are hidden
        }
    }
}

function toggleSectionRandom(sectionId, iconId) {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById(iconId);
    const optionalRandom = document.getElementById('optionalRandom');
    
    if (section.style.display === "none") {
        section.style.display = "block";
        icon.style.color = "#0d6efd"; // Bootstrap primary color
        optionalRandom.style.display = "block"; // Show optional section
    } else {
        section.style.display = "none";
        icon.style.color = ""; // Reset color
        
        // Check if both sections are now hidden
        //const otherSectionId = sectionId === 'settingsSectionRandom' ? 'settingsSectionRandom' : 'settingsSectionRandom';
        //const otherSection = document.getElementById(otherSectionId);
        //f (otherSection.style.display === "none") {
            optionalRandom.style.display = "none"; // Hide optional section if both are hidden
        //}
    }
}

function importFormPwdTest() {
    document.getElementById('inputFormPwdTest').innerHTML = `
        <form id="passwordTestForm">
            <div class="form-group">
                <label for="passwordInput">Enter Password to Test:</label>
                <input type="password" id="passwordInput" class="form-control" required>
            </div>
            </br>
            <button type="button" onclick="TestPassword()" class="btn btn-primary">Test Password</button>
        </form>
        <div id="passwordStrength"></div>
        <div id="pwnedResult"></div>
    `;
    msg = `<p>Password check powered by <a href=https://www.haveibeenpwned.com>haveibeenpwned.com</a></p>
           <p>The password strength used here is calculated based on 200 billion password combinations generated per second.
           </br></br>Second scource to check password strength <a href=https://www.security.org/how-secure-is-my-password/>how-secure-is-my-password</a></p>`;

    document.getElementById('outputPwdTest').innerHTML = msg;
}

function getRandomWord(dictionary, minLength, maxLength) {
    let word;
    do {
        word = dictionary[Math.floor(Math.random() * dictionary.length)];
    } while (word.length < minLength || word.length > maxLength);
    return word;
}

function generatePasswords() {
    const minLength = parseInt(document.getElementById('minLength').value);
    const maxLength = parseInt(document.getElementById('maxLength').value);
    const numWords = parseInt(document.getElementById('numWords').value);
    const numPasswords = parseInt(document.getElementById('numPasswords').value);
    const firstWord = document.getElementById('firstWord').value;
    const secondWord = document.getElementById('secondWord').value;
    const thirdWord = document.getElementById('thirdWord').value;

    // Hide optional section
    document.getElementById('optional').style.display = 'none';

    // Hide settings and mywords sections
    document.getElementById('settingsSection').style.display = 'none';
    document.getElementById('myWordsSection').style.display = 'none';

    // Reset the toggle icons' color
    document.getElementById('toggleSettings').style.color = '';
    document.getElementById('toggleMyWords').style.color = '';

    fetch('https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt')
        .then(response => response.text())
        .then(data => {
            const dictionary = data.split('\n');
            const specialChars = "!%^*()[]{}_-=?#;:<>.|~";

            let word;
            let output = '';
            const passwordPromises = [];
            for (let p = 0; p < numPasswords; p++) {
                const randomSpecialChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
                let password = '';
                for (let w = 0; w < numWords; w++) {
                    if ((w === 0) && (firstWord !== ""))
                    {
                        word = firstWord;
                    }
                    else if ((w === 1) && (secondWord !== ""))
                    {
                        word = secondWord;
                    }
                    else if ((w === 2) && (thirdWord !== ""))
                    {
                        word = thirdWord;
                    }
                    else
                    {
                        word = getRandomWord(dictionary, minLength, maxLength);
                    }
                    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
                    password += capitalizedWord;

                    // Add random numbers and special characters
                    const randomNumber = Math.floor(Math.random() * 10);
                    if (w < numWords - 1) {
                        password += `${randomNumber}${randomSpecialChar}`;
                    } else {
                        password += `${randomNumber}`;
                    }
                    
                }
                passwordPromises.push(checkPassword(password));
            }
            Promise.all(passwordPromises).then(results => {
                output = `
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Not Leaked</th>
                            <th>Complexity</th>
                            <th>Strength</th>
                            <th>Password</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                `;
                results.forEach(result => {
                    const complexity = checkComplexity(result.password);
                    const complexityColor = getComplexityColor(complexity);
                    const yearsToCrack = calculateTimeToCrack(result.password);
                    const americanTime = convertYearsToName(yearsToCrack, 'american');
                    const britishTime = convertYearsToName(yearsToCrack, 'british');
                    
                    output += `
                    <tr>
                        <td>${result.compromised ? 
                            '<i class="bi bi-x-circle-fill text-danger"></i>' : 
                            '<i class="bi bi-check-circle-fill text-success"></i>'}
                        </td>
                        <td>
                            <span class="complexity-indicator" onclick="showComplexityDetails('${result.password}', this)">
                            <i class="bi bi-circle-fill" style="color: ${getComplexityColor(checkComplexity(result.password))}"></i>
                        </span>
                        </td>
                        <td>
                            British: ${Math.round(britishTime.value)} ${Math.round(britishTime.value) === 1 ? britishTime.unit : britishTime.pluralUnit}
                            (American: ${Math.round(americanTime.value)} ${Math.round(americanTime.value) === 1 ? americanTime.unit : americanTime.pluralUnit})
                            
                        </td>
                        <td class="${result.compromised ? 'text-danger' : 'text-success'}">
                            ${escapeHtml(result.password)}
                        </td>
                    </tr>`;
                });
                output += `
                    </tbody>
                </table>
                <p>Password check powered by <a href=https://www.haveibeenpwned.com>haveibeenpwned.com</a></p>
                <p>The password strength used here is calculated based on 200 billion password combinations generated per second.
                </br></br>Second scource to check password strength <a href=https://www.security.org/how-secure-is-my-password/>how-secure-is-my-password</a></p>`;
                document.getElementById('output').innerHTML = output;
            });
        })
        .catch(error => {
            console.error('Error reading the file:', error);
        });
    // After generating passwords, you might want to scroll to the results
    document.getElementById('output').scrollIntoView({behavior: 'smooth'});
}

function TestPassword() {
    const passwordPwdTest = document.getElementById('passwordInput').value;
    const passwordPromisesPwdTest = [];
    passwordPromisesPwdTest.push(checkPassword(passwordPwdTest));
    Promise.all(passwordPromisesPwdTest).then(results => {
        output = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Not Leaked</th>
                    <th>Complexity</th>
                    <th>Strength</th>
                    <th>Password</th>
                    
                </tr>
            </thead>
            <tbody>
        `;
        results.forEach(result => {
            const complexityp = checkComplexity(result.password);
            const complexityColorp = getComplexityColor(complexityp);
            const yearsToCrackp = calculateTimeToCrack(result.password);
            const americanTimep = convertYearsToName(yearsToCrackp, 'american');
            const britishTimep = convertYearsToName(yearsToCrackp, 'british');
            
            output += `
            <tr>
                <td>${result.compromised ? 
                    '<i class="bi bi-x-circle-fill text-danger"></i>' : 
                    '<i class="bi bi-check-circle-fill text-success"></i>'}
                </td>
                <td>
                    <span class="complexity-indicator" onclick="showComplexityDetails('${result.password}', this)">
                    <i class="bi bi-circle-fill" style="color: ${getComplexityColor(checkComplexity(result.password))}"></i>
                </span>
                </td>
                <td>
                    British: ${Math.round(britishTimep.value)} ${Math.round(britishTimep.value) === 1 ? britishTimep.unit : britishTimep.pluralUnit}
                    (American: ${Math.round(americanTimep.value)} ${Math.round(americanTimep.value) === 1 ? americanTimep.unit : americanTimep.pluralUnit})
                    
                </td>
                <td class="${result.compromised ? 'text-danger' : 'text-success'}">
                    ${escapeHtml(result.password)}
                </td>
            </tr>`;
        });
        output += `
            </tbody>
        </table>
        <p>Password check powered by <a href=https://www.haveibeenpwned.com>haveibeenpwned.com</a></p>
        <p>The password strength used here is calculated based on 200 billion password combinations generated per second.
        </br></br>Second scource to check password strength <a href=https://www.security.org/how-secure-is-my-password/>how-secure-is-my-password</a></p>`;
        document.getElementById('outputPwdTest').innerHTML = output;
    })
    .catch(error => {
        console.error('Error reading the file:', error);
    });
    // After generating passwords, you might want to scroll to the results
    document.getElementById('outputPwdTest').scrollIntoView({behavior: 'smooth'});
}

function generateRandomPassword() {
    const length = parseInt(document.getElementById('numLetters').value); // Get desired password length
    const includeUppercase = true; // Include uppercase letters
    const includeLowercase = true; // Include lowercase letters
    const includeNumbers = true; // Include numbers
    const includeSpecialChars = true; // Include special characters

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!%^*()[]{}_-=?#;:<>.|~';

    // Hide optional section
    document.getElementById('optionalRandom').style.display = 'none';

    // Hide settings and mywords sections
    document.getElementById('settingsSectionRandom').style.display = 'none';

    // Reset the toggle icons' color
    document.getElementById('toggleSettingsRandom').style.color = '';

    const numPasswordsRandom = parseInt(document.getElementById('numPasswordsRandom').value);
    const outputrandompwd = [];

    for (let i = 0; i < numPasswordsRandom; i++) 
    {
        let characterPool = '';
        let password = '';

        // Ensure at least one character from each selected type
        if (includeUppercase) {
            password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
            characterPool += uppercaseChars;
        }
        if (includeLowercase) {
            password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
            characterPool += lowercaseChars;
        }
        if (includeNumbers) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
            characterPool += numberChars;
        }
        if (includeSpecialChars) {
            password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
            characterPool += specialChars;
        }

        // Fill the rest of the password length with random characters from the character pool
        for (let i = password.length; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            password += characterPool[randomIndex];
        }

        // Shuffle the password to ensure randomness
        password = password.split('').sort(() => Math.random() - 0.5).join('');
        outputrandompwd.push(checkPassword(password));
    }
    Promise.all(outputrandompwd).then(results => {
        output = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Not Leaked</th>
                    <th>Complexity</th>
                    <th>Strength</th>
                    <th>Password</th>
                    
                </tr>
            </thead>
            <tbody>
        `;
        results.forEach(result => {
            const complexityr = checkComplexity(result.password);
            const complexityColorr = getComplexityColor(complexityr);
            const yearsToCrackr = calculateTimeToCrack(result.password);
            const americanTimer = convertYearsToName(yearsToCrackr, 'american');
            const britishTimer = convertYearsToName(yearsToCrackr, 'british');
            
            output += `
            <tr>
                <td>${result.compromised ? 
                    '<i class="bi bi-x-circle-fill text-danger"></i>' : 
                    '<i class="bi bi-check-circle-fill text-success"></i>'}
                </td>
                <td>
                    <span class="complexity-indicator" onclick="showComplexityDetails('${result.password}', this)">
                    <i class="bi bi-circle-fill" style="color: ${getComplexityColor(checkComplexity(result.password))}"></i>
                </span>
                </td>
                <td>
                    British: ${Math.round(britishTimer.value)} ${Math.round(britishTimer.value) === 1 ? britishTimer.unit : britishTimer.pluralUnit}
                    (American: ${Math.round(americanTimer.value)} ${Math.round(americanTimer.value) === 1 ? americanTimer.unit : americanTimer.pluralUnit})
                    
                </td>
                <td class="${result.compromised ? 'text-danger' : 'text-success'}">
                    ${escapeHtml(result.password)}
                </td>
            </tr>`;
        });
        output += `
            </tbody>
        </table>
        <p>Password check powered by <a href=https://www.haveibeenpwned.com>haveibeenpwned.com</a></p>
        <p>The password strength used here is calculated based on 200 billion password combinations generated per second.
        </br></br>Second scource to check password strength <a href=https://www.security.org/how-secure-is-my-password/>how-secure-is-my-password</a></p>`;
        document.getElementById('outputRandom').innerHTML = output;
    })
    .catch(error => {
        console.error('Error reading the file:', error);
    });
    // After generating passwords, you might want to scroll to the results
    document.getElementById('outputRandom').scrollIntoView({behavior: 'smooth'});
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function checkPassword(password) {
    const sha1 = CryptoJS.SHA1(password).toString().toUpperCase();
    const prefix = sha1.substr(0, 5);
    const suffix = sha1.substr(5);

    return fetch(`https://api.pwnedpasswords.com/range/${prefix}`)
        .then(response => response.text())
        .then(data => {
            const hashes = data.split('\n');
            const match = hashes.find(hash => hash.startsWith(suffix));
            return {
                password: password,
                compromised: match !== undefined
            };
        });
}

function checkComplexity(password) {
    let score = 0;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
}

function getComplexityColor(score) {
    if (score < 3) return 'red';
    if (score < 5) return 'orange';
    return 'green';
}

function showComplexityDetails(password, element) { //complexity, element) {
    const description = getComplexityDescription(password); //complexity);
    const modalBody = document.getElementById('complexityModalBody');
    modalBody.innerHTML = description.replace(/\n/g, '<br>');
    
    const modal = new bootstrap.Modal(document.getElementById('complexityModal'));
    modal.show();
    
    // Position the modal near the clicked element
    const modalElement = document.querySelector('.modal-dialog');
    modalElement.style.position = '';
    modalElement.style.top = '';
    modalElement.style.left = '';
}

function getComplexityDescription(password) {
    const yearsToCrack = calculateTimeToCrack(password);
    const americanTime = convertYearsToName(yearsToCrack, 'american');
    const britishTime = convertYearsToName(yearsToCrack, 'british');
    
    const rules = [
        { test: pwd => pwd.length >= 12, text: 'At least 12 characters' },
        { test: pwd => /[a-z]/.test(pwd), text: 'Lowercase letters' },
        { test: pwd => /[A-Z]/.test(pwd), text: 'Uppercase letters' },
        { test: pwd => /[0-9]/.test(pwd), text: 'Numbers' },
        { test: pwd => /[^A-Za-z0-9]/.test(pwd), text: 'Special characters !%^*()[]{}_-=?#;:<>.|~' }
    ];

    let description = '<p>Password should have:</p><ul style="list-style-type: none; padding-left: 0;">';
    let score = 0;

    rules.forEach(rule => {
        const passed = rule.test(password);
        if (passed) score++;
        const color = passed ? 'green' : 'red';
        const symbol = passed ? '✓' : '✗';
        description += `<li style="color: ${color};">${symbol} ${rule.text}</li>`;
    });

    description += '</ul>';
    description += `<p>Current score: <span style="color: ${getComplexityColor(score)};">${score}/5</span></p>`;
    description += '<p>Strength:</p><ul style="list-style-type: none; padding-left: 0;">';
    description += `<p>British: ${Math.round(britishTime.value)} ${Math.round(britishTime.value) === 1 ? britishTime.unit : britishTime.pluralUnit}</p>`;
    description += `<p>American: ${Math.round(americanTime.value)} ${Math.round(americanTime.value) === 1 ? americanTime.unit : americanTime.pluralUnit}</p>`;
    return description;
}

function generateCombinations() {

    const word = document.getElementById('word').value;
    const minNumber = parseInt(document.getElementById('minNum').value, 10);
    const maxNumber = parseInt(document.getElementById('maxNum').value, 10);
    const minSpecial = parseInt(document.getElementById('minSpecial').value, 10);
    const maxSpecial = parseInt(document.getElementById('maxSpecial').value, 10);
            
    const startTime = performance.now(); // Start measuring time

    // Initialize the list to store combinations
    const combinations = [];
    const specialChars = "!%^*()[]{}_-=?#;:<>.|~";
    const upper = word.charAt(0).toUpperCase() + word.slice(1);
    const lower = word.charAt(0).toLowerCase() + word.slice(1);

    // Rule 1: Uppercase first letter
    combinations.push(upper);

    // Rule 2: Lowercase first letter
    combinations.push(lower);

    // Rule 3: Add a special character at the end
    for (const char of specialChars) {
    for (let count = minSpecial; count <= maxSpecial; count++) {
        combinations.push(upper + char.repeat(count));
        combinations.push(lower + char.repeat(count));
    }
    }

    // Rule 4: Add a number between minNumber and maxNumber
    for (let num = minNumber; num <= maxNumber; num++) {
        combinations.push(upper + num);
        combinations.push(lower + num);
    }

    // Rule 5: Combination with a number at the start
    for (let num = minNumber; num <= maxNumber; num++) {
        combinations.push(num + upper);
        combinations.push(num + lower);
    }

    // Rule 7: Add a special character and a number
    for (const char of specialChars) {
    for (let count = minSpecial; count <= maxSpecial; count++) {
        for (let num = minNumber; num <= maxNumber; num++) {
            combinations.push(upper + char.repeat(count) + num);
            combinations.push(lower + char.repeat(count) + num);
        }
    }
    }

    // Rule 8: Combination with a number at the start
    for (let num = minNumber; num <= maxNumber; num++) {
        for (const char of specialChars) {
        for (let count = minSpecial; count <= maxSpecial; count++) {
            combinations.push(num + char.repeat(count) + upper);
            combinations.push(num + char.repeat(count) + lower);
        }
        }
    }

    const endTime = performance.now(); // Stop measuring time
    const totalTime = endTime - startTime;
    const totalCombinations = combinations.length;

    timeoutput = `Generated ${totalCombinations} combinations in ${totalTime.toFixed(2)} milliseconds.`;
    combinationsoutput = combinations.join(', ');

    output = `<p>${timeoutput}</br></br>${combinationsoutput}</p>`;
    document.getElementById('output').innerHTML = output;
}

function convertYearsToName(years, system = 'american') {
    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInYear = 31536000;  // Assuming 365 days in a year for simplicity

    const totalSeconds = years * secondsInYear;

    if (totalSeconds < 1) {
        return { value: 1, unit: "second", pluralUnit: "seconds" };
    } else if (totalSeconds < secondsInMinute) {
        return { value: Math.round(totalSeconds), unit: "second", pluralUnit: "seconds" };
    } else if (totalSeconds < secondsInHour) {
        return { value: Math.round(totalSeconds / secondsInMinute), unit: "minute", pluralUnit: "minutes" };
    } else if (totalSeconds < secondsInDay) {
        return { value: Math.round(totalSeconds / secondsInHour), unit: "hour", pluralUnit: "hours" };
    } else if (totalSeconds < secondsInYear) {
        return { value: Math.round(totalSeconds / secondsInDay), unit: "day", pluralUnit: "days" };
    } else if (years < 100) {
        return { value: Math.round(years), unit: "year", pluralUnit: "years" };
    }

    const names = {
        2: [['hundred years', 'hundred years'], ['hundred years', 'hundred years']],
        3: [['thousand years', 'thousand years'], ['thousand years', 'thousand years']],
        6: [['million years', 'million years'], ['million years', 'million years']],
        9: [['billion years', 'billion years'], ['thousand million years', 'thousand million years']],
        12: [['trillion years', 'trillion years'], ['billion years', 'billion years']],
        15: [['quadrillion years', 'quadrillion years'], ['thousand billion years', 'thousand billion years']],
        18: [['quintillion years', 'quintillion years'], ['trillion years', 'trillion years']],
        21: [['sextillion years', 'sextillion years'], ['thousand trillion years', 'thousand trillion years']],
        24: [['septillion years', 'septillion years'], ['quadrillion years', 'quadrillion years']],
        27: [['octillion years', 'octillion years'], ['thousand quadrillion years', 'thousand quadrillion years']],
        30: [['nonillion years', 'nonillion years'], ['quintillion years', 'quintillion years']],
        33: [['decillion years', 'decillion years'], ['thousand quintillion years', 'thousand quintillion years']],
        36: [['undecillion years', 'undecillion years'], ['sextillion years', 'sextillion years']],
        39: [['duodecillion years', 'duodecillion years'], ['thousand sextillion years', 'thousand sextillion years']],
        42: [['tredecillion years', 'tredecillion years'], ['septillion years', 'septillion years']],
        45: [['quattuordecillion years', 'quattuordecillion years'], ['thousand septillion years', 'thousand septillion years']],
        84: [['', ''], ['quattuordecillion years', 'quattuordecillion years']],
        100: [['googol years', 'googol years'], ['googol years', 'googol years']],
        303: [['centillion years', 'centillion years'], ['', '']],
        600: [['', ''], ['centillion years', 'centillion years']]
    };
    
    const index = system === 'american' ? 0 : 1;

    for (let [power, name] of Object.entries(names).sort((a, b) => b[0] - a[0])) {
        if (years >= Math.pow(10, power)) {
            return { 
                value: years / Math.pow(10, power), 
                unit: name[index][0],
                pluralUnit: name[index][1]
            };
        }
    }
    
    return { value: Infinity, unit: "googolplex years or more" };
}

function calculateTimeToCrack(password) {
    const charSets = {
        lower: 26,
        upper: 26,
        digits: 10,
        symbols: 21 // Assuming a basic set of symbols
    };

    let combinations = 1;
    let charSetSize = 0;

    if (/[a-z]/.test(password)) charSetSize += charSets.lower;
    if (/[A-Z]/.test(password)) charSetSize += charSets.upper;
    if (/\d/.test(password)) charSetSize += charSets.digits;
    if (/[^a-zA-Z\d]/.test(password)) charSetSize += charSets.symbols;

    combinations = Math.pow(charSetSize, password.length);

    // Assuming a modern computer can try 200 billion passwords per second
    const attemptsPerSecond = 200e9;
    const secondsInYear = 60 * 60 * 24 * 365;

    const timeInSeconds = combinations / attemptsPerSecond;
    const timeInYears = timeInSeconds / secondsInYear;

    return timeInYears;
}
    
            