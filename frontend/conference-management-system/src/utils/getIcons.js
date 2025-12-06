import InputAdornment from '@mui/material/InputAdornment';

export function addIcon(Icon, position = 'end') {
    return {
        InputProps: {
            [position === 'start' ? 'startAdornment' : 'endAdornment']: (
                <InputAdornment position={position}>
                    <Icon fontSize={"medium"}/>
                </InputAdornment>
            )
        }
    }
}