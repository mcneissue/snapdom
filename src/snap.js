const snap = cmp => ({ listen, update }) => {
  const child = cmp(update);
  return target => listen(state => target(child(state)))
};

export default snap