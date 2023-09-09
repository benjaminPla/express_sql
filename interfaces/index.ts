export interface IUser {
  id: number;
  username: string;
  age: number;
}

export interface IDatabaseResponse {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  serverStatus: number;
  warningCount: number;
  message: string;
  protocol41: boolean;
  changedRows: number;
}

export interface IOrder {
  id: number;
  username: string;
  age: number;
  order_id: number | null;
  order_date: Date | null;
  order_total: number | null;
}
