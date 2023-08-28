import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 


const DataInput = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(startDate);
  };

  return (
      
    <form id="Upload" className="flex-col input_center">
      
        <label htmlFor="patient_Id-input" className="block mb-2 text-lg font-medium text-black">
          Patient Id
        </label>
        <input
          required
          type="text"
          id="patient_Id-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
        />
        <label htmlFor="date-input" className="block mb-2 text-lg font-medium text-black">
          Date
        </label>
        <div onSubmit={onFormSubmit}>
          <div className="form-group bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              name="startDate"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
      
    </form>
  );
};

export default DataInput;
