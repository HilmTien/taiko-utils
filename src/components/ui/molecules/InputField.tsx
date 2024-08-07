import { Input } from "../atoms/Input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
}

export default function InputField({ label, id, ...props }: InputFieldProps) {
  // id = typeof id !== undefined ? id : "";

  return (
    <div className="flex gap-2 items-baseline justify-end">
      <label className="text-nowrap" htmlFor={id}>
        {label}
      </label>
      <Input {...props} id={id} />
    </div>
  );
}
