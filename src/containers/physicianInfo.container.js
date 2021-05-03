import { connect } from "react-redux";
import PhysicianInfo from "../pages/physicianInfo/PhysicianInfo";

const mapStateToProps = (state) => {
  const { physicianSlice } = state;
  const { selectedPhysician } = physicianSlice;

  return { selectedPhysician };
};

const PhysicianInfoContainer = connect(mapStateToProps, null)(PhysicianInfo);
export default PhysicianInfoContainer;
