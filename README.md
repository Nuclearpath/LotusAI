# Front End Documentation

## Project name: LotusAI
Version: 0.1.0

## Github : [https://github.com/zzpritzz/LotusAI](https://github.com/zzpritzz/LotusAI)

## Introduction:

This document provides an overview of the front end development for Lotus AI,, a NextJS application designed for [insert brief project description]. It details the project's architecture, technologies used, and how to contribute to the codebase.

## Technologies:

- Next JS [pages directory]
- ReactJS
- Javascript
- Tailwind CSS

 ### Important Libraries

- Zustand [state management]
- Next-auth [user session management]
- Next-UI [UI component library]
- React icons
- Slick Carousal [Sliders]
- React ChartJS 2

## Project Structure

The project contains mainly 5 folders and configuration files in the root directory

 ### Component folder:
 This folder contains the code for the layout sections that are used in the pages

 ### Lib folder: 
 This folder contains the Models and controller code to connect with database and scraper for the smartcharts.

 ### Pages folder:
 This folder has all the pages that are part of the website. The flow starts from \_app.js for the project

 ### Public folder:
 This folder has all the assets that we use in the pages

 ### Styles folder:
 This folder only has globalstyles that need to be added since we use tailwind classes at the Html level for styling

## Installation
```bash
npm install # install all the dependencies in the package.json
npm run dev # start the development server
```
## Deployment

Can be hosted in Vercel connecting to the Github repo for Continuous deployment.

Environment variable needs to be add to Vercel while deployment given as per **env.example**

## Code Style

1) Add Provider or wrappers need for the entire project in \_app.js

```
 import "../styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";

import { SessionProvider } from "next-auth/react";

import Script from "next/script";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

return (

<SessionProvider session={session}\>

<Script

id="zsiqchat"

defer

src="/salesiq.js"

\>

<NextUIProvider\>

…
```

2) Pages in the file name act as routes

 Roi.js in the page folder can be accessed by http:urlname/roi

3) Add the sections for each page as components
```
…

return (

<div className=" flex w-full flex-col"\>



<MainHeader page={""}\>\</MainHeader\>

<div className="w-full flex flex-col sm:px-12 px-3"\>

<div className="sm:pt-24 pt-3 flex justify-start sm:text-3xl text-2xl font-header w-full"\>

DashBoard

</div\>

<DashboardContent {...data}\>\</DashboardContent\>

….
```
4) For creating Apis use the api folder

Files can be accessed via the route /api/signup
```
 .import connectDatabase from "../../lib/connectDatabase";

import CredUser from "../../lib/models/CredUser";

export default async function handler(req, res) {

if (req.method !== "POST") {

res.status(405).send({ message: "Only POST requests allowed" });

return;

}

try {

….

}

catch{

….

}
```
5) Style using tailwind classnames in the js files
```
…

<div className="w-full sm:px-12 px-3 sm:py-9 py-3"\>

<div className="py-5 flex flex-col px-5 shadow-xl rounded-lg"\>

<div className="w-full flex flex-col justify-center gap-3 md:flex-row md:justify-between items-center"\>

<div\>

<div className="font-Montserrat font-semibold text-custom-yellow text-xl "\>

Users

</div\>

…
```
6) Custom variables for colors ,fonts, assets can be added to the tailwind config to use globally as classnames

tailwindconfig.js
```
 theme: {

extend: {

fontFamily: {

Montserrat: ["Lato", "sans-serif"],

threeline: ["Bungee Outline", "cursive"],

header: ["Lato", "sans-serif"],

head: ["Lato", "sans-serif"],

},

backgroundImage: {

"hero-pattern": "url('/Rect.png')",

},

spacing: {

84: "20rem",

},

colors: {

"custom-yellow": "#FFA921",

….
```

7) Create reusable components in Component folder to used as \<Component/\> in the layout
```
 import React from "react";

import Image from "next/image";

function CompCard({ image, price, area }) {

return (

<div className="w-full flex flex-col shadow-lg "\>

<div className="w-full h-[30vh]"\>

<Image fill src={image} className="!relative"\>\</Image\>

</div\>

<div className="w-full font-Montserrat font-medium pt-2 text-xl px-2"\>

Sold Price Sold ${price}

</div\>

<div className="w-full font-Montserrat font-normal pt-2 px-2"\>{area}\</div\>

<div className="w-full flex justify-end py-4 px-2"\>

<button className="bg-custom-yellow text-white px-5 text-xl py-2 rounded-md"\>

select

</button\>

</div\>

</div\>

);

}

export default CompCard;
```
8) Create nested routes by using Subfolders in the page folder

Example nested route **/salebyowner/pricing**

## Components:

### UI components-

**CenterSlider** - full screen carousal

**Dropdown**- used in navbar for FSBO

**Category dropdown**- used in ROI for selecting lists

**Mainheader** - navbar for all the pages

**CompCard** - Comparable properties house cards

**House**- Dashboard house

**Loader**- lotus svg animation

**MarketTrend** - Graph 1

**ValueTrend**- Graph 2

### Section components

**DashboardContent** - Layout we show irrespective of user login

**RentvsSell Calculator**- Component to show the inputs and calculate the rent vs sell values

**FeatureTable** - table in roi

**FeatureChart**- Graph 3

**AdminHeader**- navbar for admin, moderator pages

## Resources

[https://nextjs.org/](https://nextjs.org/)

[https://next-auth.js.org/](https://next-auth.js.org/)

[https://react-slick.neostack.com/](https://react-slick.neostack.com/)

[https://nextui.org/](https://nextui.org/)

[https://tailwindcss.com/docs](https://tailwindcss.com/docs)

[https://react-chartjs-2.js.org/](https://react-chartjs-2.js.org/)