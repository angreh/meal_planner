import { Button } from "@components/ui/button";

type CreateEditActionsProps = {
  saveFn: () => void;
  backFn: () => void;
};
export default function CreateEditActions({ saveFn, backFn }: CreateEditActionsProps) {
  return (
    <div className="flex justify-between px-8">
      <Button onClick={backFn} variant="outline">
        Back
      </Button>
      <Button disabled={false} onClick={saveFn}>
        Save
      </Button>
    </div>
  );
}
