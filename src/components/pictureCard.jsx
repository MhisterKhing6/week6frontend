

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import { Config } from '../config/Config';
import  Card  from 'react-bootstrap/Card';
import { MdDeleteForever } from "react-icons/md";



const PictureCard =  ({pic, setPictures})=> {

  const deletePic = async (id, updatePictures)  => {
    try {
      let response = await fetch(`${Config.getBaseUrl()}/api/files/images?id=${id}`, {
        method: "DELETE",
      })
      if(response.ok){
        updatePictures(pics => {
          let newPics = pics.filter(pic => pic.id != id);
          return newPics;
        })
      }
      else{
        alert("could't delete Image")
      }
    } catch (ex) {
      console.log(ex)
      alert("couldn't reach server")
    }
  }
  
    
    return (
      <>
      <Card className="col-12 col-md-6 col-lg-4 my-1 p-2  picture-card" data-animate-effect="fadeInUp">
      <Card.Img 
      src={pic.imageUrl} 
      style={{ width: "100%", height: "300px", objectFit: "cover" }} 
      />
      <MdDeleteForever onClick={()=> {deletePic(pic.id, setPictures)}} size={50} color='red' className='delete-btn'/>
    <Card.Body>
      {pic.imageDescription}
    </Card.Body> 
      </Card>
      </>
        )
    
}
export default PictureCard