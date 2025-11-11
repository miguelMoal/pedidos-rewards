export interface Customer {
  id: string;
  phone: string;
  name: string;
  gender: 'Masculino' | 'Femenino' | 'Otro';
  contactChannel: 'WhatsApp' | 'SMS';
  cardBarcode: string;
  worksForFederal?: boolean;
  office?: string;
  points: number;
  visits: number;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  customerId: string;
  amount: number;
  points: number;
  date: Date;
}
