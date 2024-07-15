import ODTable from "./ODTable";
import ODTableForm from "./ODTableForm";

export default function ODTableApp() {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-4">
      <ODTableForm />
      <ODTable />
    </div>
  );
}
