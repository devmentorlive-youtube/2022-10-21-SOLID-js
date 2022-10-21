import PrimaryButton from "./primary";
import SmallButton from "./small";

export { PrimaryButton, SmallButton };

export default function Button({
  children,
  className,
  onClick = () => {},
  ...rest
}) {
  return (
    <button {...{ className: `${className} w-full`, onClick, ...rest }}>
      {children}
    </button>
  );
}
