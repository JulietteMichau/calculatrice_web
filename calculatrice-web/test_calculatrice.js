const { Builder, By, until } = require('selenium-webdriver');

async function testCalculatrice() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Charger la page de la calculatrice
        await driver.get('http://localhost/index.html');

        // **Test 1 : Addition**
        await driver.findElement(By.id('nombre1')).sendKeys('10');
        await driver.findElement(By.id('nombre2')).sendKeys('5');
        await driver.findElement(By.id('operation')).sendKeys('+');
        await driver.findElement(By.className('btn-calc')).click();
        let result = await driver.findElement(By.id('resultat')).getText();
        console.log('Test Addition:', result === 'Résultat : 15' ? 'Réussi' : 'Échoué');

        // **Test 2 : Division par Zéro**
        await driver.findElement(By.id('nombre1')).clear();
        await driver.findElement(By.id('nombre2')).clear();
        await driver.findElement(By.id('nombre1')).sendKeys('10');
        await driver.findElement(By.id('nombre2')).sendKeys('0');
        await driver.findElement(By.id('operation')).sendKeys('/');
        await driver.findElement(By.className('btn-calc')).click();
        result = await driver.findElement(By.id('resultat')).getText();
        console.log('Test Division par Zéro:', result === 'Division par zéro impossible.' ? 'Réussi' : 'Échoué');

        // **Test 3 : Entrée Non Valide**
        await driver.findElement(By.id('nombre1')).clear();
        await driver.findElement(By.id('nombre2')).clear();
        await driver.findElement(By.id('nombre2')).sendKeys('5');
        await driver.findElement(By.id('operation')).sendKeys('*');
        await driver.findElement(By.className('btn-calc')).click();
        result = await driver.findElement(By.id('resultat')).getText();
        console.log('Test Entrée Non Valide:', result === 'Veuillez entrer des nombres valides.' ? 'Réussi' : 'Échoué');

        // **Test 4 : Soustraction**
        await driver.findElement(By.id('nombre1')).clear();
        await driver.findElement(By.id('nombre2')).clear();
        await driver.findElement(By.id('nombre1')).sendKeys('50');
        await driver.findElement(By.id('nombre2')).sendKeys('30');
        await driver.findElement(By.id('operation')).sendKeys('-');
        await driver.findElement(By.className('btn-calc')).click();
        result = await driver.findElement(By.id('resultat')).getText();
        console.log('Test Soustraction:', result === 'Résultat : 20' ? 'Réussi' : 'Échoué');

        // **Test 5 : Style du Bouton au Survol**
        const bouton = await driver.findElement(By.className('btn-calc'));
        const initialColor = await bouton.getCssValue('background-color');
        await driver.actions().move({ origin: bouton }).perform(); // Simuler le survol
        const hoverColor = await bouton.getCssValue('background-color');
        console.log('Test Style Bouton au Survol:', initialColor !== hoverColor ? 'Réussi' : 'Échoué');

    } finally {
        // Fermer le navigateur
        await driver.quit();
    }
}

// Exécuter les tests
testCalculatrice();