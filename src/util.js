export function formatCurrency(num) {
  return (
    num &&
    Number(num.toFixed()).toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    })
  );
}
