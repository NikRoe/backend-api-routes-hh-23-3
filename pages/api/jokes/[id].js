import { jokes } from "@/lib/data";

export default function handler(request, response) {
  // find out what is the requested id
  const id = request.query.id;

  // we search the jokes array for a joke with the requested id
  const joke = jokes.find((joke) => joke.id === id);

  // if we don't find a joke, we send a response with status 404
  // we include a return so that the function stop executing afterwards
  if (!joke) {
    return response.status(404).json({ status: "Not found" });
  }

  // if we find a joke, we send this back with a status of 200
  response.status(200).json(joke);
}
