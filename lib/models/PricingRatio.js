const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  pool: {
    min: 0,
    max: 50,
    acquireTimeoutMillis: 100000,
    idleTimeoutMillis: 1000000,
  },
});

class PricingRatio extends Model {}

PricingRatio.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    month: {
      type: DataTypes.STRING,
    },
    allHome: {
      type: DataTypes.STRING,
    },
    detachedHome: {
      type: DataTypes.STRING,
    },
    attachedHome: {
      type: DataTypes.STRING,
    },
    tHome: {
      type: DataTypes.STRING,
    },
    coopHome: {
      type: DataTypes.STRING,
    },
    listpriceU50k: {
      type: DataTypes.STRING,
    },
    listprice_50Kto99999: {
      type: DataTypes.STRING,
    },
    listprice_100Kto149999: {
      type: DataTypes.STRING,
    },
    listprice_150Kto199999: {
      type: DataTypes.STRING,
    },
    listprice_200Kto299999: {
      type: DataTypes.STRING,
    },
    listprice_300Kto399999: {
      type: DataTypes.STRING,
    },
    listprice_400Kto499999: {
      type: DataTypes.STRING,
    },
    listprice_500Kto599999: {
      type: DataTypes.STRING,
    },
    listprice_600Kto799999: {
      type: DataTypes.STRING,
    },
    listprice_800Kto999999: {
      type: DataTypes.STRING,
    },
    listprice_1Mto2499999: {
      type: DataTypes.STRING,
    },
    listprice_25Mto4999999: {
      type: DataTypes.STRING,
    },
    listprice_5000000: {
      type: DataTypes.STRING,
    },
    soldpriceu50k: {
      type: DataTypes.STRING,
    },
    soldprice_50Kto99999: {
      type: DataTypes.STRING,
    },
    soldprice_100Kto149999: {
      type: DataTypes.STRING,
    },
    soldprice_150Kto199999: {
      type: DataTypes.STRING,
    },
    soldprice_200Kto299999: {
      type: DataTypes.STRING,
    },
    soldprice_300Kto399999: {
      type: DataTypes.STRING,
    },
    soldprice_400Kto499999: {
      type: DataTypes.STRING,
    },
    soldprice_500Kto599999: {
      type: DataTypes.STRING,
    },
    soldprice_600Kto799999: {
      type: DataTypes.STRING,
    },
    soldprice_800Kto999999: {
      type: DataTypes.STRING,
    },
    soldprice_1Mto2499999: {
      type: DataTypes.STRING,
    },
    soldprice_25Mto4999999: {
      type: DataTypes.STRING,
    },
    soldprice_5000000: {
      type: DataTypes.STRING,
    },
    market0days: {
      type: DataTypes.STRING,
    },
    market_1to10days: {
      type: DataTypes.STRING,
    },
    market_11to20days: {
      type: DataTypes.STRING,
    },
    market_21to30days: {
      type: DataTypes.STRING,
    },
    market_31to60days: {
      type: DataTypes.STRING,
    },
    market_61to90days: {
      type: DataTypes.STRING,
    },
    market_91to120days: {
      type: DataTypes.STRING,
    },
    market_121to180days: {
      type: DataTypes.STRING,
    },
    market_181to360days: {
      type: DataTypes.STRING,
    },
    market_361to720days: {
      type: DataTypes.STRING,
    },
    market_720days: {
      type: DataTypes.STRING,
    },
    livingAreau_800sqft: {
      type: DataTypes.STRING,
    },
    livingArea800to999sqft: {
      type: DataTypes.STRING,
    },
    livingArea1000to1199sqft: {
      type: DataTypes.STRING,
    },
    livingArea1200to1399sqft: {
      type: DataTypes.STRING,
    },
    livingArea1400to1599sqft: {
      type: DataTypes.STRING,
    },
    livingArea1600to1799sqft: {
      type: DataTypes.STRING,
    },
    livingArea1800to1999sqft: {
      type: DataTypes.STRING,
    },
    livingArea2000to2499sqft: {
      type: DataTypes.STRING,
    },
    livingArea2500to2999sqft: {
      type: DataTypes.STRING,
    },
    livingArea3000to4000sqft: {
      type: DataTypes.STRING,
    },
    livingArea4000to4999sqft: {
      type: DataTypes.STRING,
    },
    livingArea5000sqft: {
      type: DataTypes.STRING,
    },
    bedroom0: {
      type: DataTypes.STRING,
    },
    bedroom1: {
      type: DataTypes.STRING,
    },
    bedroom2: {
      type: DataTypes.STRING,
    },
    bedroom3: {
      type: DataTypes.STRING,
    },
    bedroom4: {
      type: DataTypes.STRING,
    },
    bedroom5: {
      type: DataTypes.STRING,
    },
    bedroom6: {
      type: DataTypes.STRING,
    },
    bathroom0: {
      type: DataTypes.STRING,
    },
    bathroom1: {
      type: DataTypes.STRING,
    },
    bathroom2: {
      type: DataTypes.STRING,
    },
    bathroom3: {
      type: DataTypes.STRING,
    },
    bathroom4: {
      type: DataTypes.STRING,
    },
    bathroom5: {
      type: DataTypes.STRING,
    },
    allBankMediated: {
      type: DataTypes.STRING,
    },
    ForeclosuresREO: {
      type: DataTypes.STRING,
    },
    ShortSales: {
      type: DataTypes.STRING,
    },
    NonBankMediated: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "PricingRatio",
  }
);
module.exports = PricingRatio;
