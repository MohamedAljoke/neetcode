function calculatePosition(numberOfSteps) {
  //validate number in range?
  const positionHistory = [{ x: 0, y: 0 }];
  for (let i = 0; i < numberOfSteps; i++) {
    /*
      se a ultima posição no x for par então ele pode subir, se for impar ele pode descer 
      se a ultima posição no y for par então ele pode ir a direita, se for impar pode ir a esquerda
    */
    //generates random number 1 = horizontal 2 = vertical
    const horizontalOrVertical = Math.ceil(Math.random() * 2);
    const latestPosition = {
      x: positionHistory[positionHistory.length - 1].x,
      y: positionHistory[positionHistory.length - 1].y,
      i: i,
    };

    if (horizontalOrVertical === 1) {
      latestPosition.x =
        latestPosition.y % 2 ? latestPosition.x - 1 : latestPosition.x + 1;
    }
    if (horizontalOrVertical === 2) {
      latestPosition.y =
        latestPosition.x % 2 ? latestPosition.y - 1 : latestPosition.y + 1;
    }

    positionHistory.push(latestPosition);
  }
  //calculate distance
  const distance = Math.sqrt(
    Math.pow(positionHistory[positionHistory.length - 1].x, 2) +
      Math.pow(positionHistory[positionHistory.length - 1].y, 2)
  );

  return { positionHistory, distance };
}

const result = calculatePosition(50);
console.log(result);
