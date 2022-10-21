import Button from "./";

export default function SmallButton({ children, ...rest }) {
  return (
    <Button
      className="border-blue-500 border-[1px] py-1 px-3 text-white text-xs"
      {...rest}>
      {children}
    </Button>
  );
}
