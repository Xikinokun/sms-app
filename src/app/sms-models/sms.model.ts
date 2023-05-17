interface Recipient {
  id: string;
  phone: string;
  deliveryStatus: string;
}

export interface SMS {
  id: string;
  from: string;
  to: Recipient[];
  status: string;
  content?: string;
}
