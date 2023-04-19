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
import { IconButton } from "@mui/material";
import { ArrowDropDown, Clear } from "@mui/icons-material";

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

const flat = () => {
  return <>&#9837;</>;
};

const sharp = () => {
  return <>&#9839;</>;
};

const keys = [
  "C",
  "D",
  "E",
  "F",
  "G",
  "A",
  "B",
  `C#/D`,
  "D#/E",
  "F#/G",
  "G#/A",
  "A#/B",
];

export default function FilterKey({ Label, names }) {
  const [personName, setPersonName] = useState([]);
  const [key, setKey] = useState("");
  const [showSelect, setShowSelect] = useState(false);
  const [majmin, setMajmin] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={selectStyles} size='small'>
        <InputLabel className='font-bold' id='demo-multiple-checkbox-label'>
          {Label}
        </InputLabel>
        <Select
          open={showSelect}
          onOpen={() => setShowSelect(true)}
          onClose={() => setShowSelect(false)}
          className='text-center'
          labelId='demo-multiple-checkbox-label'
          id='demo-multiple-checkbox'
          // multiple
          value={key + majmin}
          // IconComponent={key & majmi}
          renderValue={(selected) => selected}
          input={<OutlinedInput label={Label} />}
          MenuProps={MenuProps}
          endAdornment={
            <IconButton
              disableRipple
              sx={{
                position: "relative",
                right: "7px",
              }}
              onClick={() => {
                setKey("");
                setMajmin("");
              }}
            >
              {!key & !majmin ? (
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
          <div className='p-1 flex flex-wrap '>
            {keys.map((entry) =>
              entry.includes("#") ? (
                <p
                  onClick={(e) => {
                    setKey(e.target.innerText);
                  }}
                  style={{
                    backgroundColor: key.includes(entry) && "var(--myGreen)",
                    color: key.includes(entry) && "var(--myYellow)",
                  }}
                  className='hover:text-myYellow hover:bg-myGreen hover:bg-opacity-70 transition duration-500 cursor-pointer mr-2 mb-2 rounded-sm inline-flex font-semibold px-2 py-1 border-[1px] border-slate-700 border-opacity-30'
                >
                  {entry}
                  {flat()}
                </p>
              ) : (
                <p
                  onClick={(e) => {
                    setKey(e.target.innerText);
                  }}
                  style={{
                    backgroundColor: entry === key && "var(--myGreen)",
                    color: entry === key && "var(--myYellow)",
                  }}
                  className='hover:text-myYellow hover:bg-myGreen hover:bg-opacity-70 transition duration-500 cursor-pointer mr-2 mb-2 rounded-sm inline-flex font-semibold px-2 py-1 border-[1px] border-slate-700 border-opacity-30'
                >
                  {entry}
                </p>
              )
            )}
          </div>
          <div className='flex justify-center'>
            <p
              onClick={(e) => {
                setMajmin("Maj");
              }}
              style={{
                backgroundColor: majmin === "Maj" && "var(--myGreen)",
                color: majmin === "Maj" ? "var(--myYellow)" : null,
              }}
              className='hover:text-myYellow hover:bg-myGreen hover:bg-opacity-70
            transition duration-500 cursor-pointer mr-2 mb-2 rounded-sm
            inline-flex font-semibold px-7 py-1 border-[1px] border-slate-700
            border-opacity-30'
            >
              Major
            </p>
            <p
              onClick={(e) => {
                setMajmin("m");
              }}
              style={{
                backgroundColor: majmin === "m" && "var(--myGreen)",
                color: majmin === "m" ? "var(--myYellow)" : null,
              }}
              className='hover:text-myYellow hover:bg-myGreen hover:bg-opacity-70
            transition duration-500 cursor-pointer mr-2 mb-2 rounded-sm
            inline-flex font-semibold px-7 py-1 border-[1px] border-slate-700
            border-opacity-30'
            >
              Minor
            </p>
          </div>
          <Close
            clear={() => {
              setKey("");
              setMajmin("");
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
