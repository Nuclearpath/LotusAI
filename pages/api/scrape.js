import { scrapeSmartChart } from "./../../lib/scrapeSmartChart";
import connectDatabase from "../../lib/connectDatabase";
import MainActivity from "../../lib/models/MainActivity";
import PricingTrends from "../../lib/models/PricingTrends";
import PricingRatio from "../../lib/models/PricingRatio";
import DaysOnMarket from "../../lib/models/DaysOnMarket";
import PerSqft from "../../lib/models/PerSqft";
import supplyAndDemand from "../../lib/models/SupplyAndDemand";
import SetDbs from "../../lib/SetDb";
export default async function handler(req, res) {
  try {
    const data1 = await scrapeSmartChart();
    await connectDatabase();
    await MainActivity.sync({ force: true });
    await PricingTrends.sync({ force: true });
    await PricingRatio.sync({ force: true });
    await DaysOnMarket.sync({ force: true });
    await PerSqft.sync({ force: true });
    await supplyAndDemand.sync({ force: true });

    let data = data1.mainActivity;

    await SetDbs(MainActivity, data);

    data = data1.pricingTrends;
    await SetDbs(PricingTrends, data);
    data = data1.pricingRatio;
    await SetDbs(PricingRatio, data);
    data = data1.daysOnMarket;
    await SetDbs(DaysOnMarket, data);
    data = data1.sqft;
    await SetDbs(PerSqft, data);
    data = data1.supplyAndDemand;
    await SetDbs(supplyAndDemand, data);

    return res.status(200).json(data1);
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
