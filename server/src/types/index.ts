export type QueryParams = {
  page: string;
  limit: string;
  order: string;
  sort: string;
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type UserRelevantData = Omit<
  User,
  "phone" | "website" | "company" | "username"
>;
