type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

type Title = {
  _type: "string";
  current: string;
};

type Slug = {
  _type: "slug";
  current: string;
};

type Image = {
  _type: string;
  asset: Reference;
};

type Category = {
  title: string;
  image: Image;
};

type Developer = {
  _type: "reference";
  _ref: string;
  title: string;
  image: Image;
};

type Reference = {
  _ref: string;
  _type: "reference";
};

type Amenity = {
  _key: string;
  amenity: string;
  icon: string;
};

type Block = {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  split: (separator: string | RegExp) => string[];
};

type Span = {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
};

export type Properties = Base & {
  title: string;
  slug: Slug;
  image: string[];
  alt: string;
  category: Category;
  developer: Developer;
  purpose: "Buy" | "Rent";
  location: string;
  propertyType:
    | "Apartment"
    | "Villa"
    | "Duplex"
    | "Labour"
    | "Land"
    | "Industrial"
    | "Hotel Apartment"
    | "Land Residential"
    | "Residential Building"
    | "Townhouse"
    | "Multiple Sale Units"
    | "Loft Apartment"
    | "Land Mixed Use"
    | "Compound"
    | "Half Floor"
    | "Full Floor"
    | "Bungalow"
    | "Staff Accomodation";
  beds: string;
  bath: number;
  furnishingPreferences: "Furnished" | "Partially Furnished" | "Non-Furnished";
  amenities: Amenity[];
  area: number;
  price: string;
  body: Block[];
};

export type Property = {
  _id: string;
  image: string[];
  alt: string;
  slug: { current: string };
  title: string;
  location: string;
  price: string;
}
