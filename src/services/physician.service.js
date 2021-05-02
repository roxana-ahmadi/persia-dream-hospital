import axios from 'axios';

const getPhysiciansDto = async key => {
  const response = await axios.get(
    'https://thdev.atiehhospital.ir/odata/PhysicianDto',
  );
  return response.data;
};

export const physicianService = {
  getPhysiciansDto,
};
