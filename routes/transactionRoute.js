const express = require("express");
const { addTransactoin, getAllTransaction, editTransaction, deleteTransaction } = require("../controllers/transactionCltr");

// router Object
const router = express.Router();

// routes
// add transaction POST meethod
router.post("/add-transaction", addTransactoin);

// Edit transaction post method
router.post("/edit-transaction", editTransaction);

// Delete transaction post method
router.post("/delete-transaction", deleteTransaction);

// get transaction post method
router.post("/get-transaction", getAllTransaction);



module.exports = router;