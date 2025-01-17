// Importing the `v4` function from the `uuid` library
import { v4 as uuidv4 } from "uuid";

export default function generateID() {
  const id = uuidv4();
  return id;
}
