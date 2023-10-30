import React from "react";
import MainHeader from "../components/MainHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
function ValueHome() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);
  return (
    <div>
      <MainHeader page={""}></MainHeader>
      <div className="sm:py-12 py-8 sm:flex  flex-col w-full space-y-7 relative sm:px-12 px-3 sm:overflow-hidden">
        <div className="w-full justify-start font-header sm:text-4xl text-2xl">
        Why people search for the value of their homes
        </div>
        <ul className="list-decimal">
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
            Curiosity:
            </span>{" "}
            Many homeowners are naturally curious about the value of their
            biggest asset. They want to stay informed and have a general
            idea of how much their home is worth in the current market.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
            Refinancing:
            </span>{" "}
            Homeowners who are considering refinancing their mortgage may
            want to know the current value of their home to assess their
            options and determine if it{"'"}s a good time to refinance
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
            Selling or Listing:
            </span>{" "}
            Homeowners who are thinking about selling their property or
            listing it for sale often check online home value estimates to
            get an initial idea of what price range they could potentially
            list their home for.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
            Estate Planning:
            </span>{" "}
            When engaging in estate planning, homeowners may need to
            determine the value of their property as part of assessing
            assets and potential inheritance.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
            Property Tax Assessment:
            </span>{" "}
            Some homeowners may want to challenge or verify the accuracy of
            their property tax assessments by comparing it with online
            estimated values.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
            Home Improvement Decisions:
            </span>{" "}
            People considering major renovations or upgrades may want to
            understand how these improvements could potentially impact the
            value of their home before making decisions. idea of how much
            their home is worth in the current market.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
            Property Tax Assessment:
            </span>{" "}
            Property tax is often calculated based on the assessed value of
            a home. Homeowners may want to verify the accuracy of their tax
            assessments to ensure they{"'"}re not overpaying.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
            Home Equity:
            </span>{" "}
            Homeowners may want to know the value of their homes to
            calculate their home equity. This information can be important
            for borrowing against the home{"'"}s equity or for financial
            planning.
          </li>
          <li className="w-full justify-start font-Montserrat    text-xl">
            <span className="font-header underline font-semibold">
            Insurance Coverage:
            </span>{" "}
            Homeowners may want to ensure that their insurance coverage is
            adequate based on the current value of their property. In case
            of damage or loss, they want to be adequately compensated.
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
            Market Research:
            </span>{" "}
            Prospective homebuyers may want to research property values in
            an area they are considering moving to, helping them make
            informed decisions.
          </li>
          <li className="w-full justify-start     text-xl">
            <span className="font-header underline font-semibold">
            Planning for Retirement:
            </span>{" "}
            Homeowners approaching retirement may assess their home{"'"}s
            value as part of their retirement planning to determine if
            downsizing or using home equity is a viable option.
            </li>
        </ul>
      </div>
    </div>
  );
}

export default ValueHome;