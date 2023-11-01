import axios from "axios";
export const Graph = (set) => ({
  loading: false,
  error: null,
  MainActivity: [],
  PricingTrends: [],
  PricingRatio: [],
  DaysOnMarket: [],
  PerSqft: [],
  getGraph: async () => {
    try {
      set({
        loading: true,
        error: null,
        MainActivity: [],
        PricingTrends: [],
        DaysOnMarket: [],
        PricingRatio: [],
        PerSqft: [],
      });

      const { data } = await axios.get("/api/getscrape");
      console.log(data);
      set({
        loading: false,
        error: null,
        MainActivity: data.data.MainActivity,
        PricingTrends: data.data.PricingTrends,
        PricingRatio: data.data.PricingRatio,
        DaysOnMarket: data.data.DaysOnMarket,
        PerSqft: data.data.PerSqft,
      });
    } catch (err) {
      set({
        loading: false,
        error: err,
        MainActivity: [],
        PricingTrends: [],
        PricingRatio: [],
        PerSqft: [],
      });
    }
  },
});
