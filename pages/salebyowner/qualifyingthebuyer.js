import React, { useState } from 'react';
import MainHeader from '../../components/MainHeader';

export default function QualifyingBuyer(){
  const [formData, setFormData] = useState({
    buyerName: '',
    presentingAgent: '',
    dateRegistered: '',
    salesPrice: '',
    escalation: '',
    offerAfterEscalation: '',
    contingencies: '',
    saleOfPresentHome: '',
    homeInspection: '',
    radonTest: '',
    leadTest: '',
    financing: '',
    other: '',
    appraisal: '',
    terms: '',
    earnestMoney: '',
    downPayment: '',
    loanAmount: '',
    loanType: '',
    settlementDate: '',
    expenses: '',
    credits: '',
    warranty: '',
    closingCosts: '',
    notes: '',
    estimatedSellerNet: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Form Data:', formData);
  };

  return (
    <>
    <MainHeader page={""}></MainHeader>
    <div className="my-5 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-header">
        Listing Form
      </div>
    <div className="w-full  flex flex-col items-center justify-center">
   
    <div className="w-full">
    <form onSubmit={handleSubmit} >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col mx-12'>
      <label className='font-header text-2xl'>Buyer Name:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="text" name="buyerName" value={formData.buyerName} onChange={handleChange} />

      <label>Presenting Agent:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="text" name="presentingAgent" value={formData.presentingAgent} onChange={handleChange} />

      <label>Date Registered:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="date" name="dateRegistered" value={formData.dateRegistered} onChange={handleChange} />

      <label>Sales Price:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="number" name="salesPrice" value={formData.salesPrice} onChange={handleChange} />

      <label>Escalation:</label>
      <textarea  className="py-3 border-2 border-gray-900 px-3 rounded-lg"  name="escalation" value={formData.escalation} onChange={handleChange} />

      <label>Offer after Escalation:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="number" name="offerAfterEscalation" value={formData.offerAfterEscalation} onChange={handleChange} />
</div>
<div className='flex flex-col mx-12'>
      <label className='font-header text-2xl'>Contingencies:</label>
      <textarea  className="py-3 border-2 border-gray-900 px-3 rounded-lg"  name="contingencies" value={formData.contingencies} onChange={handleChange} />
<div className='flex gap-6 items-center'>
      <label>Sale of Present Home:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="checkbox" name="saleOfPresentHome" value={formData.saleOfPresentHome} onChange={handleChange} />
      </div>
<div className='flex gap-6 items-center'>

      <label>Home Inspection:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="checkbox" name="homeInspection" value={formData.homeInspection} onChange={handleChange} />
</div>
<div className='flex gap-6 items-center'>

      <label>Radon Test:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="checkbox" name="radonTest" value={formData.radonTest} onChange={handleChange} />
</div>
<div className='flex gap-6 items-center'>

      <label>Lead Test:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="checkbox" name="leadTest" value={formData.leadTest} onChange={handleChange} />
</div>
      <label>Financing:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="text" name="financing" value={formData.financing} onChange={handleChange} />

      <label>Other:</label>
      <textarea  className="py-3 border-2 border-gray-900 px-3 rounded-lg"  name="other" value={formData.other} onChange={handleChange} />

      <label>Appraisal:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="text" name="appraisal" value={formData.appraisal} onChange={handleChange} />
      </div>
      <div className='flex flex-col mx-12'>
      <label className='font-header text-2xl'>Terms:</label>
      <textarea  className="py-3 border-2 border-gray-900 px-3 rounded-lg"  name="terms" value={formData.terms} onChange={handleChange} />

      <label>Earnest Money:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="number" name="earnestMoney" value={formData.earnestMoney} onChange={handleChange} />

      <label>Down Payment:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="number" name="downPayment" value={formData.downPayment} onChange={handleChange} />

      <label>Loan Amount:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="number" name="loanAmount" value={formData.loanAmount} onChange={handleChange} />

      <label>Loan Type:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="text" name="loanType" value={formData.loanType} onChange={handleChange} />

      <label>Settlement Date:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" type="date" name="settlementDate" value={formData.settlementDate} onChange={handleChange} />
      </div>
<div className='flex flex-col mx-12'>
      <label className='font-header text-2xl'>Expenses:</label>
      <textarea  className="py-3 border-2 border-gray-900 px-3 rounded-lg"  name="expenses" value={formData.expenses} onChange={handleChange} />

      <label>Credits:</label>
      <textarea  className="py-3 border-2 border-gray-900 px-3 rounded-lg"  name="credits" value={formData.credits} onChange={handleChange} />

      <label>Warranty:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg"  type="text" name="warranty" value={formData.warranty} onChange={handleChange} />

      <label>Closing costs:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg"  type="number" name="closingCosts" value={formData.closingCosts} onChange={handleChange} />

      <label>Other:</label>
      <textarea  className="py-3 border-2 border-gray-900 px-3 rounded-lg"  name="other" value={formData.other} onChange={handleChange} />
      <label>Notes:</label>
      <textarea  className="py-3 border-2 border-gray-900 px-3 rounded-lg"  name="notes" value={formData.notes} onChange={handleChange} />

      <label>Estimated Seller Net:</label>
      <input className="py-3 border-2 border-gray-900 px-3 rounded-lg" 
        type="number"
        name="estimatedSellerNet"
        value={formData.estimatedSellerNet}
        onChange={handleChange}
      />
</div>
</div>
      <button type="submit"
            className="flex justify-center w-full text-2xl my-8 mx-auto max-w-max px-12 text-white bg-custom-yellow hover:bg-custom-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      
      >Submit</button>
      </form>
      </div>
      </div>
      </>
)}