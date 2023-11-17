import { subScrape } from "./subScrape";
const scrapeTable = async (page) => {
  const check = await page.$$(".series_controls.series_12 > label");

  for (let i = 1; i < 5; i++) {
    await check[i].click();
  }

  const response = await subScrape(
    page,
    [
      "id",
      "month",
      "allHome",
      "detachedHome",
      "attachedHome",
      "tHome",
      "coopHome",
    ],
    7
  );
  await page.click(".tax.heading_3");
  const check1 = await page.$$(".series_controls.series_13 > label");

  for (let i = 1; i < 14; i++) {
    await check1[i].click();
  }
  const response1 = await subScrape(
    page,
    [
      "id",
      "month",
      "allHome",
      "listpriceU50k",
      "listprice_50Kto99999",
      "listprice_100Kto149999",
      "listprice_150Kto199999",
      "listprice_200Kto299999",
      "listprice_300Kto399999",
      "listprice_400Kto499999",
      "listprice_500Kto599999",
      "listprice_600Kto799999",
      "listprice_800Kto999999",
      "listprice_1Mto2499999",
      "listprice_25Mto4999999",
      "listprice_5000000",
    ],
    16
  );
  await page.click(".sold_only.heading_4");
  const check2 = await page.$$(".sold_only.series_controls.series_14 > label");

  for (let i = 1; i < 14; i++) {
    await check2[i].click();
  }
  const response2 = await subScrape(
    page,
    [
      "id",
      "month",
      "allHome",
      "soldpriceu50k",
      "soldprice_50Kto99999",
      "soldprice_100Kto149999",
      "soldprice_150Kto199999",
      "soldprice_200Kto299999",
      "soldprice_300Kto399999",
      "soldprice_400Kto499999",
      "soldprice_500Kto599999",
      "soldprice_600Kto799999",
      "soldprice_800Kto999999",
      "soldprice_1Mto2499999",
      "soldprice_25Mto4999999",
      "soldprice_5000000",
    ],
    16
  );
  await page.click(".sold_only.tax.heading_5");
  const check3 = await page.$$(
    ".sold_only.tax.series_controls.series_15 > label"
  );

  for (let i = 1; i < 12; i++) {
    await check3[i].click();
  }
  const response3 = await subScrape(
    page,
    [
      "id",
      "month",
      "allHome",
      "market0days",
      "market_1to10days",
      "market_11to20days",
      "market_21to30days",
      "market_31to60days",
      "market_61to90days",
      "market_91to120days",
      "market_121to180days",
      "market_181to360days",
      "market_361to720days",
      "market_720days",
    ],
    14
  );
  await page.click(".heading_6");
  const check4 = await page.$$(".series_controls.series_16 > label");

  for (let i = 1; i < 13; i++) {
    await check4[i].click();
  }
  const response4 = await subScrape(
    page,
    [
      "id",
      "month",
      "allHome",
      "livingAreau_800sqft",
      "livingArea800to999sqft",
      "livingArea1000to1199sqft",
      "livingArea1200to1399sqft",
      "livingArea1400to1599sqft",
      "livingArea1600to1799sqft",
      "livingArea1800to1999sqft",
      "livingArea2000to2499sqft",
      "livingArea2500to2999sqft",
      "livingArea3000to4000sqft",
      "livingArea4000to4999sqft",
      "livingArea5000sqft",
    ],
    15
  );
  await page.click(".heading_7");
  const check5 = await page.$$(".series_controls.series_17 > label");

  for (let i = 1; i < 8; i++) {
    await check5[i].click();
  }
  const response5 = await subScrape(
    page,
    [
      "id",
      "month",
      "allHome",
      "bedroom0",
      "bedroom1",
      "bedroom2",
      "bedroom3",
      "bedroom4",
      "bedroom5",
      "bedroom6",
    ],
    10
  );

  await page.click(".heading_8");
  const check6 = await page.$$(".series_controls.series_18 > label");

  for (let i = 1; i < 7; i++) {
    await check6[i].click();
  }

  const response6 = await subScrape(
    page,
    [
      "id",
      "month",
      "allHome",
      "bathroom0",
      "bathroom1",
      "bathroom2",
      "bathroom3",
      "bathroom4",
      "bathroom5",
    ],
    9
  );

  await page.click(".heading_9");
  const check7 = await page.$$(".series_controls.series_19 > label");

  for (let i = 1; i < 5; i++) {
    await check7[i].click();
  }
  const response7 = await subScrape(
    page,
    [
      "id",
      "month",
      "allHome",
      "allBankMediated",
      "ForeclosuresREO",
      "ShortSales",
      "NonBankMediated",
    ],
    7
  );

  for (let i = 0; i < 120; i++) {
    response[i] = {
      ...response[i],
      ...response1[i],
      ...response2[i],
      ...response3[i],
      ...response4[i],
      ...response5[i],
      ...response6[i],
      ...response7[i],
    };
  }
  return response;
};
export default scrapeTable;
