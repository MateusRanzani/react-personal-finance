import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from "miragejs"
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema: any, request: any) => {
      const data = JSON.parse(request.requestBody)
      return schema.create("transaction", data)
    })
  }

}) 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

