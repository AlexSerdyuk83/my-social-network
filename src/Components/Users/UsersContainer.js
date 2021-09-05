import React from "react";
import {mapDispatchToPropsGenerator} from "../../store/mapDispatchToPropsGenerator";
import {connect} from "react-redux";
import Users from "./Users";
import {mapStateToPropsGenerator} from "../../store/mapStateToPropsGenerator";


const mapStateToProps = mapStateToPropsGenerator('Users');
const mapDispatchToProps = mapDispatchToPropsGenerator('Users');

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
