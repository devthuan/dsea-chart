import classNames from "classnames/bind";
import styles from "./ButtonCustom.module.scss";

const cx = classNames.bind(styles);

const ButtonCustom = ({
  text,
  icon,
  size = "medium", // Kích thước mặc định
  variant = "default", // Kiểu mặc định
  outline = true, // Có viền hay không
  onClick,
  className,
}) => {
  // Xác định kích thước
  const sizeClasses = {
    small: "px-3 py-1 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };

  // Xác định kiểu
  const variantClasses = {
    default: "bg-white text-black",
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <div
      className={cx(
        "rounded-[20px] inline-flex justify-center items-center transition-all duration-200 hover:opacity-80 cursor-pointer",
        sizeClasses[size], // Áp dụng kích thước
        variantClasses[variant], // Áp dụng kiểu
        {
          "outline outline-1 outline-offset-[-1px] outline-black": outline, // Áp dụng viền nếu outline là true
        },
        className // Thêm class tùy chỉnh từ props
      )}
      onClick={onClick}
    >
      <div className="flex justify-start gap-1 items-center">
        {icon && (
          <img
            className={cx("w-[16px] h-[16px]", {
              "w-[12px] h-[12px]": size === "small",
              "w-[20px] h-[20px]": size === "large",
            })}
            src={icon}
            alt="icon-button"
          />
        )}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ButtonCustom;
