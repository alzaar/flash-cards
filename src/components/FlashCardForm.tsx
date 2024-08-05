import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";

import { useFlashCardDispatch } from "../hooks/flashCardHooks";
import { useModalState, useModalStateDispatch } from "../hooks/modalHooks";

let nextID = 0;

export default function Form() {
  const dispatch = useFlashCardDispatch();
  const modelDispatch = useModalStateDispatch();
  const { flashCard } = useModalState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      title: flashCard?.title,
      details: flashCard?.details,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (flashCard?.id) {
      dispatch({
        type: "editFlashCard",
        payload: {
          id: flashCard?.id,
          ...data,
        },
      });
    } else {
      dispatch({
        type: "addFlashCard",
        payload: {
          id: (nextID++).toString(),
          ...data,
        },
      });
    }

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
          helperText={errors.title ? errors.title.message : ""}
          variant="standard"
          {...register("title", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Title cannot exceed 10 characters",
            },
          })}
          sx={{
            margin: 5,
            width: "100%",
          }}
        />
        <TextField
          error={!!errors.details}
          multiline
          id="standard-error-helper-text"
          label="Details of your flashcard"
          placeholder="Details"
          helperText={errors.details ? errors.details.message : ""}
          variant="standard"
          {...register("details", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Details must be at least 10 characters",
            },
            maxLength: {
              value: 180,
              message: "Details cannot exceed 180 characters",
            },
          })}
          sx={{
            // margin: 5,
            width: "100%", // Set the width
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
