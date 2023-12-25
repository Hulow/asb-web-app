import "./Logo.css";
import Image from "next/image";

export function Logo() {
  return (
    <div className="logo-container">
      <div className="image-logo-container">
        <Image
          priority
          src="/ASB.svg"
          width={500}
          height={500}
          alt="ASB Logo"
        />
      </div>
    </div>
  );
}

export function SecondaryLogo() {
  return (
    <div className="secondary-logo-container">
      <div className="image-logo-container">
        <Image
          priority
          src="/ASB_secondary.svg"
          width={60}
          height={60}
          alt="ASB Logo"
        />
      </div>
    </div>
  );
}

export function SecondaryLogoV2() {
  return (
    <div className="secondary-logo-v2-container">
      <Image
        priority
        src="/ASB_secondary.svg"
        width={150}
        height={150}
        alt="ASB Logo"
      />
    </div>
  );
}
