import GameBoard from './GameBoard';
import GameTurn from './GameTurn';
import GameStats from './GameStats';

const Game = () => {
  return (
    <div className='pt-[2.4rem] pb-[12.7rem]'>
      <GameTurn />
      <GameBoard />
      <GameStats />
    </div>
  );
};

export default Game;
