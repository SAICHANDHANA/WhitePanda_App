import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import MainDivision from './components/MainDivision/MainDivision';
import Footer from './components/Footer/Footer';
class App extends Component {
  render(){
    return (
      <div style={{height:'100%'}}>
        <Toolbar/>
        <SideDrawer/>
        <div className="content_store ">Content Store</div>
          <div className="first_div">
            <p className="heading">
              Got bulk orders or almost similar orders? Fill the order brief in an excel sheet
            </p>
            <p className="para1">
              If you are wondering about an easy way to place orders in large numbers, we provide a way customized just for that.
              <br/>Download our excel sheet, and fill the order in brief in the prescribed format and submit. In case you need any help, <u>we
              <br/>are just a click away to assist you in placeing your order. </u>
            </p>
            <button className="button1" style={{color:'#20B2AA'}}> Order via Excel Sheet </button>
          </div>
          <div className="top_row">
          <div className="row">
            <div className="column">
                <MainDivision className="main_division" Title="Blog / Article" SubTitle="from" Number="500" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
            <div className="column">
                <MainDivision className="main_division" Title="Newsletter / E-mailer" SubTitle="from" Number="1000" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
            <div className="column">
                <MainDivision className="main_division" Title="Whitepaper" SubTitle="from" Number="2000" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
          </div>
          <div className="row">
            <div className="column">
                <MainDivision className="main_division" Title="e-book" SubTitle="from" Number="1000" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
            <div className="column">
                <MainDivision className="main_division" Title="Report / Guide" SubTitle="from" Number="1000" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
            <div className="column">
                <MainDivision className="main_division" Title="Product Description" SubTitle="from" Number="500" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
          </div>
          <div className="row">
            <div className="column">
                <MainDivision className="main_division" Title="Website Content" SubTitle="from" Number="1000" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
            <div className="column">
                <MainDivision className="main_division" Title="Video Script" SubTitle="from" Number="1000" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
            <div className="column">
                <MainDivision className="main_division" Title="Company Profile / Brochure" SubTitle="from" Number="2000" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
          </div>
          <div className="row">
            <div className="column">
                <MainDivision className="main_division" Title="Press Release" SubTitle="from" Number="2000" Button="Order" Text="Typically 450-400 words, and e-book is perfect for your target audience ranging from prospective customers to users" />
            </div>
          </div>
          </div>
          <Footer/>
      </div>
      
    );
  }
}

export default App;
