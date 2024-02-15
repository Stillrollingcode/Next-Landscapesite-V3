import Image from "next/image";
import { BiXCircle } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setModalClose } from "../../lib/reducers/staffModalSlice";

const Modal = ({ image, name, title, intro }) => {
  const dispatch = useDispatch();
  return (
    <div className="fixed mx-auto top-0 left-0 h-full w-full bg-black bg-opacity-70 shadow-md z-50 flex justify-center items-center">
      <div className="relative grid lg:grid-cols-2 lg:h-2/3 lg:w-2/3 lg:max-w-[1000px] lg:max-h-[550px] h-[75vh] w-[90%] bg-white rounded-2xl bg-opacity-90 justify-center items-between overflow-y-auto">
        <BiXCircle
          className="absolute text-primary text-4xl right-3 top-3 opacity-70 hover:opacity-100 cursor-pointer lg:text-gray-400 z-10 min-[200px]:max-[1023px]:text-white "
          onClick={() => dispatch(setModalClose())}
        />
        <div className="relative min-h-[350px] w-full lg:w-[90%] min-[200px]:max-[1023px]:absolute min-[200px]:max-[1023px]:z-0">
          <Image
            src={image}
            placeholder="blur"
            blurDataURL={image}
            alt=""
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
        </div>
        <div className="px-6 flex flex-col justify-center py-8">
          <h2 className="text-3xl font-bold text-primary">{name}</h2>
          <h3 className="text-xl font-semibold mb-4 text-[#4C5249]">{title}</h3>
          <div className="mb-8 text-[#4C5249]">{intro}</div>
          {/* <div className="flex space-x-8 text-3xl">
            {socialMedia.facebook && (
              <a href={socialMedia.facebook} target="_blank" rel="noreferrer">
                <BsFacebook />
              </a>
            )}
            {socialMedia.instagram && (
              <a href={socialMedia.instagram} target="_blank" rel="noreferrer">
                <BsInstagram />
              </a>
            )}
            {socialMedia.linkedin && (
              <a href={socialMedia.linkedin} target="_blank" rel="noreferrer">
                <BsLinkedin />
              </a>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
