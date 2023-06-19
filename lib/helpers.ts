export const priceFormat = (price: number) =>
    `£${(price / 100).toFixed(2)}` ?? '£0.00'
