exports.handler = async (event) => {
  console.log("Processing Payment:", event);

  if (Math.random() < 0.3) {
      throw new Error("Payment Failed");
  }

  return {
      status: "Payment Success"
  };
};
