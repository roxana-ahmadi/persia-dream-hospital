import axios from "axios";

const getPhysiciansDto = async () => {
  const response = await axios.get(
    "https://thdev.atiehhospital.ir/odata/PhysicianDto"
  );
  return response.data;
};

const searchPhysicianByName = async (key) => {
  const response = await axios.get(
    `https://thdev.atiehhospital.ir/odata/PhysicianDto?$filter=contains(tolower(UserFullName),'${key}')`
  );
  return response.data;
};

export const physicianService = {
  getPhysiciansDto,
  searchPhysicianByName,
};
