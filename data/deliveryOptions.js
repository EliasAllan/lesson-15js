import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function calculateDeliveryDate(deliveryOption) {
  const today = dayjs();
  const { deliveryDays } = deliveryOption;
  let deliveryDate = today.add(
    deliveryDays,
    'days'
  );
  const deliveryDayofTheWeek = deliveryDate.format(
    'dddd'
  )
  if (deliveryDayofTheWeek === "Saturday") {
    deliveryDate = today.add(
      deliveryDays + 2,
      'days'
    );
  } else if (deliveryDayofTheWeek === "Sunday") {
    deliveryDate = today.add(
      deliveryDays + 1,
      'days'
    );
  }

  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );
  return dateString
}

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}