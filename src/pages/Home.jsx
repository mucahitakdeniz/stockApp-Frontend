import React from "react";
import Typography from "@mui/material/Typography";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import { useEffect } from "react";

const Home = () => {
  const { sales } = useSelector((state) => state.stock);
  const { purchases } = useSelector((state) => state.stock);
  const { getSalesPurchases } = useStockCall();
  useEffect(() => {
    getSalesPurchases();
  }, []);
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Dashboard
      </Typography>
      <KpiCards sales={sales} purchases={purchases} />
      <Charts sales={sales} purchases={purchases} />
    </div>
  );
};

export default Home;
