# 🎯 Reto Final: Automatización de una Mini Aplicación E-commerce

Este repositorio contiene el desarrollo del reto final del **Semillero de Calidad de Software T-Evolvers**, bajo la mentoría del **Ing. Rubén Martínez Padilla**, en el cual se automatizaron flujos End-to-End de la aplicación [SauceDemo](https://www.saucedemo.com/) utilizando **Playwright**.

## 🚀 Objetivo

Aplicar los conocimientos adquiridos durante el proceso de formación para automatizar flujos críticos de un e-commerce realista, implementando buenas prácticas de automatización, diseño estructurado y ejecución multiplataforma.

---

## 🧠 Lo aprendido

- Automatización E2E realista con [Playwright](https://playwright.dev/)
- Diseño modular con **Page Object Model (POM)**
- Uso de **fixtures personalizados**
- Hooks (`beforeEach`, `afterEach`) para mantener pruebas limpias
- Generación automática de **reportes HTML**
- Capturas automáticas ante errores
- Ejecución cruzada en navegadores (`chromium`, `firefox`)

---

## 🧪 Flujos Automatizados

### ✅ E2E 1: Compra Exitosa
- Login válido
- Agregar productos al carrito
- Validar ícono del carrito
- Verificación de productos y precios
- Checkout completo
- Validación de resumen de orden (subtotal, impuestos, total)
- Confirmación de compra

#### Escenarios alternos
- Eliminar productos y validar total actualizado
- Intentar checkout sin productos
- Validar visibilidad y formato de precios

---

### 🔐 E2E 2: Login y validaciones de restricción
- Intento de login sin datos
- Usuario bloqueado (validación de mensaje)
- Usuario válido y redirección a productos
- Logout y validación de sesión cerrada

#### Escenarios alternos
- Credenciales incorrectas
- Acceso restringido sin autenticación

---

## 🧰 Tecnologías y herramientas

- `Playwright`
- `JavaScript`
- `VS Code`
- `Node.js`
- `Chromium` y `Firefox`
- Capturas y reportes HTML automáticos

---

## 🛠️ Cómo ejecutar

1. Clonar este repositorio  
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
