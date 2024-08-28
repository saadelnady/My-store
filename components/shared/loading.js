import Image from "next/image";
import logoImg from "../../assets/images/logo.png";
const Loading = () => {
  return (
    <div className="loading">
      <Image src={logoImg} alt="logo-img" className="loading-img" />
    </div>
  );
};

export default Loading;
