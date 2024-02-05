import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceTickets from "./components/tickets/ServiceTickets";
import TicketsList from "./components/tickets/TicketsList";
import TicketDetails from "./components/tickets/TicketDetails";
import CreateTicket from "./components/tickets/CreateTicket";
import CustomerDetail from "./components/customer/CustomerDetails";
import Customers from "./components/customer/Customers";
import CustomerList from "./components/customer/CustomerList";
import CreateCustomer from "./components/customer/CreateCustomer";
import EmployeeDetails from "./components/employee/EmployeeDetails";
import Employee from "./components/Employee/Employee";
import EmployeeList from "./components/employee/employeeList";
import CreateEmployee from "./components/employee/CreateEmployee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>        
          <Route path="tickets" element={<ServiceTickets />}>
          <Route index element={<TicketsList />} />
          <Route path=":id" element={<TicketDetails />} />
          <Route path="create" element={<CreateTicket />} />
          </Route> 

      <Route path="/customer" element={<App />}>
        <Route path="customer" element={<Customers />} />
          <Route index element={<CustomerList />} />
          <Route path=":id" element={<CustomerDetail />} />
          <Route path="create" element={<CreateCustomer />} /> 
          </Route>
                

      <Route path="/employee" element={<App />}>
        <Route path="employee" element={<Employee />} />
          <Route index element={<EmployeeList />} />
          <Route path=":id" element={<EmployeeDetails />} />
          <Route path="create" element={<CreateEmployee />} />
          </Route>        
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
