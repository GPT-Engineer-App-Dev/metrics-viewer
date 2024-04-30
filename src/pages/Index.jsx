import { Box, Text, Flex, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid } from "@chakra-ui/react";
import { FaBusinessTime } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Business Dashboard</Text>
        <FaBusinessTime size="24px" />
      </Flex>
      <SimpleGrid columns={2} spacing={10} mt={5}>
        <Stat p={5} boxShadow="md" borderRadius="md">
          <StatLabel>Sales</StatLabel>
          <StatNumber>$30,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat p={5} boxShadow="md" borderRadius="md">
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$45,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            10.12%
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Index;