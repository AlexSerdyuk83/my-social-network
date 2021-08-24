import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {mapStateToPropsGenerator} from "../../store/mapStateToPropsGenerator";
import {mapDispatchToPropsGenerator} from "../../store/mapDispatchToPropsGenerator";


const mapStateToProps = mapStateToPropsGenerator('Dialogs');
const mapDispatchToProps = mapDispatchToPropsGenerator('Dialogs');

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
