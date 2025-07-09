const getCentroid = ([a, b, c]: [number[], number[], number[]]) => {
  const cx = (a[0] + b[0] + c[0]) / 3;
  const cy = (a[1] + b[1] + c[1]) / 3;
  return [cx, cy];
};

export default getCentroid;