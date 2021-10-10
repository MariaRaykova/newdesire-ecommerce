import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import { ordersHandler } from "../../../utils/ordersServices";
import PageWrapper from "../../PageWrapper";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    ordersHandler().then((res) => {
      setOrders(res);
    });
  }, [orders?.items?.lenght]);
 
  // [
  //   {
  //     "product":
  //     {
  //       "images": ["https://res.cloudinary.com/dszjcx6ai/image/upload/v1631294714/xp1vk0ksteojboh29x4z.jpg",
  //         "https://res.cloudinary.com/dszjcx6ai/image/upload/v1631294757/jgzvxhtmxoxlbtbuk2ax.jpg",
  //         "https://res.cloudinary.com/dszjcx6ai/image/upload/v1631294778/evrnlgseuel7hxx9kzcc.jpg"],
  //       "category": [{ "products": [], "_id": "61290df26941042c8c572be4", "name": "Headbands", "created_at": "2021-08-27T16:08:18.169Z", "updatedAt": "2021-08-27T16:08:18.169Z", "__v": 0 }],
  //       "_id": "613b951c777fd03120463db1",
  //       "name": "Bee Hairband",
  //       "description": "Retro Velvet Bee Hairband Headband for Women",
  //       "price": 45,
  //       "quantity": 5,
  //       "created_at": "2021-09-10T17:25:48.014Z",
  //       "updatedAt": "2021-09-10T17:26:23.323Z", "__v": 0
  //     },
  //     "count": 2
  //   },
  //   {
  //     "product":
  //     {
  //       "images": ["https://res.cloudinary.com/dszjcx6ai/image/upload/v1631294570/s6p7e6ils9lmvq2uskmh.jpg",
  //         "https://res.cloudinary.com/dszjcx6ai/image/upload/v1631294602/feido0yk6yabvboqzfg9.jpg", "https://res.cloudinary.com/dszjcx6ai/image/upload/v1631294622/ik8nmqkltcjtfqiv4s0f.jpg", "https://res.cloudinary.com/dszjcx6ai/image/upload/v1631294630/yljxa9lvt9ba0ubp6j1o.jpg"],
  //       "category": [{ "products": [], "_id": "61290df26941042c8c572be4", "name": "Headbands", "created_at": "2021-08-27T16:08:18.169Z", "updatedAt": "2021-08-27T16:08:18.169Z", "__v": 0 }],
  //       "_id": "613b9479777fd03120463da4",
  //       "name": "Vintage Bohemian Black Lace Headband",
  //       "description": "Vintage Bohemian Black Lace with Metal Beads Knot Headband  Rhinestone Knotted Bow",
  //       "price": 39,
  //       "quantity": 3,
  //       "created_at": "2021-09-10T17:23:05.753Z", "updatedAt": "2021-09-10T17:23:58.546Z", "__v": 0
  //     },
  //     "count": 1
  //   }]



  const showOrderItems = () => {
    if (orders?.items) {
      return (
        <div>
          {orders.items?.map((i => {
            <div key={i?._id}>
              <img className="img-responsive" src={i?.product._id} style={{ height: '8%', width: '8%' }} alt={i?.product.name} />
              <h4 className="product-name"><strong>{i?.product.name}</strong></h4>
              <div className="product-quantity-container">
                <div style={{ paddingTop: '5px' }}>
                  <h6><strong>{i?.product.price}€<span className="text-muted">x</span>{i?.count}</strong></h6>
                </div>
              </div>
            </div>
          }))}
        </div>
      )
    }
  }
  [
    {
      "_id": "61470f15fec43800bcaa1e02",
      "email": "mimi@mimi.bg",
      "name": "mimi@mimi.bg",
      "phone": 359888888888,
      "city": "Ruse",
      "address": "Ruse",
      "userId": "61080877513a052eb444b855",
      "items":
        [
          {
            "_id": "61470f15fec43800bcaa1e03",
            "product": "613b9ab2777fd03120463dc9",
            "count": 2
          },
          {
            "_id": "61470f15fec43800bcaa1e04",
            "product": "613b951c777fd03120463db1",
            "count": 1
          }
        ],
      "totalAmount": 157,
      "created_at": "2021-09-19T10:21:09.613Z", "updatedAt": "2021-09-19T10:21:09.613Z", "__v": 0
    }
  ]

  return (
    <div >
        <h3>List of All Orders:</h3>
      {orders?.map((o) => {
        return (
          <div className="table-row" key={o._id}>
            <div className="table-row">Order ID: {o?._id}</div>
              <span className="list-group-item">Ordered by: {o?.name}</span>
              <span className="list-group-item"> Delivery address: {o?.address}</span>
            <div className="table-row">Total amount: {o?.totalAmount} $</div>
            {showOrderItems()}
          </div>
        )
      }
      )}
    </div>
  )
}

export default Orders;
