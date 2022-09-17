import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  TableBody,  
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Pagination,
  TableFooter,
} from '@windmill/react-ui'

const apiUrl = "https://api.smartwaste.app/Controller/API/UnidentifiedPhotosAPI/read.php";

function App() {  

  //const [PhotoPage, setPage] = useState(1)

  const [Photo, setUserData] = useState({});

  const [PhotoArray, setUserData2] = useState({});  

  const resultsPerPage = 4
  //const totalResults = Photo.length

  /*function onPageChangeTable1(p) {
    setPage(p)
  } */ 

  useEffect(() => {
    getApiWithAxios();    
  }, []);

  const getApiWithAxios = async () => {
    const response = await axios.get(apiUrl);
    setUserData(response.data); 
    //setUserData2(response.data);      
  };

  /*useEffect(() => {    
      setPage(Photo.slice((PhotoPage - 1) * resultsPerPage, PhotoPage * resultsPerPage))
    }, [PhotoPage])*/

  
  console.log(Photo);

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
              {[Photo].map((photo, i) => (           
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
        </TableFooter>
           </Table>
              
  );
}

export default App;