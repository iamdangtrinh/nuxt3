export function formatCurrency(value: string | number) {
    if (value === undefined || value === null) return "";
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        maximumFractionDigits: 0,
    }).format(Number(value));
}
