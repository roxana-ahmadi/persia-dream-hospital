/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { physicianService } from '../../services/physician.service';

export default () => {
  const { getPhysiciansDto } = physicianService;
  const [physicianList, setPhysicianList] = useState();
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPhysicianList = async () => {
      setLoading(true);
      let response;
      try {
        response = await getPhysiciansDto();
        setPhysicianList(response.value);
      } catch (error) {
        console.log(error);
        throw error;
      }
      for (const item of response)
      {
        if (item.BeneficiaryGroupName=="پزشک عمومی")
      }
      setLoading(false);
    };
    getPhysicianList();
  }, []);
  return {
    physicianList,
    loading,
  };
};
