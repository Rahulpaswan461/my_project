import { useNavigate } from "react-router"
export default function GroupDis(params) {
    const dummyChats=['helo', 'or bhai kya haal','abe ja' ]
    return(
        <div className="flex-1 col-span-2"> 
         <div className="  py-4 px-6 border-b border-gray-300 flex items-center">
            <div className="ml-3 p-5 ">
                <h2 className="text-lg font-semibold">group</h2>
                
            </div>
           
           
            <div className="Container2">
            <div class="dropdown2">
            <div class="dot"></div>
             <div class="dot"></div>
             <div class="dot"></div>
             
            <div class="content">
                <a href="#">Contact Info</a>
                <a href="#">Select messages</a>
                <a href="#">Close chat</a>
                <a href="#">Mute Notifications</a>
                <a href="#">Disapearnig messages</a>
                <a href="#">Clear message</a>
                <a href="#">Delete Chat</a>
                <a href="#">Report</a>
                <a href="#">Block</a>
            </div>
           </div>
           </div>
         </div>
         <div className="">
                {dummyChats.map(chat=>
                    <div className=" text-left  m-6"><span className="bg-gray-200 p-2 rounded-md">{chat}</span></div>
                )}
           </div>
           <div className="icon-style">
               <img src="https://www.pngfind.com/pngs/m/52-523186_plus-sign-comments-plus-icon-svg-hd-png.png" className="phot"/>
           </div>
    </div>
    )
    
}