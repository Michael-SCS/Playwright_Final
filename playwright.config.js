const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests', // Directorio donde se encuentran nuestras pruebas
    timeout: 10000, // Tiempo máximo de espera para cada prueba
    expect:{
        timeout: 8000, // Tiempo de espera para las validaciones
    },
    use: {
        headless: false, // No levantar UI
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
        //{ name: 'firefox', use: { browserName: 'firefox' } },    
        //{ name: 'webkit', use: { browserName: 'webkit' } },
    ],
    reporter: [['html', { outputFolder: 'playwright-report' }]]
})