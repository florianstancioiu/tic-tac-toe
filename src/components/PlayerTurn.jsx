import smallXIcon from '../images/small-x-icon.png';
import smallOIcon from '../images/small-o-icon.png';

const PlayerTurn = ({ turn }) => {
  const imageType = turn === 'x' ? smallXIcon : smallOIcon;

  return (
    <div className='flex items-center bg-semi-dark-navy shadow-box-dark-navy rounded-[1rem] px-[1.4rem] h-[4rem] pb-[1rem] leading-[4rem]'>
      <div className='mr-[0.9rem]'>
        <img src={imageType} alt='' />
      </div>
      <p className='text-silver uppercase'>Turn</p>
    </div>
  );
};

export default PlayerTurn;
