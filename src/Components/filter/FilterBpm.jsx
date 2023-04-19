import * as React from "react";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Close from "./Close";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { selectStyles } from "../data/variables";
// import OutsideClickHandler from "react-outside-click-handler";
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
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  getContentAnchorEl: null,
};
export default function FilterBpm({ Label, names, show }) {
  //   const [showcomponent, setShowcomponent] = useState(true);

  const [personName, setPersonName] = useState([]);
  const [bpm, setBpm] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const [lowbpm, setLowbpm] = useState(Number);
  const [hibpm, setHibpm] = useState(Number);
  const [render, setRender] = useState("");

  const handleChange = (event) => {
    setShowSelect(true);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    // <OutsideClickHandler
    //   onOutsideClick={() => {
    //     setShowSelect(false);
    //   }}
    // >
    <div>
      <FormControl sx={selectStyles} size='small'>
        <InputLabel className='font-bold' id='demo-multiple-checkbox-label'>
          {Label}
        </InputLabel>
        <Select
          open={showSelect}
          onOpen={() => setShowSelect(true)}
          onClose={() => {}}
          IconComponent={!render ? ArrowDropDownIcon : CloseIcon}
          className='text-center'
          input={<OutlinedInput label={"BPM"} />}
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          onChange={handleChange}
          value={personName}
          renderValue={(selected) => render}
          MenuProps={MenuProps}
          endAdornment={
            <IconButton
              disableRipple
              className='hover:bg-opacity-0'
              sx={{
                position: "relative",
                right: "7px",
                bottom: "0px",
              }}
              onClick={() => {
                render ? setBpm("") & setRender("") : setShowSelect(true);
              }}
            >
              {!render ? (
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
          <MenuItem
            key={"Exact"}
            value={"Exact"}
            className='flex items-center justify-end '
          >
            <Checkbox
              size='small'
              checked={personName == "Exact"}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
            />
            <ListItemText primary={"Exact"} />
            {personName == "Exact" && (
              <OutlinedInput
                className='w-[25%] h-[25px] mr-20 '
                size='small'
                onChange={(e) => {
                  setBpm(e.target.value + "BPM ");
                }}
                type='number'
              />
            )}
          </MenuItem>
          <MenuItem
            key={"Range"}
            value={"Range"}
            className='flex items-center justify-start'
          >
            <Checkbox
              size='small'
              checked={personName == "Range"}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
            />
            <ListItemText primary={"Range"} />
            {personName == "Range" && (
              <div className='flex ml-10'>
                <OutlinedInput
                  className='w-[50%] h-[25px] text-left  '
                  size='small'
                  inputMode='numeric'
                  placeholder='Min'
                  onChange={(e) => {
                    setLowbpm(e.target.value);
                    setBpm(`${lowbpm}-${hibpm}`);
                  }}
                />{" "}
                <p className='mx-1'>-</p>
                <OutlinedInput
                  className='w-[50%] h-[25px] text-left  '
                  size='small'
                  inputMode='numeric'
                  placeholder='Max'
                  onChange={(e) => {
                    setHibpm(e.target.value);
                    setBpm(`${lowbpm}-${hibpm}`);
                  }}
                />
              </div>
            )}
          </MenuItem>

          <Close
            text={"save"}
            clear={() => {
              setShowSelect(true);

              setBpm("");
              setRender("");
            }}
            close={() => {
              setShowSelect(false);
              setRender(bpm);
            }}
          />
        </Select>
      </FormControl>
    </div>
    // </OutsideClickHandler>
  );
}
