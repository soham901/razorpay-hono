import type { FC } from "hono/jsx";
import type { Item } from "../data";

const Navbar: FC = (props) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Razorpay Integration
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/purchase">
                Purchase
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Layout: FC = (props) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Razorpay Integration</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
      </head>
      <body data-bs-theme="dark">
        <Navbar />
        {props.children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        />
      </body>
    </html>
  );
};

export const Top: FC<{ items: Item[] }> = (props: { items: Item[] }) => {
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
