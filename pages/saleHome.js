import React from "react";
import MainHeader from "../components/MainHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
function SaleHome() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
    } else {
      router.push("/");
    }
  }, [session]);
  return (
    <div>
      <MainHeader></MainHeader>
      <div className="sm:py-12 py-8 sm:flex  flex-col w-full space-y-7 relative sm:px-12 px-3 sm:overflow-hidden">
        <div className="w-full justify-start font-header sm:text-4xl text-2xl">
          Why people decide to sell their homes
        </div>
        <ul className="list-decimal">
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Relocation:
            </span>{" "}
            Job transfers, changes in family circumstances, or a desire to move
            to a different city or neighborhood often lead homeowners to sell
            their houses.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Upsizing or Downsizing:
            </span>{" "}
            Growing families may need more space, while empty nesters or
            individuals seeking a simpler lifestyle may want to downsize to a
            smaller home.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Financial Reasons:
            </span>{" "}
            Homeowners may choose to sell their house due to financial
            considerations such as needing equity for other investments,
            reducing mortgage expenses, or addressing financial challenges.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Lifestyle Changes:
            </span>{" "}
            Changes in lifestyle preferences, such as wanting to live closer to
            amenities, schools, or recreational areas, can prompt homeowners to
            sell and find a property that better suits their needs. (top reasons
            here are divorce, birth of children, graduation of children,
            marriage, death, downsizing – usually related to retirement,
            distress, and relocation)
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Repairs and Maintenance:
            </span>{" "}
            Some homeowners decide it's time to sell when they no longer want
            the responsibility of costly repairs or ongoing maintenance
            associated with their current property.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Investment Opportunities:
            </span>{" "}
            Selling a property can provide capital for other investment
            opportunities, such as purchasing additional real estate properties
            or investing in different ventures.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Retirement Planning:
            </span>{" "}
            Homeowners approaching retirement may choose to sell their house as
            part of their retirement planning strategy, either to downsize or
            relocate to a more desirable retirement destination.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Divorce or Separation:
            </span>{" "}
            Divorce or Separation: During divorce or separation proceedings,
            selling the shared property is often necessary for financial and
            logistical reasons.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Market Conditions:
            </span>{" "}
            Favorable market conditions, such as high demand and low inventory
            levels, can motivate homeowners to sell and take advantage of
            potentially higher sale prices.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Estate Planning:
            </span>{" "}
            When planning their estate, individuals may need to know the value
            of their property to distribute assets among beneficiaries or make
            other financial decisions.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
              Personal Preferences:
            </span>{" "}
            Sometimes homeowners simply desire a change of scenery and want a
            fresh start by selling their current property and finding something
            different that aligns with their personal tastes.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SaleHome;
