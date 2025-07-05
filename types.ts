
export interface Item {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface Client {
  id: string; 
  name: string;
  company: string;
  email: string;
  address: string;
  created_at?: string; // ISO string
}

export interface CompanyInfo {
  id: string; 
  name: string;
  logo: string; // base64 string
  address: string;
  phone: string;
  email: string;
  tax_rate: number; // default tax rate
}

export type QuotationStatus = 'draft' | 'sent' | 'accepted' | 'rejected';

export interface Quotation {
  id: string;
  client_id: string;
  quote_number: string;
  issue_date: string;
  expiry_date: string;
  client: Client;
  items: Item[];
  notes: string;
  discount: {
    type: 'percentage' | 'flat';
    value: number;
  };
  tax_rate: number; // percentage
  status: QuotationStatus;
  created_at?: string; // ISO string
}
