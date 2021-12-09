import React, {useState} from 'react';
import { OutlinedInput, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';

const BreedOptions = ({breeds}) => {
    const [breedName, setBreedName] = useState([]);
    
    const handleChange = (e)=>{
        const {
            target: {value},
        } = e;
        setBreedName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{m:1, width: 300}}>
                <InputLabel id="multiple-name-label">"Name"</InputLabel>
                <Select
                    labelId= "multiple-breed-label"
                    id="multiple-breeds"
                    multiple
                    value={breedName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Breed"/>}
                >
                    {breeds.map((breed)=>(
                        <MenuItem
                            key={breed}
                            value={breed}
                        >
                            {breed}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default BreedOptions