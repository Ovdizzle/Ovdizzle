import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Close from "./Close";
import { useState } from "react";
import { selectStyles } from "../data/variables";
import { ArrowDropDown, Clear } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   "guitar",
//   "keyboard",
//   "drums",
//   "brass & woodwind",
//   "synth",
//   "percussions",
//   "cymbals & hats",
//   "snare",
//   "tom",
//   "conga",
// ];

export default function FilterSingle({ Label, names }) {
  const [personName, setPersonName] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [showSelect, setShowSelect] = useState(false);

  return (
    <div>
      <FormControl sx={selectStyles} size='small'>
        <InputLabel className='font-bold' id='demo-multiple-checkbox-label'>
          {Label}
        </InputLabel>
        <Select
          className='text-center'
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          open={showSelect}
          onOpen={() => setShowSelect(true)}
          onClose={() => setShowSelect(false)}
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label={Label} />}
          renderValue={(selected) => selected}
          MenuProps={MenuProps}
          endAdornment={
            <IconButton
              disableRipple
              sx={{
                // display: personName.length === 0 ? "none" : null,
                position: "relative",
                right: "7px",
                bottom: "0px",
                // border: "2px solid black",
                // backgroundColor: "yellow",
              }}
              onClick={() => {
                personName ? setPersonName("") : setShowSelect(true);
              }}
            >
              {!personName ? (
                <ArrowDropDown
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    // border: "2px solid black",
                  }}
                />
              ) : (
                <Clear
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    // border: "2px solid black",
                  }}
                />
              )}
            </IconButton>
          }
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText className='flex' primary={name} secondary={""} />
            </MenuItem>
          ))}
          <Close
            clear={() => {
              setPersonName([]);
            }}
            close={() => {
              setShowSelect(false);
            }}
          />
        </Select>
      </FormControl>
    </div>
  );
}
