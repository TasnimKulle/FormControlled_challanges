import React, { useState } from "react";

export const FormControlled = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    checked: false,
    selectOption: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Registar Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="UserName"
            className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="phone"
            placeholder="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-xl 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="checked"
              checked={formData.checked}
              onChange={handleChange}
              className="h-4 w-4 "
            />
            <span className="text-sm">Accept Terms & conditions </span>
          </div>
          <select
            name="selectOptions"
            value={formData.selectOption}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Skills</option>
            <option value="react">React</option>
            <option value="node">Node</option>
          </select>
          <button
            type="submit"
            className="w-full p-3 bg-blue-100 font-semibold border border-gray-200 text-blue-900 rounded-xl hover:text-white hover:bg-blue-950 transition duration-300"
          >
            Submit
          </button>
        </form>
        <div className="mt-6 bg-gray-50 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">Live Preview</h3>
          <p>
            <strong>Username:</strong> {formData.username}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Password:</strong> {formData.password}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Terms:</strong>{" "}
            {formData.checked ? "Accepted" : "Not Accepted"}
          </p>
          <p>
            <strong>Skill:</strong> {formData.selectOption}
          </p>
        </div>
      </div>
    </div>
  );
};
