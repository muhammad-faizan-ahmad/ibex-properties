import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import developer from "./schemas/developer";
import properties from "./schemas/properties";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, category, developer, properties],
};
