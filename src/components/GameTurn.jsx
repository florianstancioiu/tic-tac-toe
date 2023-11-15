import LogoImage from '../images/logo.png';
import PlayerTurn from './PlayerTurn';
import RefreshButton from './UI/RefreshButton';

const GameTurn = () => {
  return (
    <div className='flex justify-between mb-[6.4rem] items-center'>
      <div>
        <img
          src={LogoImage}
          alt='Tic Tac Toe Logo'
          className='cursor-pointer'
        />
      </div>
      <PlayerTurn />
      <RefreshButton />
    </div>
  );
};

export default GameTurn;
