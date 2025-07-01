

type ButtonType = {
  label?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
};

function Button({
  label,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  children,
}: ButtonType) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-white text-center text-[16px] font-semibold rounded-xl cursor-pointer flex items-center justify-center gap-2 bg-gradient-to-r from-[#fc32a4] from-60% to-[#ed6fb0]
        hover:from-[#fd4fb2] 
        transition-all duration-300 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
      type={type}
    >
      {label || children}
    </button>
  );
}

export default Button;
