import Button from "./";

export default function PrimaryButton({ children, ...rest }) {
  return (
    <Button className="bg-blue-500 py-2 px-6 text-white font-medium" {...rest}>
      {children}
    </Button>
  );
}
