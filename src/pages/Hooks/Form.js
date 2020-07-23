import React, { useState, useEffect } from "react";

export default function Form() {
    const [values, setValues] = useState({
      name: "",
      email: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
    })

//   const [form, setForm] = useState({
//     values: {
//       name: "",
//       email: "",
//     },
//     erros: {
//       name: "",
//       email: "",
//     },
//   });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setErrors({
        ...errors,
        [name]: value ? "" : "error",
    })
  }

  useEffect(() => {
    console.log("values", values);
  }, [values]);

  return (
    <div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
        />
      </div>
      {
          errors.name ? 
          <div className="alert alert-danger">
              <span>Name ko đc để trống</span>
          </div> : null
      }
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
        />
      </div>
      {
          errors.email ? 
          <div className="alert alert-danger">
              <span>Email ko đc để trống</span>
          </div> : null
      }
    </div>
  );
}
