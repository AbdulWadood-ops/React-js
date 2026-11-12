import { Chessboard } from 'react-chessboard';

function App() {
  const chessboardOptions = {
    // your config options here
  };

  return <div className='chess'> <Chessboard options={chessboardOptions} /></div>
}
export default App