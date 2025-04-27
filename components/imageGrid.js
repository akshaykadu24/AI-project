import { Box } from "@mui/material";


const ImageGrid = ({images}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        paddingTop:"30px"
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          sx={{
            width: { xs: "45%", sm: "30%", md: "22%" }, // Responsive size
            aspectRatio: "1", // Square box without any tricks
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "#f0f0f0",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            component="img"
            src={src}
            alt={`Image ${index + 1}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ImageGrid;
