import React, { useState } from "react";
import Header from "./Header";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronCompactDown } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useEffect } from "react";

const HomeSection = () => {
const [domLoaded, setDomLoaded] = useState(false);

useEffect(() => {
    setDomLoaded(true);
  }, []);

  /*Form value */
const [location, setLoaction] = useState("");
const router = useRouter();

  /*Form Submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <div>
        {domLoaded && (
         <section className="container mx-auto ">

         </section>
        )}
    </div>
  )
}

export default HomeSection