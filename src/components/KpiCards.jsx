import { deepPurple, pink, amber } from "@mui/material/colors";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
const KpiCards = ({ sales, purchases }) => {
  const salesTotal = sales
    ?.map((item) => item.price_total)
    .reduce((acc, sale) => acc + sale, 0);
  const purchasesTotal = purchases
    ?.map((item) => item.price_total)
    .reduce((acc, sale) => acc + sale, 0);
  const profit = salesTotal - purchasesTotal;

  const cardData = [
    {
      id: 1,
      icon: <MonetizationOnIcon sx={{ fontSize: "3rem" }} />,
      color: deepPurple[700],
      bgColor: deepPurple[100],
      title: "sales",
      value: `$${salesTotal}`,
    },
    {
      id: 2,
      icon: <ShoppingCartIcon sx={{ fontSize: "3rem" }} />,
      color: pink[700],
      bgColor: pink[100],
      title: "profit",
      value: `$${profit}`,
    },
    {
      id: 3,
      icon: <PaymentsIcon sx={{ fontSize: "3rem" }} />,
      color: amber[700],
      bgColor: amber[100],
      title: "purhases",
      value: `$${purchasesTotal}`,
    },
  ];
  return (
    <Grid container justifyContent="center" spacing={3}>
      {cardData.map((item) => (
        <Grid key={item.id} item>
          <Paper
            sx={{
              display: "flex",
              gap: 3,
              p: 2,
              alignItems: "center",
              justifyContent: "center",
              width: "330px",
            }}
            elevation={5}
          >
            <Avatar
              sx={{
                bgcolor: item.bgColor,
                color: item.color,
                width: 80,
                height: 80,
              }}
            >
              {item.icon}
            </Avatar>
            <Box>
              <Typography variant="button" mb={2}>
                {item.title}
              </Typography>
              <Typography variant="h4" mb={2}>
                {item.value}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default KpiCards;
