import Square from "./square";

export default function Grid() {
  let squares = [];

  for (let i = 1; i <= 100; i++) {
    squares.push(<Square number={i} />);
  }
  
  return <div className="grid grid-cols-5 md:grid-cols-10 p-6">{squares}</div>;
}
