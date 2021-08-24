import {connect} from "react-redux";
import Profile from "./Profile";
import {mapStateToPropsGenerator} from "../../store/mapStateToPropsGenerator";
import {mapDispatchToPropsGenerator} from "../../store/mapDispatchToPropsGenerator";


const mapStateToProps = mapStateToPropsGenerator('Profile');
const mapDispatchToProps = mapDispatchToPropsGenerator('Profile');

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
