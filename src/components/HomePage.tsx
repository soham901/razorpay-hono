import type { FC } from "hono/jsx";
import type { Item } from "../data";
import { Layout } from "./Layout";

export const HomePage: FC<{ items: Item[] }> = (props: { items: Item[] }) => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>Purchase Something</h1>
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {props.items.map((item) => (
              <div className="col" key={item.id}>
                <div className="card">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt="..."
                    loading="eager"
                    height={200}
                    width={400}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <a
                        href={`/purchase/${item.id}`}
                        className="btn btn-primary"
                      >
                        Purchase
                      </a>
                      <p className="card-text">
                        <small className="text-muted">
                          {item.amount} {item.currency}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
