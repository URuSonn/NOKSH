import { Box, Icon, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { EVENTS_PROPS } from "@/src/utils/path";
import stylesAA from "../components/AAA.module.css";
import FlightIcon from "@mui/icons-material/Flight";

export function EventList() {
  console.log("AAA", EVENTS_PROPS);

  const ImageArray = EVENTS_PROPS.map((item, index) => {
    return item.imageData;
  });
  console.log("BBB", ImageArray);
  return (
    <>
      {EVENTS_PROPS.map((event, index) => {
        return (
          <Box
            sx={{
              margin: "10px 70px",
              "&:last-of-type": {
                backgroundColor: "gray",
                paddingBottom: "30px",
              },
            }}
            key={index}>
            <Link href={event.eventLink}>
              <div
                className={stylesAA.AAA}
                style={{
                  color: "white",
                  display: "flex",
                  borderBottom: "1px solid white",
                  alignItems: "center",
                  height: "45px",
                  padding: "0 20px",
                }}>
                <div style={{ width: "20%" }}>{event.date}</div>
                <div
                  style={{
                    width: "30%",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}>
                  {event.eventTitle}
                </div>
                <Icon sx={{ marginLeft: "auto" }}>
                  {event.icon ?? <FlightIcon />}
                  {/* {events.icon ?events.icon: <FlightIcon />} これの省略記法*/}
                </Icon>
              </div>
              <Typography sx={{ textAlign: "right", marginRight: "20px" }}>
                Location : {event.eventLocation}
              </Typography>
            </Link>
            <Box sx={{ display: "flex" }}>
              <Image
                src="/AAA.png"
                alt="border"
                width={1}
                height={130}
                style={{
                  marginTop: "30px",
                }}
              />
              <ImageList
                sx={{
                  width: "100%",
                  marginLeft: "20px",
                  display: "flex",
                  maxWidth: "900px",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
                cols={3}
                rowHeight={170}>
                {ImageArray[index].map((images, index) => {
                  return (
                    <ImageListItem
                      maxWidth="100%"
                      key={index}
                      sx={{
                        margin: "0 40px",
                        width: "150px",
                      }}>
                      <img
                        src={images.Image}
                        srcSet={images.Image}
                        alt={images.title}
                        loading="lazy"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </ImageListItem>
                  );
                })}
              </ImageList>
            </Box>
          </Box>
        );
      })}
    </>
  );
}
