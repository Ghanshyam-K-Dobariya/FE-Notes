import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TableRowPendingApprovalAttributeData from './TableRowPendingApprovalAttributeData';
import "./pendingApproval.css";
const styles={ 
  tableCss:{
  fontFamily: "monospace",
  fontSize: "11.5px",
  backgroundColor :"#00bfff !important",
},
tableCss: {
  // width: 'max-content',
   fontSize: "12px",
   fontWeight: "bold",
   //backgroundColor:'red',
   fontFamily: "Brown-Pro-Regular,Arial, Helvetica, sans-serif",
   backgroundColor: "#00bfff !important",
   border: "2px solid #E1E2E3",
   
 },}
export default class ApprovalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingApprovalAttributeDataRow: [], selected: {},
      onChangeApprovalReject:""
    }
  }
  onChangeApprovalReject = (e) =>{
    console.log("onchange---",e);
    // e.preventDefault()
    // const selected = this.state.selected;
    // selected[e.target.name] = e.target.checked;
    // this.setState({ selected });
  }



  
  rejectSeleted = () => {
    var id='123'
    console.log("reject clicked");
    axios.put('http://localhost:5000/pendingApproval/reject',id).then(res=>{
    console.log("reject updated",res);
    })
  }
  


  ApprovalSubmit = (e) => {
    var id='A16529526'
    console.log("approvalsubmit id",id);

    axios.put("http://localhost:5000/pendingApproval/update",id).then(res=>{
      console.log("record updated",res);
    })
    axios.post("http://localhost:5000/pendingApproval/update",id).then(res=>{
      console.log("record Insrted",res);
    })

  }

   componentWillMount() {
     console.log("Approval Page is working ");
     this.getapprovalAttributeData();
  }
 
  getapprovalAttributeData(){
    console.log("GOLDEN_ACCOUNT_ID--reporting --",this.state.GOLDEN_ACCOUNT_ID);
    axios
    .get(
      `http://localhost:5000/pendingApprovalAttribute`
    )
    .then(response => {
      console.log("response is Reporting entire data ", response.data.rows);
      this.setState({
        pendingApprovalAttributeDataRow:response.data.rows        
      });
    })
    .catch(function(error) {
      console.log(error);
    });

    
  }





  pendingApprovalAttributeTabRow = () => {
    const {
      onChangeApprovalReject,
      state:  { pendingApprovalAttributeDataRow }
    } = this;
    const A = pendingApprovalAttributeDataRow.map((object, i) => (
      <TableRowPendingApprovalAttributeData
        obj={object}
        key={`${Math.random()}`}
        onChangeAR={onChangeApprovalReject}
        name={object.GOLDEN_ACCOUNT_NAME}
      />
    ));
    return A;
  }

  PendingApprovalAtrributeThead = () => {
    return (
      <thead>
        <tr>
          <th>Logitech Account ID</th><th>Account Name</th><th>Attribute</th><th>New Value</th>
          <th>Star Date</th><th>End Date</th><th>Submitted By</th><th>Submitted Date</th>
          <th>Submitted Comment</th><th>Approved Comment</th>
        </tr>
      </thead>
    );
  }

  render() {
    return (
    <div className="pendingApprovalAttribute">
      <h3>Pending Approval - Attributes</h3>
      <u></u>
      <button className="darkBtn" onClick={this.ApprovalSubmit}>APPROVAL SELECTED</button><button  className="redBtn" onClick={this.rejectSeleted}>REJECT SELECTED</button>
      <table className="table" style={styles.tableCss}>
      <thead>
                  <tr>
                    <th></th>
                  <th style={{color:'#999'}}>Logitech Account ID</th>
                  <th style={{color:'#999'}}>Account Name</th>
                  <th style={{color:'#999'}}>Attribute</th><th style={{color:'#999'}}>New Value</th>
                  <th style={{color:'#999'}}>Star Date</th><th style={{color:'#999'}}>End Date</th>
                  <th style={{color:'#999'}}>Submitted By</th><th style={{color:'#999'}}>Submitted Date</th>
                  <th style={{color:'#999'}}>Submitted Comment</th><th style={{color:'#999'}}>Approved Comment</th>
                  </tr>
                </thead>
       {this.pendingApprovalAttributeTabRow()}  
      </table> 
    </div>
    )
  }
}
