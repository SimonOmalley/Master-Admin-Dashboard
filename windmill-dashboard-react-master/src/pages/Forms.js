import React from 'react'

import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'

import { MailIcon } from '../icons'

function Forms() {
  return (
    <>
      <PageTitle>Upload Data</PageTitle>      
      <SectionTitle>Upload Barcode Data to BarcodeItemTable</SectionTitle>

      <form action="uploadBarcode.php" method="post">
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Barcode Number</span>
          <Input className="mt-1" name="barcodeNumberBarcodeItemTable" placeholder="Enter Barcode Here" />
        </Label>

        <Label className="mt-4">
          <span>WasteName</span>
          <Input className="mt-1" name="wasteNameBarcodeItemTable" placeholder="Enter Waste Name Here" />
        </Label>

        <Label className="mt-4">
         <div> <span>Waste Type</span>
        
         <div> <select className="mt-4 px-10 py-3 font-medium text-center leading-5 border " name="wasteTypeBarcodeItemTable" >
            <option value="volvo">Recycling</option>
            <option value="saab">Green Waste</option>
            <option value="opel">Waste</option>
        </select> </div> </div>
        </Label>

        <Label className="mt-4">
     
        <button className="relative text-sm px-5  font-medium leading-5 text-white text-bold transition-colors duration-150 bg-green-600 border border-transparent  active:bg-purple-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
            Submit </button>
            
            </Label>
            


      

          

      </div>
      </form>

      <SectionTitle>Upload Item data into SearchingTable</SectionTitle>

      <form action="uploadSearching.php" method="post">

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Search Name</span>
          <Input className="mt-1" name="searchNameSearchingTable"  placeholder="Enter Item Name Here" />
  
        </Label>

        <Label className="mt-4">
         <div> <span>Waste Type</span>
        
         <div> <select className="mt-4 px-10 py-3 font-medium leading-5 border text-center " name="wasteTypeSearchingTable" >
            <option value="volvo">Recycling</option>
            <option value="saab">Green Waste</option>
            <option value="opel">Waste</option>
        </select> </div> </div>
        </Label>


        <Label className="mt-4">
     
        <button className="relative text-sm px-5  font-medium leading-5 text-white text-bold transition-colors duration-150 bg-green-600 border border-transparent  active:bg-purple-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
            Submit </button>
            
            </Label>

       
        

      </div>
      </form>

      <SectionTitle>Upload Educational data into Educational Content Table</SectionTitle>

      <form action="uploadEducationalData.php" method="post">

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>Content</span>


          <textarea className="mt-4 py-5 px-3 border" id="text" name="contetnEducationalContentTable"  placeholder="Enter Educational Content Here" rows="2" cols="170"></textarea>
 
  
        </Label>


        <Label className="mt-4">
     
        <button className="relative text-sm px-5  font-medium leading-5 text-white text-bold transition-colors duration-150 bg-green-600 border border-transparent  active:bg-purple-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
            Submit </button>
            
            </Label>

      </div>
      </form>

      

      
    </>
  )
}

export default Forms
