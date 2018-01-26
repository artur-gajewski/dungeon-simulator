const getDieValue = (sides) => {
  return Math.floor(Math.random() * sides + 1);
};

export default getDieValue;
