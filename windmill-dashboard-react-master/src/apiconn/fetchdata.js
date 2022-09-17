import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from '@windmill/react-ui'

const apiUrl = "https://api.smartwaste.app/Debugging/sampleread.json";

function App() {  

  const [PhotoPage, setPage] = useState(1)

  const [Photo, setUserData] = useState([]);  
  const [dataTable1, setDataTable1] = useState([]) 

  const resultsPerPage = 2
  const totalResults = Photo.length
  
  function onPageChangeTable(p) {
    setPage(p) 
  }   

  useEffect(() => {
    getApiWithAxios();  
  }, []);

  const getApiWithAxios = async () => {
    const response = await axios.get(apiUrl);
    setUserData(response.data);             
  };
  
  useEffect(() => {
    setDataTable1(Photo.slice((PhotoPage - 1) * resultsPerPage, PhotoPage * resultsPerPage))    
  }, [PhotoPage])
  
  return (
    <Table>
             <TableHeader>
               <tr>
                 <TableCell>ID</TableCell>
                 <TableCell>Unidentified Photo</TableCell>
                 <TableCell>User's Description</TableCell>
                 <TableCell>Device ID</TableCell>
                 <TableCell>Time Recorded</TableCell>
                 <TableCell>Approve/Deny</TableCell>
               </tr>
             </TableHeader>
             <TableBody> 
              {dataTable1.map((photo, i) => (           
                 <TableRow key = {i}>
                   <TableCell>                  
                       <div>
                         <p className="font-semibold">{photo.id}</p>                      
                       </div>                  
                   </TableCell>
                   <TableCell>
                     <span className="text-sm">{photo.photoUnidentified}</span>
                   </TableCell>
                   <TableCell>
                     <span className="text-sm">{photo.userIdentification}</span>
                   </TableCell>
                   <TableCell>
                     <span className="text-sm">{photo.device}</span>
                   </TableCell>
                   <TableCell>
                     <span className="text-sm">{photo.timeTaken}</span>
                   </TableCell>
                   <TableCell>
                     
                   </TableCell>
                 </TableRow>  
                 ))}          
             </TableBody>
             <TableFooter>  
             <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable}
            label="Table navigation"
          />          
        </TableFooter>
           </Table>
              
  );
}

export default App;