import { Box, Button, Typography } from "@mui/material";

interface Props {
  icon: any;
  estado: number;
  num: number;
  onClick(num: number): number;
  texto?: string;
}

const BotonesNavegacion = ({ icon, estado, onClick, num, texto }: Props) => {
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
        {texto ? (
          <Typography
            variant="subtitle1"
            marginLeft={1}
            sx={estado === num ? { color: "primary" } : { color: "gray" }}
          >
            {texto}
          </Typography>
        ) : null}
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
