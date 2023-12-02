import Image from "next/image";
import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      // className: "center",
      // centerMode: true,
      arrows:true,
      infinite: true,
      centerPadding: "60px",
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      speed: 500
      
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <Link
                href={"/saleHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              > 
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/SH.png"}
                    className="object-cover object-center rounded-t-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABxAHEDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACMQAQACAgMAAwACAwAAAAAAAAABAgMRBCExBRJBIlETYXH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAECEQMSIRMxQf/aAAwDAQACEQMRAD8A9Wp0p8/Yq5kOwkhXlx7nKfLiznarWcfYZDUeotQKWHoEn0K7WpbpkIpzd24uFgwvkAsNkAtKXOU6kVtBZrItHdcouJ8L5Z0Yv4Tz2c28dUyDe7iLhZMgcZOyzHwaepY3jlm4r7k7isOcf6xqHTisu1plOqDuJIVx9TQvkLWkxkkreS3x9N1No52hfyrdbqLR33KIOTxn8m3p/NPUsnlW9TmOqT+Es2TUgxm79B5WXW+ydeRu3o/hQ63MGTbRw3YfGy701ePfwfy43WnSehYkvisNEl9Rq5CyT0JMgZJH1aF8slbyPlkpex5hur+yB/ZB9A69OqVpKtiZXkT1LF5lvWxyZ6lh86epHGT2vP8AyWeab17LKpmvW297M/JW3n1/RN6ePHJlK6eg4Gb71iW7xrePLfFX/P6l6Tiz1Dk8vj5TytfFPRis9FMM9Gaz05Lk/XVpAySLaQMktMt0rlkneezOaSeSe1s5DqbRxtDeodevVPi1T4SwpLk+Sw+d5Lc5P6xeZG4lTxwbXkvkI1yN/wCijS+SxT9vtDO09TH3MR6f+Lj+U/8AXpeL5DA+Nx/WHoONHUOTz/abFaeHwzWSuIzVx2KddWkvkka0gZAkHpTMTyem8pS/q2YW0NEQ/A69iqfHTmfEKxPkfrI5Vd7bGePWZya+ny1ee5mH7bZ0cf8An43c+Peyv+Lt153yOfU+r4mL6xDW48eE8FNNDDCO71XPw5iHqDjGhCqJYDIPYDI0AplK3g3kK3hSFtD0jrSGDr1yp8WqfEacpmZ2ePWlmZ+YY1ZuaoH07N5YB12pKnXWKpzFBbHBvEW0YZoLAdBIIZVgbjWBuMYtkLXgzkL2PCVxpFoIPVqnxESqpXMQzIjRqRyg/qIonRcZvGiFowzQSEQplSDdEGNS2QvZEPCVyiIIP//Z"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow text-center ">
                  Why people decide to sell their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
          </div>
          <div>
          <Link
                href={"/saleHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              > 
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/SH.png"}
                    className="object-cover object-center rounded-t-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABxAHEDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACMQAQACAgMAAwACAwAAAAAAAAABAgMRBCExBRJBIlETYXH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAECEQMSIRMxQf/aAAwDAQACEQMRAD8A9Wp0p8/Yq5kOwkhXlx7nKfLiznarWcfYZDUeotQKWHoEn0K7WpbpkIpzd24uFgwvkAsNkAtKXOU6kVtBZrItHdcouJ8L5Z0Yv4Tz2c28dUyDe7iLhZMgcZOyzHwaepY3jlm4r7k7isOcf6xqHTisu1plOqDuJIVx9TQvkLWkxkkreS3x9N1No52hfyrdbqLR33KIOTxn8m3p/NPUsnlW9TmOqT+Es2TUgxm79B5WXW+ydeRu3o/hQ63MGTbRw3YfGy701ePfwfy43WnSehYkvisNEl9Rq5CyT0JMgZJH1aF8slbyPlkpex5hur+yB/ZB9A69OqVpKtiZXkT1LF5lvWxyZ6lh86epHGT2vP8AyWeab17LKpmvW297M/JW3n1/RN6ePHJlK6eg4Gb71iW7xrePLfFX/P6l6Tiz1Dk8vj5TytfFPRis9FMM9Gaz05Lk/XVpAySLaQMktMt0rlkneezOaSeSe1s5DqbRxtDeodevVPi1T4SwpLk+Sw+d5Lc5P6xeZG4lTxwbXkvkI1yN/wCijS+SxT9vtDO09TH3MR6f+Lj+U/8AXpeL5DA+Nx/WHoONHUOTz/abFaeHwzWSuIzVx2KddWkvkka0gZAkHpTMTyem8pS/q2YW0NEQ/A69iqfHTmfEKxPkfrI5Vd7bGePWZya+ny1ee5mH7bZ0cf8An43c+Peyv+Lt153yOfU+r4mL6xDW48eE8FNNDDCO71XPw5iHqDjGhCqJYDIPYDI0AplK3g3kK3hSFtD0jrSGDr1yp8WqfEacpmZ2ePWlmZ+YY1ZuaoH07N5YB12pKnXWKpzFBbHBvEW0YZoLAdBIIZVgbjWBuMYtkLXgzkL2PCVxpFoIPVqnxESqpXMQzIjRqRyg/qIonRcZvGiFowzQSEQplSDdEGNS2QvZEPCVyiIIP//Z"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow text-center ">
                  Why people decide to sell their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
          </div>
          <div>
          <Link
                href={"/saleHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              > 
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/SH.png"}
                    className="object-cover object-center rounded-t-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABxAHEDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACMQAQACAgMAAwACAwAAAAAAAAABAgMRBCExBRJBIlETYXH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAECEQMSIRMxQf/aAAwDAQACEQMRAD8A9Wp0p8/Yq5kOwkhXlx7nKfLiznarWcfYZDUeotQKWHoEn0K7WpbpkIpzd24uFgwvkAsNkAtKXOU6kVtBZrItHdcouJ8L5Z0Yv4Tz2c28dUyDe7iLhZMgcZOyzHwaepY3jlm4r7k7isOcf6xqHTisu1plOqDuJIVx9TQvkLWkxkkreS3x9N1No52hfyrdbqLR33KIOTxn8m3p/NPUsnlW9TmOqT+Es2TUgxm79B5WXW+ydeRu3o/hQ63MGTbRw3YfGy701ePfwfy43WnSehYkvisNEl9Rq5CyT0JMgZJH1aF8slbyPlkpex5hur+yB/ZB9A69OqVpKtiZXkT1LF5lvWxyZ6lh86epHGT2vP8AyWeab17LKpmvW297M/JW3n1/RN6ePHJlK6eg4Gb71iW7xrePLfFX/P6l6Tiz1Dk8vj5TytfFPRis9FMM9Gaz05Lk/XVpAySLaQMktMt0rlkneezOaSeSe1s5DqbRxtDeodevVPi1T4SwpLk+Sw+d5Lc5P6xeZG4lTxwbXkvkI1yN/wCijS+SxT9vtDO09TH3MR6f+Lj+U/8AXpeL5DA+Nx/WHoONHUOTz/abFaeHwzWSuIzVx2KddWkvkka0gZAkHpTMTyem8pS/q2YW0NEQ/A69iqfHTmfEKxPkfrI5Vd7bGePWZya+ny1ee5mH7bZ0cf8An43c+Peyv+Lt153yOfU+r4mL6xDW48eE8FNNDDCO71XPw5iHqDjGhCqJYDIPYDI0AplK3g3kK3hSFtD0jrSGDr1yp8WqfEacpmZ2ePWlmZ+YY1ZuaoH07N5YB12pKnXWKpzFBbHBvEW0YZoLAdBIIZVgbjWBuMYtkLXgzkL2PCVxpFoIPVqnxESqpXMQzIjRqRyg/qIonRcZvGiFowzQSEQplSDdEGNS2QvZEPCVyiIIP//Z"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow text-center ">
                  Why people decide to sell their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
          </div>
          <div>
          <Link
                href={"/saleHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              > 
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/SH.png"}
                    className="object-cover object-center rounded-t-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABxAHEDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACMQAQACAgMAAwACAwAAAAAAAAABAgMRBCExBRJBIlETYXH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAECEQMSIRMxQf/aAAwDAQACEQMRAD8A9Wp0p8/Yq5kOwkhXlx7nKfLiznarWcfYZDUeotQKWHoEn0K7WpbpkIpzd24uFgwvkAsNkAtKXOU6kVtBZrItHdcouJ8L5Z0Yv4Tz2c28dUyDe7iLhZMgcZOyzHwaepY3jlm4r7k7isOcf6xqHTisu1plOqDuJIVx9TQvkLWkxkkreS3x9N1No52hfyrdbqLR33KIOTxn8m3p/NPUsnlW9TmOqT+Es2TUgxm79B5WXW+ydeRu3o/hQ63MGTbRw3YfGy701ePfwfy43WnSehYkvisNEl9Rq5CyT0JMgZJH1aF8slbyPlkpex5hur+yB/ZB9A69OqVpKtiZXkT1LF5lvWxyZ6lh86epHGT2vP8AyWeab17LKpmvW297M/JW3n1/RN6ePHJlK6eg4Gb71iW7xrePLfFX/P6l6Tiz1Dk8vj5TytfFPRis9FMM9Gaz05Lk/XVpAySLaQMktMt0rlkneezOaSeSe1s5DqbRxtDeodevVPi1T4SwpLk+Sw+d5Lc5P6xeZG4lTxwbXkvkI1yN/wCijS+SxT9vtDO09TH3MR6f+Lj+U/8AXpeL5DA+Nx/WHoONHUOTz/abFaeHwzWSuIzVx2KddWkvkka0gZAkHpTMTyem8pS/q2YW0NEQ/A69iqfHTmfEKxPkfrI5Vd7bGePWZya+ny1ee5mH7bZ0cf8An43c+Peyv+Lt153yOfU+r4mL6xDW48eE8FNNDDCO71XPw5iHqDjGhCqJYDIPYDI0AplK3g3kK3hSFtD0jrSGDr1yp8WqfEacpmZ2ePWlmZ+YY1ZuaoH07N5YB12pKnXWKpzFBbHBvEW0YZoLAdBIIZVgbjWBuMYtkLXgzkL2PCVxpFoIPVqnxESqpXMQzIjRqRyg/qIonRcZvGiFowzQSEQplSDdEGNS2QvZEPCVyiIIP//Z"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow text-center ">
                  Why people decide to sell their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
          </div>
          <div>
          <Link
                href={"/saleHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white"
              > 
                <div className="h-[500px] w-full relative">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/SH.png"}
                    className="object-cover object-center rounded-t-md"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABxAHEDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACMQAQACAgMAAwACAwAAAAAAAAABAgMRBCExBRJBIlETYXH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAECEQMSIRMxQf/aAAwDAQACEQMRAD8A9Wp0p8/Yq5kOwkhXlx7nKfLiznarWcfYZDUeotQKWHoEn0K7WpbpkIpzd24uFgwvkAsNkAtKXOU6kVtBZrItHdcouJ8L5Z0Yv4Tz2c28dUyDe7iLhZMgcZOyzHwaepY3jlm4r7k7isOcf6xqHTisu1plOqDuJIVx9TQvkLWkxkkreS3x9N1No52hfyrdbqLR33KIOTxn8m3p/NPUsnlW9TmOqT+Es2TUgxm79B5WXW+ydeRu3o/hQ63MGTbRw3YfGy701ePfwfy43WnSehYkvisNEl9Rq5CyT0JMgZJH1aF8slbyPlkpex5hur+yB/ZB9A69OqVpKtiZXkT1LF5lvWxyZ6lh86epHGT2vP8AyWeab17LKpmvW297M/JW3n1/RN6ePHJlK6eg4Gb71iW7xrePLfFX/P6l6Tiz1Dk8vj5TytfFPRis9FMM9Gaz05Lk/XVpAySLaQMktMt0rlkneezOaSeSe1s5DqbRxtDeodevVPi1T4SwpLk+Sw+d5Lc5P6xeZG4lTxwbXkvkI1yN/wCijS+SxT9vtDO09TH3MR6f+Lj+U/8AXpeL5DA+Nx/WHoONHUOTz/abFaeHwzWSuIzVx2KddWkvkka0gZAkHpTMTyem8pS/q2YW0NEQ/A69iqfHTmfEKxPkfrI5Vd7bGePWZya+ny1ee5mH7bZ0cf8An43c+Peyv+Lt153yOfU+r4mL6xDW48eE8FNNDDCO71XPw5iHqDjGhCqJYDIPYDI0AplK3g3kK3hSFtD0jrSGDr1yp8WqfEacpmZ2ePWlmZ+YY1ZuaoH07N5YB12pKnXWKpzFBbHBvEW0YZoLAdBIIZVgbjWBuMYtkLXgzkL2PCVxpFoIPVqnxESqpXMQzIjRqRyg/qIonRcZvGiFowzQSEQplSDdEGNS2QvZEPCVyiIIP//Z"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow text-center ">
                  Why people decide to sell their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
          </div>
          <div>
          <Link
                href={"/saleHome"}
                className="shadow-md shadow-custom-light-yellow rounded-lg bg-white px-8"
              > 
                <div className="h-[500px] w-full relative ml-8">
                  <Image
                    alt="..."
                    fill
                    quality={100}
                    src={"/SH.png"}
                    className="object-cover object-center rounded-t-md "
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABxAHEDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAQUCBv/EACMQAQACAgMAAwACAwAAAAAAAAABAgMRBCExBRJBIlETYXH/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAHREBAQEBAAMBAQEAAAAAAAAAAAECEQMSIRMxQf/aAAwDAQACEQMRAD8A9Wp0p8/Yq5kOwkhXlx7nKfLiznarWcfYZDUeotQKWHoEn0K7WpbpkIpzd24uFgwvkAsNkAtKXOU6kVtBZrItHdcouJ8L5Z0Yv4Tz2c28dUyDe7iLhZMgcZOyzHwaepY3jlm4r7k7isOcf6xqHTisu1plOqDuJIVx9TQvkLWkxkkreS3x9N1No52hfyrdbqLR33KIOTxn8m3p/NPUsnlW9TmOqT+Es2TUgxm79B5WXW+ydeRu3o/hQ63MGTbRw3YfGy701ePfwfy43WnSehYkvisNEl9Rq5CyT0JMgZJH1aF8slbyPlkpex5hur+yB/ZB9A69OqVpKtiZXkT1LF5lvWxyZ6lh86epHGT2vP8AyWeab17LKpmvW297M/JW3n1/RN6ePHJlK6eg4Gb71iW7xrePLfFX/P6l6Tiz1Dk8vj5TytfFPRis9FMM9Gaz05Lk/XVpAySLaQMktMt0rlkneezOaSeSe1s5DqbRxtDeodevVPi1T4SwpLk+Sw+d5Lc5P6xeZG4lTxwbXkvkI1yN/wCijS+SxT9vtDO09TH3MR6f+Lj+U/8AXpeL5DA+Nx/WHoONHUOTz/abFaeHwzWSuIzVx2KddWkvkka0gZAkHpTMTyem8pS/q2YW0NEQ/A69iqfHTmfEKxPkfrI5Vd7bGePWZya+ny1ee5mH7bZ0cf8An43c+Peyv+Lt153yOfU+r4mL6xDW48eE8FNNDDCO71XPw5iHqDjGhCqJYDIPYDI0AplK3g3kK3hSFtD0jrSGDr1yp8WqfEacpmZ2ePWlmZ+YY1ZuaoH07N5YB12pKnXWKpzFBbHBvEW0YZoLAdBIIZVgbjWBuMYtkLXgzkL2PCVxpFoIPVqnxESqpXMQzIjRqRyg/qIonRcZvGiFowzQSEQplSDdEGNS2QvZEPCVyiIIP//Z"
                  />
                </div>
                <div className="text-center md:text-left p-8 space-y-3">
                  <h3 className="w-full text-custom-yellow text-2xl font-header hover:underline hover:decoration-4 hover:decoration-custom-light-yellow text-center ">
                  Why people decide to sell their homes
                  </h3>
                  {/* <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p> */}
                </div>
              </Link>
          </div>
        </Slider>
      </div>
    );
  }
}