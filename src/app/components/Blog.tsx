import Image from "next/image";



export default function Blog(){
    return(
        <div className="flex justify-evenly  gap-4 mx-20 py-4 shadow ">
            <div>
             <Image
             src="/blog1.png"
             alt="blog1"
             width={300}
             height={300}/>
             <h1 className="text-sm text-[#151875]">Sober Ali 21 Aug 2020</h1>
             <h2 className="text-[#FB2E86] font-bold text-sm">Top essential Trends in 2021</h2>
             <p className="underline text-sm text-[#151875]">More off this less hello samlande lied much</p>
             <p className="underline text-sm text-[#151875]">over tightly circa horse taped mightly</p></div>
             <div>
             <Image
             src="/blog2.png"
             alt="blog1"
             width={300}
             height={300}/>
             <h1 className="underline text-sm text-[#151875]">Sober Ali 21 Aug 2020</h1>
             <h2  className="text-[#FB2E86] font-bold text-sm">Top essential Trends in 2021</h2>
             <p className="underline text-sm text-[#151875]">More off this less hello samlande lied much</p>
             <p className="underline text-sm text-[#151875]">over tightly circa horse taped mightly</p></div>
             <div>
             <Image
             src="/blog3.png"
             alt="blog1"
             width={300}
             height={300}/>
             <h1 className="underline text-sm text-[#151875]">Sober Ali 21 Aug 2020</h1>
             <h2  className="text-[#FB2E86] font-bold text-sm">Top essential Trends in 2021</h2>
             <p className="underline text-sm text-[#151875]">More off this less hello samlande lied much</p>
             <p className="underline text-sm text-[#151875]">over tightly circa horse taped mightly</p></div>
            
             
                               
                           
        </div>
    )
}