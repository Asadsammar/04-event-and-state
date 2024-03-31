import Image from "next/image";
import Tombol1, { Tombol2, Tombol3} from "./component/button";
export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol1 />
        <hr /><hr />
        <Tombol2 isiPesan="Ini Pesanku" namaTombol="Pesan"/>
        <div/>
        <br></br>
        <div>
          <Tombol3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1"/>
          <Tombol3 isiPesan="Child Element : Tombol-2" namaTombol="Tombol-2"/>
        </div>
      </div>
    </>
  );
}
