import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useStockCall from "../hooks/useStockCall";
import { btnStyle } from "../styles/globasStyles";

const Cards = ({ data, url, handleOpen, info, setInfo }) => {
  const { deleteStockFunction } = useStockCall();

  return (
    <Grid container spacing={2} justifyContent={"center"}>
      {data?.map((item, index) => (
        <Grid item key={index}>
          <Card
            sx={{
              boxShadow: 17,
              width: 350,
              height: 450,
              borderRadius: 4,
              margin: 2,
              padding: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              m={2}
              color={"error"}
              component="div"
            >
              {item?.name}
            </Typography>
            {item?.address && (
              <Typography variant="body2" color="text.secondary">
                <span style={{ fontWeight: "bolder" }}>Address:</span>{" "}
                {item.address}
              </Typography>
            )}
            <br />
            {item?.phone && (
              <Typography variant="body2" color="text.secondary">
                <span style={{ fontWeight: "bolder" }}>Phone:</span>{" "}
                {item.phone}
              </Typography>
            )}

            {item?.image && (
              <CardMedia
                component="img"
                image={item.image}
                title={item.name}
                sx={{
                  objectFit: "contain",
                  maxHeight: 175,
                  width: 200,
                  margin: "auto",
                }}
              />
            )}
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 2,
              }}
            >
              <EditIcon
                sx={btnStyle}
                onClick={() => {
                  handleOpen();
                  setInfo(item);
                }}
              />
              <DeleteIcon
                sx={btnStyle}
                onClick={() => deleteStockFunction(url, item._id)}
              />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
