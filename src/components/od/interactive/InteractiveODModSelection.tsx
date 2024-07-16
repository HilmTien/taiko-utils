import ModButton from "@/components/ui/molecules/ModButton";

export default function InteractiveODModSelection() {
  return (
    <div className="w-auto flex justify-center pt-6 pb-2">
      <div className="grid grid-cols-2 gap-2 place-content-center place-items-center select-none">
        <ModButton mod="ez" />
        <ModButton mod="ht" />
        <ModButton mod="hr" />
        <ModButton mod="dt" />
      </div>
    </div>
  );
}
