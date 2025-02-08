import Image from "next/image";


interface Cardprops {
    title:string;
   
    $:number | string;
  
    image:string;
    altText:string;
    width:number;
    height:number;
}



const Card =({title,$, image, altText }:Cardprops)=>{
    return(
        
         <div className="shadow-bottom py-0 ">
            <Image src={image} alt={altText} width={300} height={300}/>
            <h2 className="font-bold text-lg">{title}</h2>
         
            <div className="text-black font-semibold">
           {$} </div> 
            </div>
    )
}
export default Card;