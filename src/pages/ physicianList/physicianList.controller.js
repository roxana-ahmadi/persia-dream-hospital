/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { physicianService } from '../../services/physician.service';

export default props => {
  const { setSelectedPhysician } = props;
  const { getPhysiciansDto, searchPhysicianByName } = physicianService;

  const [generalPhysician, setGeneralPhysician] = useState([]);
  const [specialistPhysician, setSpecialistPhysician] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPhysicianList = async () => {
      setLoading(true);
      const generalDoctor = [];
      const specialistDoctor = [];
      let response;
      try {
        response = await getPhysiciansDto();
      } catch (error) {
        console.log(error);
        throw error;
      }
      for (const item of response.value) {
        if (item.BeneficiaryGroupName == 'پزشک عمومی') generalDoctor.push(item);
        else specialistDoctor.push(item);
      }
      setGeneralPhysician(generalDoctor);
      setSpecialistPhysician(specialistDoctor);
      setLoading(false);
    };
    getPhysicianList();
  }, []);

  const onSearch = async key => {
    setLoading(true);
    const generalDoctor = [];
    const specialistDoctor = [];
    let response;
    try {
      response = await searchPhysicianByName(key);
    } catch (error) {
      console.log(error);
      throw error;
    }
    for (const item of response.value) {
      if (item.BeneficiaryGroupName == 'پزشک عمومی') generalDoctor.push(item);
      else specialistDoctor.push(item);
    }
    setGeneralPhysician(generalDoctor);
    setSpecialistPhysician(specialistDoctor);
    setLoading(false);
  };

  const onSelectPhysician = physician => {
    setSelectedPhysician(physician);
  };
  return {
    loading,
    generalPhysician,
    specialistPhysician,
    onSearch,
    onSelectPhysician,
  };
};
