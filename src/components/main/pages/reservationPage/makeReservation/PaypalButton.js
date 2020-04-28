import React, { useState, useRef, useEffect } from 'react';

export default function Product({ product: {description, price}, onSuccess }) {
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: description,
                amount: {
                  currency_code: 'USD',
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          console.log(order)
          onSuccess()
        },
        onError: err => {
          console.error(err)
        },
      })
      .render(paypalRef.current);
  }, [description, price]);

  return (
    <div>
      <div ref={paypalRef} />
    </div>
  );
}