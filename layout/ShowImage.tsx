import React from "react";
import {AVATAR_DEFAULT, IMAGE_DEFAULT} from "../utilities/Enum";
import {Config} from "../api/configs";

type ShowImageProps = {
  image?: string;
  container?: string;
  className?: string;
  isAvatar?: boolean;
  alt?: string;
};
const ShowImage = ({
  image,
  container,
  className,
  isAvatar,
    alt
}: ShowImageProps) => {
  const urlImage = image
    ? `${Config.URL_API}files/download/${container ? container : 'images'}?file=${image}`
    : isAvatar
    ? AVATAR_DEFAULT
    : IMAGE_DEFAULT;
  return <img className={className} src={urlImage} alt={alt? alt : 'cover'} />;
};

export default ShowImage;
