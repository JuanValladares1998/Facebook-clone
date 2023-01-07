import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const SerachBar = () => {
  const SearchBar = styled(Box)({
    backgroundColor: "#F0F2F5",
    width: "14rem",
    padding: ".2rem",
    borderRadius: "3rem",
    border: "none",
  });
  return (
    <SearchBar>
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
    </SearchBar>
  );
};

export default SerachBar;
