import connectDatabase from "../../lib/connectDatabase";
import DaysOnMarket from "../../lib/models/DaysOnMarket";
import MainActivity from "../../lib/models/MainActivity";
import PerSqft from "../../lib/models/PerSqft";
import PricingRatio from "../../lib/models/PricingRatio";
import PricingTrends from "../../lib/models/PricingTrends";
import supplyAndDemand from "../../lib/models/SupplyAndDemand";

export default async function handler(req, res) {
  try {
    await connectDatabase();
    const data = {};

    data.MainActivity = await MainActivity.findAll();
    data.PricingTrends = await PricingTrends.findAll();
    data.PricingRatio = await PricingRatio.findAll();
    data.PerSqft = await PerSqft.findAll();
    // data.SupplyAndDemand = await supplyAndDemand.findAll();
    data.DaysOnMarket = await DaysOnMarket.findAll();

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
