export const createOrdersTableQuery: string = `
    CREATE TABLE IF NOT EXISTS orders (
      order_id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT,
      order_date DATE,
      order_total DECIMAL(10, 2),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
`;
