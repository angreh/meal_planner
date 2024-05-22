import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";

import { usePlanStore } from "@stores/plan";
import { useGet, create } from "@data/repo/plan";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import AvailableMeals from "@components/meal/AvailableMeals";
import { SelectedMeals } from "@components/meal/SelectedMeals";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover";
import { Calendar } from "@components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "lib/utils";

const PlanPage = () => {
  const navigate = useNavigate();
  const { id: planId } = useParams();
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  useGet(Number(planId));

  const multiSetDate = (date: DateRange | undefined) => {
    if (date) {
      setDate(date);

      setPlanProperty("beginDate", date.from);
      setPlanProperty("endDate", date.to);
    }
  };

  const { plan, setPlanProperty, meals } = usePlanStore();

  const mutation = useMutation({
    mutationFn: async () => {
      const parsedPlan = { ...plan } as any;
      parsedPlan.beginDate = date?.from;
      parsedPlan.endDate = date?.to;
      parsedPlan.meals = meals;

      await create(parsedPlan);
    },
    onSuccess: () => {
      console.log("success");
    },
  });

  return (
    <div className="space-y-4">
      {/* Plan data */}
      <Card>
        <CardHeader>
          <CardTitle>Plan</CardTitle>
        </CardHeader>

        <CardContent>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "LLL dd, y")} -{" "}
                      {format(date.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(date.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={() => multiSetDate(date)}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      {/* Selected meals */}
      <SelectedMeals />

      <Button
        onClick={() => navigate(`/plan/${planId!}/groceries`)}
        variant="secondary"
        className="w-full">
        Generate Groceries List
      </Button>

      {/* Available meals */}
      <AvailableMeals />

      {/* Actions */}
      <div className="flex justify-stretch space-x-4">
        <Button
          onClick={() => navigate("/plans")}
          variant="outline"
          className="w-full">
          Back
        </Button>
        <Button onClick={mutation.mutate as any} className="w-full">
          Save
        </Button>
      </div>
    </div>
  );
};

export default PlanPage;
