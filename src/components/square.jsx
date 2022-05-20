export default function Square({ number }) {
  let color = "bg-transparent";
  
  if (!(number % 3) && !(number % 5)) color = "bg-yellow-500";
  else if (!(number % 3)) color = "bg-red-500";
  else if (!(number % 5)) color = "bg-green-500";

  return (
    <div
      className={`${color} w-12 h-12 sm:w-20 sm:h-20 m-2 md:m-6 border-white border-4 justify-self-center flex items-center justify-center`}
    >
      <p className="text-white">{number}</p>
    </div>
  );
}
