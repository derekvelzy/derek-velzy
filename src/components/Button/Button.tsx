// Package imports

// Custom imports

type ButtonProps = { 
  action?: () => void; 
  children?: React.ReactNode; 
};

const Button = ({ action, children }: ButtonProps) => {
  return (
    <button
      onClick={action}
      className="bg-green text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
