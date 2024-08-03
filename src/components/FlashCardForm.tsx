import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";

import { useFlashCardDispatch } from "../hooks/flashCardHooks";
import { useModalStateDispatch } from "../hooks/modalHooks";

let nextID = 0;

export default function Form() {
  const dispatch = useFlashCardDispatch();
  const modelDispatch = useModalStateDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch({
      type: "addFlashCard",
      payload: {
        id: (nextID++).toString(),
        ...data,
      },
    });
    modelDispatch({
      type: "close",
      payload: {
        open: false,
      },
    });
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
