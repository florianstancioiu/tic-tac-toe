import Button from './UI/Button';
import LogoImage from '../images/logo.png';
import PickPlayerMark from './PickPlayerMark';

const NewGame = () => {
  return (
    <div className='pt-[12rem] mb-[12rem]'>
      <img
        src={LogoImage}
        alt='Tic Tac Toe Logo'
        className='block mx-auto mb-[32px]'
      />
      <PickPlayerMark />
      <Button title='New Game (vs CPU)' />
      <Button title='New Game (vs Player)' color='blue' />
    </div>
  );
};

export default NewGame;
