import * as React from 'react';
import BoxContainer from './BoxContainer';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Icons from './Icon';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BoxContainer>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Icons.RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<Icons.FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<Icons.LocationOnIcon />} />
      </BottomNavigation>
    </BoxContainer>
  );
}
