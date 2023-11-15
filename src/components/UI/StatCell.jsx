const StatCell = ({ bgColor, title, numericTitle }) => {
  return (
    <div className={`${bgColor} rounded-[1rem] w-[9.6rem] py-[1.2rem]`}>
      <p className='text-[1.2rem]'>{title}</p>
      <p className='text-[2rem] font-bold'>{numericTitle}</p>
    </div>
  );
};

export default StatCell;
