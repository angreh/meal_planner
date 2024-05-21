import { useState } from "react";

import { useIngredientStore } from "@stores/ingredient";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@components/ui/drawer";

type CreateEditFormProps = {
  title: string;
  saveFn: () => void;
};
const CreateEditForm = ({ saveFn, title }: CreateEditFormProps) => {
  const { ingredient, setIngredientProperty } = useIngredientStore();
  const [isOpen, setIsOpen] = useState(false);

  const saveHandler = () => {
    saveFn();
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="w-full">{title}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>

        <div className="space-y-2 px-4">
          <Input
            type="text"
            placeholder="name"
            value={ingredient.name}
            onChange={(e) => setIngredientProperty("name", e.target.value)}
          />
          <Input
            type="text"
            placeholder="description"
            value={ingredient.description}
            onChange={(e) =>
              setIngredientProperty("description", e.target.value)
            }
          />
          <Input
            type="text"
            placeholder="howToPick"
            value={ingredient.howToPick}
            onChange={(e) => setIngredientProperty("howToPick", e.target.value)}
          />
          <Input
            type="text"
            placeholder="amount"
            value={ingredient.amount}
            onChange={(e) => setIngredientProperty("amount", e.target.value)}
          />
        </div>

        <DrawerFooter>
          <Button onClick={saveHandler}>Add Ingredient</Button>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CreateEditForm;
