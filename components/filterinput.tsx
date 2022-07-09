import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
} from "@mui/material";

const FilterInput = ({ label, onChange, value, children }) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id={`filter-input-${label}`}>{label}</InputLabel>
      <Select
        labelId={`filter-input-${label}`}
        id="demo-multiple-chip"
        multiple
        value={value}
        onChange={onChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value: string) => (
              <Chip key={value} label={value} sx={{ height: '80%' }} />
            ))}
          </Box>
        )}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default FilterInput;
