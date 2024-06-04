"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "../_providers/StoreProvider";
import GlobalApi from "../api/GlobalApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
const Checkout = () => {
  const { cart } = useStore();

  // Calculate subtotal and total
  const subtotal = cart.reduce(
    (acc, item) => acc + item.attributes.Price * item.quantity,
    0
  );
  const total = subtotal; // Modify this if there are other charges or discounts
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    subCity: "",
    address: "",
    apartment: "",
    bankYouPaid: "",
    paymentReference: "",
    emailAddress: "",
    phone: "",
    orderNotes: "",
    total: total,
  });
  const bankData = async () => {
    try {
      await GlobalApi.getBanks().then((res) => {
        setBanks(res?.data?.data);
      });
    } catch (error) {
      console.error("Error fetching bank data:", error);
    }
  };

  const [bank, setBanks] = useState(null);
  const [isSubmitted, setSubmitted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (cart?.length === 0) {
      router.push("/furniture/shop");
    }
  }, []);
  useEffect(() => {
    bankData();
  }, []);

  // Event handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    setSubmitted(true);
    if (
      !formData.country ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.subCity ||
      !formData.address ||
      !formData.bankYouPaid ||
      !formData.paymentReference ||
      !formData.emailAddress ||
      !formData.phone
    ) {
      toast.error("Please fill in all required fields", {
        position: "bottom-right",
        className: "foo-bar",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      toast.error("Invalid email address", {
        position: "bottom-right",
        className: "foo-bar",
      });
      return;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Invalid phone number formate", {
        position: "bottom-right",
        className: "foo-bar",
      });
      return;
    }

    let OrderItemList = cart.map((item) => ({
      product: item.id,
      quantity: item.quantity,
      price: item.attributes.Price * item.quantity,
    }));

    let payload = {
      data: {
        ...formData,
        OrderItemList,
      },
    };
    try {
      await GlobalApi.postOrder(payload).then((res) => {
        if (res?.status === 200) {
          toast.success("Order Successfully Submitted", {
            position: "bottom-right",
            className: "foo-bar",
          });
          router.push("/furniture/thankyou");
        } else {
          toast.error("Unable to create order", {
            position: "bottom-right",
            className: "foo-bar",
          });
        }
      });
    } catch (error) {
      console.error("Error fetching bank data:", error);
    }
    // console.log(payload);
  };
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="border p-4 rounded" role="alert">
              Returning customer? <a href="#">Click here</a> to login
            </div>
          </div>
        </div>
        <ToastContainer />
        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              {/* <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <label htmlFor="c_code" className="text-black mb-3">
                    Enter your coupon code if you have one
                  </label>
                  <div className="input-group w-75 couponcode-wrap">
                    <input
                      type="text"
                      className="form-control me-2"
                      id="c_code"
                      placeholder="Coupon Code"
                      aria-label="Coupon Code"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-black btn-sm"
                        type="button"
                        id="button-addon2"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="row mb-5">
              <div className="col-md-12">
                <h2 className="h3 mb-3 text-black">Your Order</h2>
                <div className="p-3 p-lg-5 border bg-white">
                  <table className="table site-block-order-table mb-5">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart?.map((item, index) => (
                        <tr key={index}>
                          <td>
                            {item?.attributes?.ProductName}
                            <strong className="mx-2">x</strong> {item?.quantity}
                          </td>
                          <td>
                            ETB{" "}
                            {(item?.attributes?.Price * item?.quantity).toFixed(
                              2
                            )}
                          </td>
                        </tr>
                      ))}

                      <tr>
                        <td className="text-black font-weight-bold">
                          <strong>Cart Subtotal</strong>
                        </td>
                        <td className="text-black">
                          ETB {subtotal.toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-black font-weight-bold">
                          <strong>Order Total</strong>
                        </td>
                        <td className="text-black font-weight-bold">
                          <strong>ETB {total.toFixed(2)}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>Pay with</h3>
                  {bank?.map((item, index) => (
                    <div className="border p-3 mb-3" key={index}>
                      <h3 className="h6 mb-0">
                        <a
                          className="d-block"
                          data-bs-toggle="collapse"
                          href={`#collapsebank${index}`}
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapsebank"
                        >
                          {item?.attributes?.BankName}
                        </a>
                      </h3>
                      <div className="collapse" id={`collapsebank${index}`}>
                        <div className="py-2">
                          <p className="mb-0">
                            {item?.attributes?.Description}
                          </p>
                          <p>
                            Beneficiary.
                            <b>{item?.attributes?.BeneficiaryName}</b>
                          </p>
                          <p>
                            Acc. <b>{item?.attributes?.BankAccount}</b>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 className="h3 mb-3 text-black">Billing Details</h2>
            <div className="p-3 p-lg-5 border bg-white">
              <div className="form-group">
                <label htmlFor="c_country" className="text-black">
                  Country <span className="text-danger">*</span>
                </label>
                <select
                  id="c_country"
                  className="form-control"
                  name="country"
                  onChange={handleInputChange}
                >
                  <option value="">Select a country</option>
                  <option value="ET">Ethiopia</option>
                </select>
                {isSubmitted && !formData.country && (
                  <span className="text-danger">Country is required</span>
                )}
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_fname" className="text-black">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_fname"
                    name="firstName"
                    onChange={handleInputChange}
                  />
                  {isSubmitted && !formData.firstName && (
                    <span className="text-danger">First name is required</span>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_lname" className="text-black">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_lname"
                    name="lastName"
                    onChange={handleInputChange}
                  />
                  {isSubmitted && !formData.lastName && (
                    <span className="text-danger">Last name is required</span>
                  )}
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_sub_city" className="text-black">
                    Sub city
                  </label>

                  <select
                    id="subcity"
                    className="form-control"
                    name="subCity"
                    onChange={handleInputChange}
                  >
                    <option value="">Select a sub-city</option>
                    <option value="Arada">Arada</option>
                    <option value="Addis Ketema">Addis Ketema</option>
                    <option value="Akaky Kaliti">Akaky Kaliti</option>
                    <option value="Bole">Bole</option>
                    <option value="Gullele">Gullele</option>
                    <option value="Kirkos">Kirkos</option>
                    <option value="Kolfe Keranio">Kolfe Keranio</option>
                    <option value="Lideta">Lideta</option>
                    <option value="Nifas Silk-Lafto">Nifas Silk-Lafto</option>
                    <option value="Lemi kura">Lemi Kura</option>
                    <option value="Yeka">Yeka</option>
                  </select>
                  {isSubmitted && !formData.subCity && (
                    <span className="text-danger">Subcity is required</span>
                  )}
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <label htmlFor="c_address" className="text-black">
                    Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_address"
                    name="address"
                    placeholder="Specific address"
                    onChange={handleInputChange}
                  />
                  {isSubmitted && !formData.address && (
                    <span className="text-danger">Address is required</span>
                  )}
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apartment, suite, unit etc. (optional)"
                  name="apartment"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <label htmlFor="c_bank_paid" className="text-black">
                    Bank you paid <span className="text-danger">*</span>
                  </label>
                  <select
                    id="bank"
                    className="form-control"
                    name="bankYouPaid"
                    onChange={handleInputChange}
                  >
                    <option value=""></option>
                    {bank?.map((item, index) => (
                      <option value={item?.attributes?.BankName} key={index}>
                        {item?.attributes?.BankName}
                      </option>
                    ))}
                  </select>
                  {isSubmitted && !formData.bankYouPaid && (
                    <span className="text-danger">
                      Enter the bank you paid by
                    </span>
                  )}
                </div>
                <div className="col-md-6">
                  <label htmlFor="c_payment_reference" className="text-black">
                    Payment Reference code
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="c_payment_reference"
                    name="paymentReference"
                    onChange={handleInputChange}
                  />
                  {isSubmitted && !formData.paymentReference && (
                    <span className="text-danger">Reference is required</span>
                  )}
                </div>
              </div>
              <div className="form-group row mb-5">
                <div className="col-md-6">
                  <label htmlFor="c_email_address" className="text-black">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="c_email_address"
                    name="emailAddress"
                    onChange={handleInputChange}
                  />
                  {isSubmitted && !formData.emailAddress && (
                    <span className="text-danger">Email is required</span>
                  )}
                </div>

                <div className="col-md-6">
                  <label htmlFor="c_phone" className="text-black">
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="c_phone"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleInputChange}
                  />
                  {isSubmitted && !formData.phone && (
                    <span className="text-danger">Phone is required</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="c_order_notes" className="text-black">
                  Order Notes
                </label>
                <textarea
                  name="orderNotes"
                  id="c_order_notes"
                  cols={30}
                  rows={5}
                  className="form-control"
                  placeholder="Write your notes here..."
                  defaultValue={""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mt-4">
                <button
                  className="btn btn-black btn-lg py-3 btn-block"
                  onClick={handleSubmit}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
