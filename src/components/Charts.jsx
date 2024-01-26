import { Card, LineChart, Title } from "@tremor/react";
import { Grid } from "@mui/material";

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;
const Charts = ({ sales, purchases }) => {
  const salesData = sales?.map((item) => ({
    date: item.createds,
    price: Number(item.price_total),
    quantity: item.quantity,
  }));
  const purchaesData = purchases?.map((item) => ({
    date: item.createds,
    price: Number(item.price_total),
    quantity: item.quantity,
  }));
  return (
    <Grid container spacing={5} justifyContent="center" mt={2}>
      <Grid xs={12} md={6} item>
        <Card>
          <Title>Total Sales</Title>
          <LineChart
            className="mt-6"
            data={salesData}
            index="date"
            categories={["quantity", "price"]}
            colors={["red", "blue"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Title>Total Purchases</Title>
          <LineChart
            className="mt-6"
            data={purchaesData}
            index="date"
            categories={["quantity", "price"]}
            colors={["red", "blue"]}
            valueFormatter={dataFormatter}
          />
        </Card>
      </Grid>
    </Grid>
  );
};
export default Charts;
