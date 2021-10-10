import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { userOrdersHandler } from "../../../utils/ordersServices";
import PageWrapper from "../../PageWrapper";

const UserProfilePage = () => {
  const [orders, setOrders] = useState([]);
  const context = useContext(AuthContext);
  useEffect(() => {
    userOrdersHandler(context.user._id).then((res) => {
      setOrders(res);
    });
  }, []);

  return (
    <PageWrapper>
      <div className="row">
      <div className="card">
          <h3>User Info</h3>
          <ul>
                      <li> Name: {context.user.name}</li>
                      <li> Email: {context.user.email} </li>
                
                    </ul>
        </div>
        <div className="card">
          <h3>Orders: </h3>
          {orders?.map((o) => {
            return (
              <div
                className="mt-5"
                style={{ borderBottom: "2px solid var(--color-blue-default)" }}
              >
                <h4 className="mb-5">
                  <span className="bg-primary">Order ID: {o?._id}</span>
                </h4>

                <ul className="list-group mb-2">
                  <li className="list-group-item">Ordered by: {o?.name}</li>

                  <li className="list-group-item">
                    Delivery address: {o?.address}
                  </li>
                </ul>
                <p className="mt-4 mb-4 font-italic">
                  Total products in the order: {o?.items?.length}
                </p>

                {o?.items?.map((i) => (
                  <div className="mb-4" key={i._id}>
                    Items:
                    <ul>
                      <li> {i._id}</li>
                      <li> {i.price}</li>
                      <li> {i.name}</li>
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      
      </div>
    </PageWrapper>
  );
};
export default UserProfilePage;
