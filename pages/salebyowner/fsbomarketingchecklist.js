import React from "react";
import MainHeader from "../../components/MainHeader";
import { BsCheck2 } from "react-icons/bs";
// import Chatbot from "../../components/Chatbot";
function fsbomarketingchecklist() {
  return (
    <div>
      {" "}
       {/* <Chatbot></Chatbot> */}
      <MainHeader></MainHeader>
      <div className="sm:px-12 px-3">
        <div className=" mt-6 py-2 bg-custom-light-yellow rounded-lg sm:text-3xl text-2xl justify-center items-center w-full flex font-Montserrat ">
          FSBO Marketing Checklist
        </div>
        <div className="font-Montserrat w-full justify-center py-6 text-center text-xl tracking-wider">
          Successfully marketing your home means much more than putting a for
          sale sign in your front yard. here are some pro tips for marketing to
          attract the most buyers
        </div>
        <div className="py-6 w-full font-Montserrat">
          <div className="font-semibold">Signage: </div>
          <ul className="list-none list-inside space-y-4">
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Place signs at major intersections leading buyers to your home
                (be sure to research local sign placement laws and regulations)
              </div>
            </li>
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>Place a large, prominent sign in your home’s front yard</div>
            </li>
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Use signs that are bright, large, and durable. Information
                should be neatly printed and large enough to be read from a
                passing vehicle
              </div>
            </li>
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>Consider having your signs professionally produced</div>
            </li>
          </ul>
        </div>
        <div className="py-6 w-full font-Montserrat space-y-4">
          <div className="font-semibold">At the house :</div>
          <ol className="list-decimal list-inside space-y-4">
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Create a brochure featuring an attractive photo of your home
                taken on a sunny day as well as the features your home has to
                offer (take the best quality photos possible for your marketing)
              </div>
            </li>

            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Create a fact sheet listing recent updates and improvements
              </div>
            </li>

            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Be sure to leave your appropriate property disclosure
                information for buyers along with your brochures
              </div>
            </li>
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Tell the story of why you love the house including the features
                you like best and benefits of living in the community or area
              </div>
            </li>
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>Include photos of area amenities</div>
            </li>
          </ol>
        </div>
        <div className="py-6 w-full font-Montserrat">
          <div className="font-semibold">Print Ads :</div>
          <ol className="list-decimal list-inside space-y-4">
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Place ads in your local neighborhood, community, or city
                newspapers
              </div>
            </li>
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Place ads in local community flyers or bulletins & at your local
                schools, places of worship and shopping venues
              </div>
            </li>
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Create and mail postcards featuring your home and its features
                to your neighbors - with an invitation to your open house
              </div>
            </li>
          </ol>
        </div>
        <div className="py-6 w-full font-Montserrat">
          <div className="font-semibold">Online :</div>
          <ol className="list-decimal list-inside space-y-4">
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Advertise daily on as many websites and social media platforms
                as you can
              </div>
            </li>
            <li className="w-full flex items-center space-x-4">
              <BsCheck2 className="w-8 h-8 flex border-2 border-custom-yellow text-custom-yellow shrink-0"></BsCheck2>
              <div>
                Create a website for your home. Include the website address and
                a QR code on all of your print advertising
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default fsbomarketingchecklist;
