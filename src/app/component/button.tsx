'use client'
export default function Tombol1(){
    function handleMouseOver(){
        alert("Eits, want to press the button?");
      }
    function handleClick(){
        alert("The button has been pressed!");
    }
    
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded" 
        onClick={handleClick} 
        onMouseLeave={() => {alert("Oh, how come you're gone!!!")}}
        //onMouseOver={handleMouseOver}
        >
            Ini tombol
        </button>
    );
}
export function Tombol2({isiPesan, namaTombol}:any) {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={()=>alert(isiPesan)}
      >
        {namaTombol}
      </button>
    );
  }
  
  /*export function Tombol3({isiPesan, namaTombol}:any){
      return (
          <button
              className="bg-green-400 hover:bg-blue-700 text-white p-2 rounded"
              onClick={(e)=>{e.stopPropagation; alert(isiPesan)}}>
              {namaTombol}
          </button>
      );
  }*/