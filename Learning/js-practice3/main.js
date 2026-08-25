"use strict";
// Завдання: Система замовлень для інтернет-магазину
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "pending";
    OrderStatus["Shipped"] = "shipped";
    OrderStatus["Delivered"] = "delivered";
    OrderStatus["Canceled"] = "canceled";
})(OrderStatus || (OrderStatus = {}));
function calculateSubtotal(items) {
    return items.reduce((acc, item) => {
        const discount = item.product.discount ?? 0;
        const priceWithDiscount = item.product.price * (1 - discount / 100);
        return acc + priceWithDiscount * item.quantity;
    }, 0);
}
function filterByStatus(orders, status) {
    return orders.filter((order) => { return order.status === status; });
}
function createOrder(items, paymentMethod) {
    const orderId = Math.random().toString(36).slice(2);
    const status = OrderStatus.Pending;
    const totalPrice = calculateSubtotal(items);
    return {
        orderId,
        items,
        status,
        paymentMethod,
        totalPrice,
    };
}
