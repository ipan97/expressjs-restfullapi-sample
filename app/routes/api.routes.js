const express = require("express");
const router = express.Router();

// Customer Router
const customerController = require("../controllers/customer.controller.js");
router.post("/customers", customerController.create);
router.get("/customers", customerController.findAll);
router.get("/customers/:id", customerController.findOne);
router.put("/customers/:id", customerController.update);
router.delete("/customers/:id", customerController.delete);

// Airline Router
const airlineController = require("../controllers/airline.controller.js");
router.post("/airlines", airlineController.create);
router.get("/airlines", airlineController.findAll);
router.get("/airlines/:id", airlineController.findOne);
router.put("/airlines/:id", airlineController.update);
router.delete("/airlines/:id", airlineController.delete);

// Ticket Router
const ticketController = require("../controllers/ticket.controller.js");
router.post("/tickets", ticketController.create);
router.get("/tickets", ticketController.findAll);
router.get("/tickets/:id", ticketController.findOne);
router.put("/tickets/:id", ticketController.update);
router.delete("/tickets/:id", ticketController.delete);

// Order Router
const orderController = require("../controllers/order.controller.js");
router.post("/orders", orderController.create);
router.get("/orders", orderController.findAll);
router.get("/orders/:id", orderController.findOne);
router.put("/orders/:id", orderController.update);
router.delete("/orders/:id", orderController.delete);

// Invoice Router
const invoiceController = require("../controllers/invoice.controller.js");
router.post("/invoices", invoiceController.create);
router.get("/invoices", invoiceController.findAll);
router.get("/invoices/:id", invoiceController.findOne);
router.put("/invoices/:id", invoiceController.update);
router.delete("/invoices/:id", invoiceController.delete);

module.exports = router;
