import TransactionSchema from "./Transaction.schema.js";

//crate a new user in the table
export const createTransaction = (newTransactionObj) => {
  return TransactionSchema(newTransactionObj).save();
  // return UserSchema.create(newUserObj)
};

export const findTransaction = (filter) => {
  return TransactionSchema.findOne(filter);
};

export const findTransactions = (filter) => {
  return TransactionSchema.find(filter);
};
