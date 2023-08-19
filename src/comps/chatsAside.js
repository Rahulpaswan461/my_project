import GroupGrid from "./groupGrid";
import './design.css'
export default function ChatsAside(params) {
  return (
    <div className=" h-screen border-gray-300 border w-full col-span-1">
      <div className=" bg-white border-r border-gray-300">
        <div className="py-4 px border-b border-gray-300">
          <h1 className="text-xl font-semibold">WhatsApp</h1>
         
           <div class="dropdown">
            <div className="Container">
            <div class="dot"></div>
             <div class="dot"></div>
             <div class="dot"></div>
             </div>
            <div class="content">
                <a href="#">New Group</a>
                <a href="#">New community</a>
                <a href="#">Starred message</a>
                <a href="#">Select chats</a>
                <a href="#">Settings</a>
                <a href="#">Log out</a>
            </div>
           </div>
           </div>
       
        <GroupGrid/>
      </div>
    </div>
  );
}
