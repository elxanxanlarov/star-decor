import { useState } from "react";
import orderImg1 from "../../src/assets/image/order-img1.png"
import orderImg2 from "../../src/assets/image/order-img2.png"
const Order = () => {
  const [nextOrder, setNextOrder] = useState(false);
  return (
    <div className="order-page">
      <div className="order-head">
        <h2>Sifariş</h2>
      </div>
      <div className="order-body">
        <img className="img-1" src={orderImg1} alt="" />
        <img className="img-2" src={orderImg2} alt="" />
        <div>
          {!nextOrder ? (
            <div className="message-side">
              <h3>İndi sifariş edin!</h3>
              <div className="inputs-con">
                <div>
                  <p>Ölçü</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Brend</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Rəng</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Kənar Band (RVC)</p>
                  <input type="text" />
                </div>
                <button onClick={()=>{setNextOrder(true)}} className="btn btn-dark ">Növbəti</button>
              </div>
            </div>
          ) : (
            <div className="message-side">
              <h3>İndi sifariş edin!</h3>
              <div className="inputs-con">
                <div>
                  <p>Ad</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Soyad</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Telefon Nömrəsi</p>
                  <input type="text" />
                </div>
                <button className="btn btn-dark ">{nextOrder?"Sifarişi tamamla":"Növbəti"}</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
