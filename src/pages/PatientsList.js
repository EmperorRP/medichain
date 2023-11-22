import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Button,
  Flex,
  Avatar,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import NewPatientForm from '../components/NewPatientForm';

const samplePatients = [
  { id: 1, name: 'John Doe', age: 30, weight: 70, height: 1.8, bloodPressure: '120/80', bloodGlucose: '90 mg/dL' },
];

const calculateBMI = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};

const PatientsList = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const addNewPatient = (newPatientData) => {
    // Logic to add the new patient to your patients list
    // This might involve setting state or sending a POST request to your backend API
    console.log(newPatientData); // For testing, remove this in production
  };

  return (
    <Box p={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h1" size="xl" textAlign="center">
          Patients List
        </Heading>
        <NewPatientForm onSave={addNewPatient}/>
      </Flex>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={8} justifyContent="center">
        {samplePatients.map((patient) => (
          <Box
            key={patient.id}
            bg={cardBg}
            boxShadow="lg"
            padding={4}
            borderRadius="lg"
            border="1px"
            borderColor={borderColor}
            maxWidth="300px"
          >
            <VStack spacing={2} align="stretch">
              <Avatar name={patient.name} size="xl" alignSelf="center" />
              <Text fontWeight="bold" textAlign="center">{patient.name}</Text>
              <Text fontWeight="bold">Age: <Text as="span" fontWeight="normal">{patient.age}</Text></Text>
              <Text fontWeight="bold">Weight: <Text as="span" fontWeight="normal">{patient.weight} kg</Text></Text>
              <Text fontWeight="bold">Height: <Text as="span" fontWeight="normal">{patient.height} m</Text></Text>
              <Text fontWeight="bold">BMI: <Text as="span" fontWeight="normal">{calculateBMI(patient.weight, patient.height)}</Text></Text>
              <Text fontWeight="bold">Blood Pressure: <Text as="span" fontWeight="normal">{patient.bloodPressure}</Text></Text>
              <Text fontWeight="bold">Blood Glucose: <Text as="span" fontWeight="normal">{patient.bloodGlucose}</Text></Text>
              <Flex flexDirection="column" gap={2}>
                <Button as={RouterLink} to={`/patients/${patient.id}`} variant="outline" colorScheme="blue" size="sm" leftIcon={<AddIcon />} w="full">
                    View Profile
                </Button>
                <Button variant="outline" colorScheme="red" size="sm" leftIcon={<CloseIcon />} w="full">
                  Remove Profile
                </Button>
              </Flex>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PatientsList;
