// PatientDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import {
    Box,
    Flex,
    Avatar,
    Heading,
    Text,
    VStack,
    HStack,
    useColorModeValue, 
    Input, 
    Textarea, 
    Button,
    Stat,
    StatLabel,
    StatNumber,
    Stack
  } from '@chakra-ui/react';

// Mock function to get patient details
const getPatientDetails = (patientId) => {
  // Fetch patient details from your state or API
  // For now, returning a sample object
  return {
    id: patientId,
    name: 'John Doe',
    age: 30,
    weight: 70,
    height: 1.8,
    address: '1234 Main St',
    bloodType: 'O+',
    bloodPressure: '120/80',
    bloodGlucose: '90 mg/dL',
    allergies: ['Peanuts'],
    diseases: ['Hypertension'],
    // ...other details
  };
};

const PatientDetails = () => {
  const { patientId } = useParams();
  const patient = getPatientDetails(patientId);
  const handleReportUpload = (event) => {
    // You would handle the file upload logic here, typically involving setting up
    // FormData and sending it to your server via an API call.
  };

  const handlePrescriptionSubmit = (event) => {
    // Logic to send the prescription text to your server via an API call
  };
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box p={8} bg={cardBg} boxShadow="lg" borderRadius="lg" maxW="container.md" mx="auto">
      <Stack spacing={4} align="center">
        <Avatar size="2xl" name={patient.name} src="https://bit.ly/dan-abramov" />
        <Heading as="h2">{patient.name}</Heading>
        <HStack justify="center" width="full">
          <Box>
            <Text fontWeight="bold">Age: <Text as="span" fontWeight="normal">{patient.age}</Text></Text>
            <Text fontWeight="bold">Weight: <Text as="span" fontWeight="normal">{patient.weight} kg</Text></Text>
            <Text fontWeight="bold">Height: <Text as="span" fontWeight="normal">{patient.height} m</Text></Text>
            <Text fontWeight="bold">BMI: {patient.weight/patient.height}</Text>
            <Text fontWeight="bold">Address: {patient.address}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Blood Type: {patient.bloodType}</Text>
            <Text fontWeight="bold">Blood Pressure: {patient.bloodPressure}</Text>
            <Text fontWeight="bold">Blood Glucose: {patient.bloodGlucose}</Text>
            <Text fontWeight="bold">Allergies: {patient.allergies.join(', ')}</Text>
            <Text fontWeight="bold">Diseases: {patient.diseases.join(', ')}</Text>
          </Box>
        </HStack>
      </Stack>

      <Box>
        <Heading as="h3" size="lg" mb={4}>Report Upload</Heading>
        <Input type="file" onChange={handleReportUpload} />
        <Button mt={4} colorScheme="teal" onClick={() => {/* Logic to confirm upload */}}>
          Upload Report
        </Button>
      </Box>
      <Box mt={8}>
        <Heading as="h3" size="lg" mb={4}>Prescription Notes</Heading>
        <Textarea placeholder="Type prescription here..." />
        <Button mt={4} colorScheme="blue" onClick={handlePrescriptionSubmit}>
          Send Prescription
        </Button>
      </Box>
    </Box>
    
  );
};

export default PatientDetails;
