import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

const apiUrl = "https://admin.smartwaste.app/api/Controller/API/BarcodeAPI/single_read.php?id=18";

function App() {
  const [Photo, setUserData] = useState({});

  useEffect(() => {
    getApiWithAxios();
  }, []);

  const getApiWithAxios = async () => {
    const response = await axios.get(apiUrl);
    setUserData(response.data);
  };

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
                 <TableRow>
                   <TableCell>                  
                       <div>
                         <p className="font-semibold">{Photo.id}</p>                      
                       </div>                  
                   </TableCell>
                   <TableCell>
                     <span className="text-sm">{Photo.photoUnidentified}</span>
                   </TableCell>
                   <TableCell>
                     
                   </TableCell>
                   <TableCell>
                     <span className="text-sm">{Photo.userIdentified}</span>
                   </TableCell>
                   <TableCell>
                     <span className="text-sm">{Photo.device}</span>
                   </TableCell>
                   <TableCell>
                     <span className="text-sm">{Photo.timeTaken}</span>
                   </TableCell>
                 </TableRow>            
             </TableBody>
           </Table>   
  );
}

export default App;