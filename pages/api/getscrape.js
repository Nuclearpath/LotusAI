import connectDatabase from "../../lib/connectDatabase";
import DaysOnMarket from "../../lib/models/DaysOnMarket";
import MainActivity from "../../lib/models/MainActivity";
import PerSqft from "../../lib/models/PerSqft";
import PricingRatio from "../../lib/models/PricingRatio";
import PricingTrends from "../../lib/models/PricingTrends";
import supplyAndDemand from "../../lib/models/SupplyAndDemand";

export default async function handler(req, res) {
  try {
  const {db}=req.query;
  const {page}=req.query;
  const limit=Number(page) ;
    let data = [];

switch(db)
{
  case "main":
    data=await MainActivity.findAll({limit});
    break;
  case "pt":
    data=await PricingTrends.findAll({limit});
    break;
  case "pr":
    data=await PricingRatio.findAll({limit});
    break;
  case "ps":
    data=await PerSqft.findAll({limit});
    break;
  case "sd":
    data=await supplyAndDemand.findAll({limit});
    break;
  case "days":
    data=await DaysOnMarket.findAll({limit});
  

}
// // console.log(data);
    
    return res.status(200).json({ success: true,
       data
       });
  } catch (err) {
    // console.log(err);
    throw new Error(err.message);
  }
}
