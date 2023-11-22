// NewPatientForm.js
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const NewPatientForm = ({ onSave }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    bloodPressure: '',
    bloodGlucose: '',
    // Add more fields as necessary
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(patientData);
    onClose(); // Close the modal after saving
    // Reset the form if necessary
    setPatientData({
      name: '',
      age: '',
      weight: '',
      height: '',
      bloodPressure: '',
      bloodGlucose: '',
      // Reset more fields as necessary
    });
  };

  return (
    <>
      <Button onClick={onOpen} leftIcon={<AddIcon />} colorScheme="teal" variant="outline">
        Add Patient
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Patient</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" name="name" onChange={handleInputChange} value={patientData.name} />
              {/* Add more input fields for each patient attribute */}
            </FormControl>
            {/* Repeat FormControl for age, weight, etc. */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewPatientForm;
