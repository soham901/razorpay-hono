import type { FC } from "hono/jsx";
import { Layout } from "./Layout";
import type { Item } from "../data";

type Props = {
  item: Item;
  id: string;
};

export const PurchasePage: FC<Props> = ({ item, id }) => (
  <Layout>
    <div className="container mt-5">
      <h1>Purchase {item.title}</h1>
      <p className="lead">
        Price: {item.amount} {item.currency}
      </p>
      <button id="payButton" className="btn btn-primary mt-3" type="button">
        Pay with Razorpay
      </button>

      <script src="https://checkout.razorpay.com/v1/checkout.js" />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: `
            document.getElementById("payButton").onclick = async function() {
              const response = await fetch("/purchase/${id}", { method: "POST" });
              const order = await response.json();
    
              if (order.id) {
                const options = {
                  key: "${process.env.RAZORPAY_KEY_ID}",
                  amount: order.amount,
                  currency: order.currency,
                  name: "${item.title}",
                  description: "Test Transaction",
                  order_id: order.id,
                  handler: async function (response) {
                    const verifyResponse = await fetch("/verify", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(response),
                    });
    
                    const verifyResult = await verifyResponse.json();
                    alert(verifyResult.message);
                  },
                  prefill: {
                    email: "customer@example.com",
                    contact: "9999999999",
                  },
                  theme: { color: "#3399cc" },
                };
    
                const rzp = new Razorpay(options);
                rzp.open();
              } else {
                alert("Failed to create order.");
              }
            };
          `,
        }}
      />
    </div>
  </Layout>
);
