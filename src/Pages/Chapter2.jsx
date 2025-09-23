import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Chapter2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDiv = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "file:///D:/Krishna/src/assets/pic2.webp",
    "file:///D:/Krishna/src/assets/pic5.webp",
    "file:///D:/Krishna/src/assets/pic4.webp",
    "file:///D:/Krishna/src/assets/pic3.webp",
    "https://imgs.search.brave.com/AQDcb_9YR9Ym9We9pFDPR6xCUC4JDReqoyJCks3w18U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFpZGMyN0pnb0wu/anBn",
    "https://imgs.search.brave.com/xr4zEwgjpovFgYNoCSYdPHGVpthrPZNuQYJA6CzrUE4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jdXRlLWxvcmQt/a3Jpc2huYS1yZXN0/aW5nLWNsb3VkLXBp/bGxvd180ODA5MDAt/MjQ4OS5qcGc_c2Vt/dD1haXNfaW5jb21p/bmcmdz03NDAmcT04/MA",
    "file:///D:/Krishna/src/assets/pic1.webp",
    "https://imgs.search.brave.com/27ektoueaPCmA2_3dxDK6qSodM94J2PG1NUA1c8JM7A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzM5Lzc2LzYx/LzM2MF9GXzYzOTc2/NjE2Ml9TZ25MODhU/cnhYWkNCRjJFU3lJ/MUVQQUY4YXhoM2ND/WC5qcGc",
    "https://imgs.search.brave.com/5yC2dgSKGOpmTFnrtKQ-PNBCKCVnAtpXmg7WwxNqzLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YWludGluZy1yZXBy/ZXNlbnRpbmcta3Jp/c2huYV8yMy0yMTUx/MDczMTUzLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA",

  ];

  console.log(imageArray);

  useGSAP(function () {
    gsap.to(imageDiv.current, {
      scrollTrigger: {
        trigger: imageDiv.current,
        markers: false,
        start: "top 10%",
        end: "top -70%",
        pin: true,
        onUpdate:elem=>{
          const imgIndex = Math.floor(elem.progress * imageArray.length)

          imageRef.current.src = imageArray[imgIndex]
        }
      },
    });
  });

  return (
    <div>
      {/* section 1 start's from here */}
      <div className="section1">
        <div
          ref={imageDiv}
          className="h-[20vw] w-[15vw] overflow-hidden rounded-3xl top-30 absolute left-[30vw] bg-rose-800"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://imgs.search.brave.com/agXNZTHG_ZXErhvIrVVsseAJC_79QwAZ1yr7Qfwze_4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rcmlz/aG5hc3RvcmUuY29t/L2ltYWdlcy9jYWNo/ZS81NzktNzQzeDEw/MDAud2VicA"
            alt=""
          />
        </div>

        <div className="section2 relative font-[font2]">
          <div className=" pt-[30vh]">
            <h1 className="text-[12vw] uppercase leading-[15vw] text-center border-b-4 border-t-4 border-amber-100">
              Chapter 01 :-{" "}
            </h1>
            <br />
            <h1 className="text-[7vw] uppercase leading-[7vw] text-center text-black ">
              The Celestial Birth 🌠
            </h1>
          </div>

          <div className="pl-[40%] mt-15">
            <p className="text-4xl">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "In the silence
              of midnight, when darkness ruled over Mathura, a divine light was
              born. Within the prison walls, Devaki and Vasudeva welcomed their
              child—Lord Krishna, the eternal symbol of hope and love. His birth
              was not just a moment in time, but the beginning of a journey that
              would guide humanity towards truth, compassion, and dharma."
            </p>
          </div>
        </div>
      </div>

      {/* section 2 start's from here */}
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Chapter2;
