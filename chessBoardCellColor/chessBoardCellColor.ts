function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };

  const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

  return total1 === total2;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
