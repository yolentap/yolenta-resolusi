import React from 'react';
import { Box, Column, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const Header = () =>  {
    return (<Box display="flex" direction="row" paddingY={2} color={'lightGray'}>
    <Column span={12}>
      <hr padding="2"></hr>
      <Box padding={3}>
          <Heading size="lg"align="center" color="green">E-Signer Tubes PI</Heading>
      </Box>
      <hr></hr>
    </Column>
    </Box>);
}

export default Header;