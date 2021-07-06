import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MoreVert } from "@material-ui/icons";
import { Container } from "@material-ui/core";

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDelete = index => {
    console.log("INDEX", index);
    props.deleteMake(index);
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Button 
      aria-contols="simple-menu"
      aria-haspopup="true"
      onClick={handleClick}
      >
        <MoreVert />
      </Button>

      <Menu 
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      >
      <MenuItem onClick={() => handleDelete(props.index)}>Delete</MenuItem>
      </Menu>
    </Container>
  );
}

