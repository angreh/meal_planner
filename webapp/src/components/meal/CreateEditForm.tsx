import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useMealStore } from "@stores/meal";
import { Label } from "@components/ui/label";

const CreateEditForm = () => {
  const { meal, setMealProperty } = useMealStore();

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Meal</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                value={meal.name}
                onChange={(e) =>
                  setMealProperty("name", e.target.value, "string")
                }
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                value={meal.description}
                onChange={(e) =>
                  setMealProperty("description", e.target.value, "string")
                }
              />
            </div>

            <div>
              <Label htmlFor="preparation">Preparation</Label>
              <Textarea
                name="preparation"
                value={meal.preparation}
                onChange={(e) =>
                  setMealProperty("preparation", e.target.value, "string")
                }
              />
            </div>

            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                type="number"
                name="time"
                value={meal.preparationTime}
                onChange={(e) =>
                  setMealProperty("preparationTime", e.target.value, "number")
                }
              />
            </div>
          </div>
          <br />
        </CardContent>
      </Card>
    </>
  );
};

export default CreateEditForm;
