export default function log({ turns }) {
  console.log(turns);

  let turnItems = [];

  for (const turn of turns) {
    turnItems.push({ player: turn.player, square: turn.square });
  }

  turnItems = turnItems.map((item, index) => (
    <li key={index}>
      {item.player} in position {item.square.row} {item.square.col}
    </li>
  ));

  return <ol id="log">{turnItems}</ol>;
}
