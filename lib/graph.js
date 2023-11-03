import axios from "axios";
export const Graph = (set) => ({
  loading: false,
  error: null,
  MainActivity: [],
  PricingTrends: [],
  PricingRatio: [],
  DaysOnMarket: [],
  PerSqft: [],
  getGraph: async (db,page) => {
    try {
      set({
        loading: true,
        error: null,
       
      });
      console.log(db);

      const { data } = await axios.get(`/api/getscrape?db=${db}&page=${page}`);
      console.log(data);
      if(db==="main")
      {
      set({
        loading: false,
        error: null,
        MainActivity: data.data,
      });
      }
      if(db==="pt")
      {
        set({
          loading: false,
          error: null,
          PricingTrends: data.data,
        });
      }
      if(db==="pr")
      {
        set({
          loading: false,
          error: null,
          PricingRatio: data.data,
        });
      }
      if(db==="ps")
      {
        set({
          loading: false,
          error: null,
          PerSqft: data.data,
        });
      }
      if(db==="days")
      {
        set({
          loading: false,
          error: null,
          DaysOnMarket: data.data,
        });
      }
    } catch (err) {
      set({
        loading: false,
        error: err,
        MainActivity: [],
        PricingTrends: [],
        PricingRatio: [],
        PerSqft: [],
        DaysOnMarket: [],
        PerSqft: [],
      });
    }
  },
});
