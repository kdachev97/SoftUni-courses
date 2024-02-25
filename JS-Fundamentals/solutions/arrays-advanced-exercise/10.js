function buildWall(array) {
  let dailyConcrete = [];
  let totalConcrete = 0;
  let costs = 0;
  let crews = array.filter(len => len < 30).length;
  while (crews !== 0) {
    let concreteByAllCrews = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 30) {
        array[i]++;
        concreteByAllCrews += 195;
        if (array[i] == 30) {
          crews--;
        }
      }
    }
    totalConcrete += concreteByAllCrews;
    dailyConcrete.push(concreteByAllCrews);
  }
  costs = totalConcrete * 1900;
  console.log(dailyConcrete.join(", "));
  console.log(`${costs} pesos`);
}