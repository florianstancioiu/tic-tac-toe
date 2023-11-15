import OMarkImage from '../images/o-mark-light.png';
import XMarkImage from '../images/x-mark-light.png';

const GameCell = ({ value }) => {
  const showImage = value === 'null' ? false : true;
  const imageType =
    value === 'x' ? XMarkImage : value === 'o' ? OMarkImage : '';

  return (
    <div className='bg-semi-dark-navy shadow-box-dark-navy rounded-[1rem] w-[9.6rem] h-[9.6rem] grid place-content-center cursor-pointer'>
      {showImage && <img src={imageType} alt='' />}
    </div>
  );
};

export default GameCell;
