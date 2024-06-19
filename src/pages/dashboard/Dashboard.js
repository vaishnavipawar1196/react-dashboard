import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import PortfolioSection from './components/PortfolioSection';
import PriceSection from './components/PriceSection';
import { Grid, GridItem } from '@chakra-ui/react';
import Transaction from './components/Transaction';
import InfoCard from './components/InfoCard';

const Dashboard = () => {
  return (
    <DashboardLayout title='Dashboard'>  
        <PortfolioSection />
        <Grid 
          gap='4'
          gridTemplateColumns={{
            base:'repeat(1,1fr)',
            md:'repeat(2,1fr)'}}
          >
          <GridItem>
            <PriceSection />
          </GridItem>
          <GridItem>
            <Transaction />
          </GridItem>
          <GridItem>
            <InfoCard 
              imgUrl='./Visual1.png'
              text='Learn more about Loans – Keep your Bitcoin, access it’s value without selling it.'
              tagText='Loans'
              inverted={false}
            />
          </GridItem>
          <GridItem>
            <InfoCard 
              imgUrl='./Visual.png'
              text='Learn more about our real estate, mortgage, and corporate account services.'
              tagText='Contact'
              inverted={true}
            />
          </GridItem>
        </Grid>
    </DashboardLayout>
  )
}

export default Dashboard;