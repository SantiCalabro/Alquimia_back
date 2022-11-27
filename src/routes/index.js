const { Router } = require("express");
const employesMiddleware = require("./employees.js");
const productMiddleware = require("./product.js");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/employees", employesMiddleware);
router.use("/product", productMiddleware);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
