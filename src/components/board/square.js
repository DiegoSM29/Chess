const Square = ({ children, x, y, xdGa }) => {

  const isDark = (x + y) % 2 === 0;

  return (
    <div
      key={`${x}-${y}`}
      className={`flex items-center justify-center w-full h-full text-gray-200 font-bold ${xdGa ? 'bg-yellow-700' : isDark ? 'bg-cyan-500' : 'bg-zinc-800'}`}
    >      
      {children}      
    </div>
  )
}

export default Square;