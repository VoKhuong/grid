import Square from "./square";

export default function Grid({ nbSquares }) {
  let squares = [];

  for (let i = 1; i <= nbSquares; i++) {
    squares.push(<Square number={i} key={i} />);
  }

  return <div className="grid grid-cols-5 md:grid-cols-10">{squares}</div>;
}
