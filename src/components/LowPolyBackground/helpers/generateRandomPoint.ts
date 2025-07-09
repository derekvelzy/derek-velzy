import { type Boundary } from "./types";

const randomInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateRandomPoint = (boundary: Boundary) => {
    let point = null;
    let limit = 0;
    while (!point && limit < 100) {
      limit++;
      const x = randomInRange(boundary.outside[0][0], boundary.outside[1][0]);
      const y = randomInRange(boundary.outside[0][1], boundary.outside[1][1]);
  
      if (boundary.inside) {
        const [x1, y1] = boundary.inside[0];
        const [x2, y2] = boundary.inside[1];
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
          continue;
        }
      }
      point = [x, y];
    }
    return point;
};

export default generateRandomPoint