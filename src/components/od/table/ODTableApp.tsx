import ODTable from "./ODTable";
import ODTableForm from "./ODTableForm";

export default function ODTableApp() {
  return (
    <div className="flex justify-start gap-4">
      <ODTableForm />
      <ODTable />
    </div>
  );
}
