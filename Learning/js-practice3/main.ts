// Завдання: Система замовлень для інтернет-магазину
enum OrderStatus {
    Pending = 'pending',
    Shipped = 'shipped',
    Delivered = 'delivered',
    Canceled  = 'canceled',
}

type PaymentMethod = 'card' | 'cash' | 'crypto'

interface Product {
    readonly id: string,
    title: string,
    price: number,
    category: string,
    discount?: number,
}

interface OrderItem {
    product: Product,
    quantity: number,
}

interface Order {
    orderId: string,
    items: OrderItem[],
    status: OrderStatus,
    paymentMethod: PaymentMethod,
    totalPrice: number
}

function calculateSubtotal (items: OrderItem[]): number {
    return items.reduce((acc, item) => {
        const discount = item.product.discount ?? 0;
        const priceWithDiscount = item.product.price * (1 - discount / 100);
        return acc + priceWithDiscount * item.quantity;
    }, 0);
}

function filterByStatus (orders: Order[], status: OrderStatus): Order[] {
    return orders.filter((order) => {return order.status === status})
}

function createOrder(items: OrderItem[], paymentMethod: PaymentMethod): Order {
    const orderId: string = Math.random().toString(36).slice(2)
    const status: OrderStatus = OrderStatus.Pending
    const totalPrice: number = calculateSubtotal(items)

    return {
        orderId,
        items,
        status,
        paymentMethod,
        totalPrice,
    }
}