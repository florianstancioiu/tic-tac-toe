const Button = ({ title, color = 'yellow' }) => {
  let colorClasses;

  switch (color) {
    case 'yellow':
      colorClasses = 'bg-light-yellow shadow-box-light-yellow';
      break;
    case 'blue':
      colorClasses = 'bg-light-blue shadow-box-light-blue';
      break;
  }

  return (
    <button
      className={`${colorClasses} block w-[100%] mb-[1.6rem] uppercase rounded-[10px] font-bold h-[56px] leading-[56px]`}
    >
      {title}
    </button>
  );
};

export default Button;
