import { Box, Button } from "@mui/material";

interface Props {
  icon: any;
  estado: number;
  num: number;
  onClick(num: number): number;
}

const BotonesNavegacion = ({ icon, estado, onClick, num }: Props) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Button
        variant="text"
        sx={{ width: "100%" }}
        onClick={() => {
          onClick(num);
        }}
      >
        {icon}
      </Button>
      <Box
        sx={
          estado === num
            ? {
                with: "auto",
                height: "5px",
                backgroundColor: "#1B74E4",
              }
            : { with: "auto", height: "5px", backgroundColor: "none" }
        }
      />
    </Box>
  );
};

export default BotonesNavegacion;
