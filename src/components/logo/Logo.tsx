import "./Logo.css";
import Image from "next/image";

export function Logo() {
  return (
    <div className="logo">
      <Image priority src="/ASB.svg" width={500} height={500} alt="ASB Logo" />
    </div>
  );
}
