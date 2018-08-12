import React,{Component} from 'react';

export default class Sets extends Component{
    constructor(props) {
        super(props);
        }
       render(){
        return(
               <div className="here">
                   <section className="grid default-grid">
                       <div className="container testmode">
                           <div className="row sample-row">
                               <div className="col-xs-6 col-sm-4">
                                   <div className="inner"><a href="#Exammode/DevOps/Set1">
                                       <button type="button" className=" btn-default box">Set1</button></a>
                                   </div>
                               </div>
                               <div className="col-xs-6 col-sm-8">
                                   <div className="inner"><a href="#Exammode/DevOps/Set1">
                                       <button type="button" className=" btn-default box">Set2</button></a>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <br/>
                       <br/>
                   </section>
                   <section className="grid default-grid">
                       <div className="container">
                           <div className="row sample-row">
                               <div className="col-xs-6 col-sm-4">
                                   <div className="inner" ><a href="#Exammode/DevOps/Set1">
                                       <button type="button" className=" btn-default box">Set3</button></a>
                                   </div>
                               </div>
                               <div className="col-xs-6 col-sm-8">
                                   <div className="inner"><a href="#Exammode/DevOps/Set1">
                                       <button type="button" className="btn-default box">Set4</button></a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>
               </div>

        )
    }

}