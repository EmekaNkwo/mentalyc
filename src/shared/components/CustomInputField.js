import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export function SelectField({ value, handleChange, label, styles, items }) {
  return (
    <FormControl sx={styles}>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        autoWidth
        label={label}
      >
        {items.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export function InputField({ value, handleChange, label, styles }) {
  return (
    <TextField
      id="filled-basic"
      label={label}
      variant="filled"
      sx={styles}
      value={value}
      onChange={handleChange}
    />
  );
}
