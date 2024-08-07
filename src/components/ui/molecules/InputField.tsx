import { Input } from "../atoms/Input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
}

export default function InputField({ label, id, ...props }: InputFieldProps) {
  return (
    <label
      className="text-nowrap flex gap-2 items-baseline justify-end"
      htmlFor={id}
    >
      {label}
      <Input {...props} id={id} />
    </label>
  );
}
