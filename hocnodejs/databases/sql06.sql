SELECT orders.total, orders.created_at, customers.name, customers.email 
FROM orders
INNER JOIN customers
ON orders.id = customers.order_id;