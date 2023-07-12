export type PaginationParams = {
  order: string;
  limit: number;
  page: number;
};

// I'm using the same interfaces in both the client and the server because when I build the app, I need the relevant files in the in the client/server directory.
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

export type UserRelevantData = {
  id: string;
  name: string;
  email: string;
  address: address;
};
