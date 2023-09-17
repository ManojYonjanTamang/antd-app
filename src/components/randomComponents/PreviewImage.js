import React from "react";
import { Image } from "antd";

const PreviewImage = () => {
  return (
    <>
      <Image
        width={200}
        src="https://cdn.pixabay.com/photo/2023/06/16/21/13/landscape-8068792_1280.jpg "
        alt="myimage1"
      />
      <Image
        width={200}
        src="https://cdn.pixabay.com/photo/2023/05/28/09/24/south-tyrol-8023224_1280.jpg "
        alt="myimage2"
      />
      <Image
        width={200}
        src="https://cdn.pixabay.com/photo/2023/06/01/12/32/three-kingdoms-8033526_1280.jpg "
        alt="myimage3"
      />
    </>
  );
};

export default PreviewImage;
