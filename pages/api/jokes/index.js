import { jokes } from "@/lib/data";

export default function handler(request, response) {
  // we send all jokes back in the response
  // with .status() we define the status code
  // with .json() we define what we send back
  response.status(200).json(jokes);
}
