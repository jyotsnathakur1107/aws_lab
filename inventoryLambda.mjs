exports.handler = async (event) => {
  console.log("Checking Inventory:", event);

  return {
      status: "Inventory Available"
  };
};
