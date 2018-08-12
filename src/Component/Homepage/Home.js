import React,{Component} from 'react';
import '../../App.css';
import Slider from '../Slider/Login';
import TopnavBefore from "../Navbar/TopnavBefore";
import TopnavAfter from "../Navbar/TopnavAfter";





export default class Home extends Component{
    render(){
        return(
            <div>
                <Slider/>
                <TopnavAfter/>


                    </div>

        );
    }
}