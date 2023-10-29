import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  // theme,
} from '@chakra-ui/react';
import { Banner } from './components/Banner';
import Navbar from './components/NavBar';
import { SearchCard } from './components/SearchCard';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import { Customers } from './components/Customers';
import { Properties } from './components/Properties';
import { ValueProposition } from './components/ValueProposition';
import CustomTheme from './theme';

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Navbar />
          <Banner />
          <SearchCard />
          <Products />
          <ValueProposition />
          <Properties />
          <Customers />
          <Footer />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
