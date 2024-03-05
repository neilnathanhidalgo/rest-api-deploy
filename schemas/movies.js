import z from "zod";

const movieSchema = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title must be a string",
  }),
  genre: z.array(
    z.enum([
      "Action",
      "Crime",
      "Drama",
      "Adventure",
      "Sci-Fi",
      "Animation",
      "Romance",
      "Biography",
      "Fantasy",
    ]),
    {
      required_error: "Genre is required",
    }
  ),
  year: z.number().int().positive().min(1888).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  poster: z.string().url({
    message: "Poster must be a valid URL",
  }),
});

export function validateMovie(input) {
  return movieSchema.safeParse(input);
}

export function validatePartialMovie(input) {
  return movieSchema.partial().safeParse(input);
}
