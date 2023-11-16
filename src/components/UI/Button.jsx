const Button = ({ title, color = 'yellow' }) => {
  let colorClasses;

  switch (color) {
    case 'yellow':
      colorClasses = 'bg-light-yellow shadow-box-light-yellow';
      break;
    case 'blue':
      colorClasses = 'bg-light-blue shadow-box-light-blue';
      break;
    case 'silver':
      colorClasses = 'bg-silver shadow-box-silver';
      break;
  }

  return (
    <button
      className={`${colorClasses} block mb-[1.6rem] uppercase rounded-[10px] font-bold h-[56px] leading-[56px] px-[1.7rem]`}
    >
      {title}
    </button>
  );
};

export default Button;
