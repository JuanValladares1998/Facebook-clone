import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const SerachBar = () => {
  const SearchBar = styled(Box)({
    backgroundColor: "#F0F2F5",
    padding: ".2rem",
    borderRadius: "3rem",
    border: "none",
    display: "flex",
    flexDirection: "row",
  });
  return (
    <SearchBar>
      <Box sx={{display: {xs: "none", lg: "inherit"}}}>
      <form>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase
          name="nombre"
          placeholder="Buscar en Facebook"
          sx={{ margin: "auto 0" }}
        />
      </form>
      </Box>
      <Box sx={{display: {xs: "inherit", lg: "none"}}}>
      <form>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </form>
      </Box>
    </SearchBar>
  );
};

export default SerachBar;
