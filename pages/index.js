import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

import Warning from '../components/Warning';
import Success from '../components/Success';
import Spinner from '../components/Spinner';

const Home = () => {
  const [cancelled, setCancelled] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(null);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        application_context: {
          shipping_preference: 'NO_SHIPPING'
        },
        purchase_units: [
          {
            amount: {
              currency: 'USD',
              value: 10
            }
          }
        ]
      })
      .then((orderID) => {
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    setLoading('Finishing transaction ...');

    actions.order.get().then((orderDetails) => {
      // ORDER IS APPROVED BUT NOT COMPLETED YET
      // console.log({ orderDetails });

      actions.order.capture().then((data) => {
        // ORDER IS COMPLETED, MONEY SENT
        setOrderDetails({ data });
        setLoading(null);
      });
    });
  };

  const onCancel = () => {
    setCancelled(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-1/4">
        {orderDetails && (
          <pre className="absolute top-0 right-0 w-1/3 h-64 text-xs bg-gray-200 border-2 border-gray-500 overflow-scroll">
            <h2 className="mb-4 font-semibold">Order Result:</h2>
            {JSON.stringify(orderDetails, null, 2)}
          </pre>
        )}

        {cancelled && <Warning message="Order cancelled!" dismiss={() => setCancelled(false)} />}
        {orderDetails && (
          <Success message="Transaction complete!" dismiss={() => setOrderDetails(null)} />
        )}

        {loading && <Spinner message={loading} />}

        <PayPalScriptProvider
          options={{
            'client-id':
              'ARZFn9joxeTaOb8GLoJPx5LmG4RbX7CyaKjFD0FVbHSc1oixI7T4Q0tzBCNHgFwf1r2PapXus51c6lQY'
          }}>
          <PayPalButtons
            fundingSource={FUNDING.PAYPAL}
            createOrder={createOrder}
            onApprove={onApprove}
            onCancel={onCancel}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Home;
