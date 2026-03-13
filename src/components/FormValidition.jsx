import React, { useState } from "react";

const FormValidation = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasLowercase: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecial: false,
  });

  // Handle Change
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));


    // Password Validation
    if (name === "password") {
      setPasswordValidation({
        minLength: value.length >= 8,
        hasLowercase: /[a-z]/.test(value),
        hasUppercase: /[A-Z]/.test(value),
        hasNumber: /[0-9]/.test(value),
        hasSpecial: /[!@#$%&*]/.test(value),
      });
    }

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };


  // Submit Form
  const handleSubmit = (e) => {

    e.preventDefault();

    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must accept terms";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      alert("Form Submitted Successfully ✅");
    }
  };


  return (
    <div>
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2">
              Full Name *
            </label>

            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg pl-10"
              />

              <span className="absolute left-3 top-3.5 text-gray-500">
                👤
              </span>
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>


          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">
              Email Address *
            </label>

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg pl-10"
              />

              <span className="absolute left-3 top-3.5 text-gray-500">
                📧
              </span>
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>


          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-2">
              Phone Number *
            </label>

            <div className="relative">
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg pl-10"
              />

              <span className="absolute left-3 top-3.5 text-gray-500">
                📞
              </span>
            </div>

            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>


          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2">
              Password *
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="w-full p-3 border border-gray-300 rounded-lg pl-10"
              />

              <span className="absolute left-3 top-3.5 text-gray-500">
                🔒
              </span>

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 cursor-pointer"
              >
                👁
              </span>
            </div>

            {/* Password rules */}
            <ul className="text-sm mt-2 space-y-1">

              <li className={passwordValidation.minLength ? "text-green-600" : "text-red-600"}>
                At least 8 characters
              </li>

              <li className={passwordValidation.hasUppercase ? "text-green-600" : "text-red-600"}>
                1 uppercase letter
              </li>

              <li className={passwordValidation.hasLowercase ? "text-green-600" : "text-red-600"}>
                1 lowercase letter
              </li>

              <li className={passwordValidation.hasNumber ? "text-green-600" : "text-red-600"}>
                1 number
              </li>

              <li className={passwordValidation.hasSpecial ? "text-green-600" : "text-red-600"}>
                1 special character
              </li>

            </ul>
          </div>


          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-2">
              Confirm Password *
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Your Password"
                className="w-full p-3 border border-gray-300 rounded-lg pl-10"
              />

              <span className="absolute left-3 top-3.5 text-gray-500">
                🔒
              </span>

              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3.5 cursor-pointer"
              >
                👁
              </span>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword}
              </p>
            )}
          </div>


          {/* Terms */}
          <div className="border-t pt-6">

            <div className="flex items-start">

              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 h-5 w-5"
              />

              <label className="ml-3">
                I agree to Terms of Services and Privacy Policy
              </label>

            </div>

            {errors.agreeTerms && (
              <p className="text-red-500 text-sm">
                {errors.agreeTerms}
              </p>
            )}

          </div>


          {/* Buttons */}
          <div className="flex space-x-4 pt-6 border-t">

            <button
              type="reset"
              className="flex-1 py-3 border border-gray-300 rounded-lg"
            >
              Reset
            </button>

            <button
              type="submit"
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg"
            >
              Submit
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default FormValidation;