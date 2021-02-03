import { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

import NavBar from '../components/NavBar';
import Warning from '../components/Warning';
import Success from '../components/Success';
import Spinner from '../components/Spinner';

const Subscriptions = () => {
  const [cancelled, setCancelled] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(null);

  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID
    });
  };

  const onApprove = (data, actions) => {
    // Capture the funds from the transaction
    return actions.subscription.get().then(function (details) {
      setOrderDetails({ data });
      setLoading(null);
    });
  };

  const onCancel = () => {
    setCancelled(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <NavBar />
      <div className="w-1/4">
        <h1 className="mb-16 text-3xl font-semibold text-center text-gray-800">
          PayPal + Subscriptions
        </h1>

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
            'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            vault: true
          }}>
          <PayPalButtons
            fundingSource={FUNDING.PAYPAL}
            createSubscription={createSubscription}
            onApprove={onApprove}
            onCancel={onCancel}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default Subscriptions;
