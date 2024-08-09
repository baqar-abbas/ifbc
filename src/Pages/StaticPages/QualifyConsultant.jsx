import React from 'react'

const QualifyConsultant = () => {
  return (
    <div>
              <div className="mt-6 flex flex-row md:space-x-2 max-md:flex-col max-md:gap-5 gap-4">
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="firstname">
              First Name
            </label>
            <input
            //   onChange={handleInputChange}
              name="firstname"
              placeholder="First Name"
              className="candidate-select w-full"
            //   style={{ borderColor: formErrors.firstname ? "red" : undefined }}
              type="text"
            />{" "}
            {/* {formErrors.firstname && formErrors.firstname === "invalid" && (
              <p className=" text-red text-xs py-2 flex justify-between">
                Invalid username. It should be 3-16 characters long and can
                include letters, numbers, underscores, and spaces.
              </p>
            )} */}
          </div>

          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="lastname">
              Last Name
            </label>
            <input
            //   onChange={handleInputChange}
              name="lastname"
              placeholder="Last Name"
              className="candidate-select w-full"
            //   style={{ borderColor: formErrors.lastname ? "red" : undefined }}
              type="text"
            />{" "}
            {/* {formErrors.lastname && formErrors.lastname === "invalid" && (
              <p className=" text-red text-xs py-2 flex justify-between">
                Invalid username. It should be 3-16 characters long and can
                include letters, numbers, underscores, and spaces.
              </p>
            )} */}
          </div>
        </div>

        <div className="mt-6 flex flex-row md:space-x-2 max-md:flex-col max-md:gap-5 gap-4">
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="email">
              Email
            </label>
            <input
            //   onChange={handleInputChange}
              name="email"
              placeholder="Email"
              className="candidate-input w-full"
            //   style={{ borderColor: formErrors.email ? "red" : undefined }}
              id="email"
              type="email"
            />
            {/* {formErrors.email && formErrors.email === "invalid" && (
              <p className=" text-red text-xs py-2 flex justify-between">
                Invalid Email (john@example.com)
              </p>
            )} */}
          </div>

          <div className="flex-1">
            <label className="text-custom-heading-color">Phone</label>
            <input
            //   onChange={handleInputChange}
              name="phone"
              placeholder="Phone Number"
              className="candidate-input w-full"
            //   style={{ borderColor: formErrors.phone ? "red" : undefined }}
              id="phone"
              type="tel"
              defaultValue={""}
            />{" "}
            {/* {formErrors.phone && formErrors.phone === "invalid" && (
              <p className=" text-red text-xs py-2 flex justify-between">
                Invalid Phone Number (Please use numbers only)
              </p>
            )} */}
          </div>
        </div>

        <div className="mt-6 flex flex-row md:space-x-2 max-md:flex-col max-md:gap-5 gap-4">
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="street">
            Street Address
            </label>
            <input
            //   onChange={handleInputChange}
              name="street"
              placeholder="Street Address"
              className="candidate-select w-full"
            //   style={{ borderColor: formErrors.firstname ? "red" : undefined }}
              type="text"
            />{" "}
            {/* {formErrors.firstname && formErrors.firstname === "invalid" && (
              <p className=" text-red text-xs py-2 flex justify-between">
                Invalid username. It should be 3-16 characters long and can
                include letters, numbers, underscores, and spaces.
              </p>
            )} */}
          </div>

          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="city">
            City
            </label>
            <input
            //   onChange={handleInputChange}
              name="city"
              placeholder="City"
              className="candidate-select w-full"
            //   style={{ borderColor: formErrors.lastname ? "red" : undefined }}
              type="text"
            />{" "}
            {/* {formErrors.lastname && formErrors.lastname === "invalid" && (
              <p className=" text-red text-xs py-2 flex justify-between">
                Invalid username. It should be 3-16 characters long and can
                include letters, numbers, underscores, and spaces.
              </p>
            )} */}
          </div>
        </div>

        <div className="mt-6 flex flex-row md:space-x-2 max-md:flex-col max-md:gap-5 gap-4">
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="state">
            
            State/Region
            </label>
            <input
            //   onChange={handleInputChange}
              name="state"
              placeholder="State/Region"
              className="candidate-select w-full"
            //   style={{ borderColor: formErrors.firstname ? "red" : undefined }}
              type="text"
            />{" "}
            {/* {formErrors.firstname && formErrors.firstname === "invalid" && (
              <p className=" text-red text-xs py-2 flex justify-between">
                Invalid username. It should be 3-16 characters long and can
                include letters, numbers, underscores, and spaces.
              </p>
            )} */}
          </div>

          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="postal">
            Postal Code
            </label>
            <input
            //   onChange={handleInputChange}
              name="postal"
              placeholder="Postal Code"
              className="candidate-select w-full"
            //   style={{ borderColor: formErrors.lastname ? "red" : undefined }}
              type="text"
            />{" "}
            {/* {formErrors.lastname && formErrors.lastname === "invalid" && (
              <p className=" text-red text-xs py-2 flex justify-between">
                Invalid username. It should be 3-16 characters long and can
                include letters, numbers, underscores, and spaces.
              </p>
            )} */}
          </div>
        </div>

        <div className="mt-6 flex flex-row md:space-x-2 max-md:flex-col max-md:gap-5 gap-4">
          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="geographical">
            What geographical area are you interested in?
            </label>
            <input
            //   onChange={handleInputChange}
              name="geographical"
              placeholder="Enter Geographical area you are interested in?"
              className="candidate-input w-full"
            //   style={{ borderColor: formErrors.zipcode ? "red" : undefined }}
              id="geographical"
              type="text"
            />
          </div>

          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="employed">
            Are you currently employed?
            </label>
            <select
              name="employed"
              className='candidate-select w-full'
            //   className={`candidate-select w-full ${
            //     formErrors.desiredLoc ? "bg-red-300" : ""
            //   }`}
              id="employed"
            //   onChange={handleInputChange}
            >
              {/* {states.map((state, index) => (
                <option key={index} value={state.value}>
                  {state.text}
                </option>
              ))} */}
              <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-row md:space-x-2 max-md:flex-col max-md:gap-5 gap-4">
          <div className="flex-1">
            <label className="text-custom-heading-color">
            Comfortable Giving Presentations?
            </label>
            <select
              name="presentations"
              className='candidate-select w-full'
            //   className={`candidate-select w-full ${
            //     formErrors.availCapital ? "bg-red-300" : ""
            //   }`}
              id="presentations"
            //   onChange={handleInputChange}
            >
              {/* {capitalOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))} */}
                <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="text-custom-heading-color" htmlFor="networking">
            Comfortable networking?
            </label>
            <select
              name="networking"
              className="candidate-select w-full "
              id="networking"
            //   onChange={handleInputChange}
            >
              <option value="">Select one</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-row md:space-x-2 max-md:flex-col max-md:gap-5 gap-4">
          <div className="flex-1">
            <label className="text-custom-heading-color">
            How did you hear about us?
            </label>
            <select
              name="hearAbout"
              className='candidate-select w-full'
            //   className={`candidate-select w-full ${
            //     formErrors.availCapital ? "bg-red-300" : ""
            //   }`}
              id="hearAbout"
            //   onChange={handleInputChange}
            >
              {/* {capitalOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))} */}
                <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
          </div>
        </div>

    </div>
  )
}

export default QualifyConsultant;
