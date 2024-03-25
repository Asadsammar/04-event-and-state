import Image from "next/image";
import Tombol1, { Tombol2,} from "./component/button";
export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol1 />
      </div>
    </>
  );
}
