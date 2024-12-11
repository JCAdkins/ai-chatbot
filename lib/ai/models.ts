// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: "gpt-4o-mini",
    label: "GPT 4o mini",
    apiIdentifier: "gpt-4o-mini",
    description: "Small model for fast, lightweight tasks",
  },
  {
    id: "gpt-4o",
    label: "GPT 4o",
    apiIdentifier: "gpt-4o",
    description: "For complex, multi-step tasks",
  },
  {
    id: "gpt-4",
    label: "GPT 4",
    apiIdentifier: "gpt-4",
    description: "Older model you get after running out of 4o requests.",
  },
  {
    id: "gpt-3.5-turbo-16k",
    label: "GPT 3.5 Turbo 16k",
    apiIdentifier: "gpt-3.5-turbo-16k",
    description: "Older model but infinite requests.",
  },
] as const;

// export const DEFAULT_MODEL_NAME: string = "gpt-4o-mini";
export const DEFAULT_MODEL_NAME: string = "gpt-4";
