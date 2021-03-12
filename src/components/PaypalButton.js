import React, { useRef, useEffect } from 'react';

const PaypalButton = () => {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons(
        {
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'checkout',
          },
        },
        {
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: 'CAPTURE',
              purchase_units: [
                {
                  description: 'USB Cable',
                  amount: {
                    currency_code: 'USD',
                    value: 5.0,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(data);
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        }
      )
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default PaypalButton;
