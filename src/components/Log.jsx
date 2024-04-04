export default function Log({ turns }) {
  console.log(turns);

  let turnItems = [];

  for (const turn of turns) {
    turnItems.push({ player: turn.player, square: turn.square });
  }

  turnItems = turnItems.map((item) => (
    <li key={`${item.square.row}${item.square.col}`}>
      {item.player} selected {item.square.row},{item.square.col}
    </li>
  ));

  return <ol id="log">{turnItems}</ol>;
}
