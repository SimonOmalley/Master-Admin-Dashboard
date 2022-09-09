import axios from "axios"
import React, { useEffect, useState } from "react"
import { render } from "react-dom";

class Photo extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://admin.smartwaste.app/api/Controller/API/BarcodeAPI/single_read.php?id=18")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }        
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
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
                 <TableRow key={item.id}>
                   <TableCell>                  
                       <div>
                         <p className="font-semibold">{item.photoUnidentified}</p>                      
                       </div>                  
                   </TableCell>
                   <TableCell>
                     <span className="text-sm"></span>
                   </TableCell>
                   <TableCell>
                     
                   </TableCell>
                   <TableCell>
                     <span className="text-sm"></span>
                   </TableCell>
                   <TableCell>
                     <span className="text-sm"></span>
                   </TableCell>
                   <TableCell>
                     <span className="text-sm"></span>
                   </TableCell>
                 </TableRow>            
             </TableBody>
           </Table>
          ))}
        </ul>
      );
    }
  }
}





