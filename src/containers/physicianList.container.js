import { connect } from "react-redux";
import PhysicianList from "../pages/ physicianList/PhysicianList";
import { physicianActions } from "../states/physician.state";

const { setSelectedPhysician } = physicianActions;

const mapDispatchToProps = {
  setSelectedPhysician,
};
const PhysicianListContainer = connect(null, mapDispatchToProps)(PhysicianList);
export default PhysicianListContainer;
