import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { FlashCard } from "./App";

interface FormProps {
  setOpen: (trigger: boolean) => void;
  setFlashCards: (flashCards: any) => void;
  flashCards: FlashCard[];
}

export default function Form({
  setOpen,
  setFlashCards,
  flashCards,
}: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newFlashCards = [...flashCards, data];
    setFlashCards(newFlashCards);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          error={!!errors.title}
          id="standard-error-helper-text"
          label="Name of Flashcard"
          placeholder="Name"
          helperText={errors.title ? "Incorrect entry." : ""}
          variant="standard"
          {...register("title", { required: "This field is required" })}
          sx={{
            margin: 5,
          }}
        />
        <TextField
          error={!!errors.details}
          id="standard-error-helper-text"
          label="Details of your flashcard"
          placeholder="Details"
          helperText={errors.details ? "Incorrect entry." : ""}
          variant="standard"
          {...register("details", { required: "This field is required" })}
          sx={{
            margin: 5,
          }}
        />
        <Button
          sx={{
            margin: 5,
          }}
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

type Inputs = {
  title: string;
  details: string;
};
