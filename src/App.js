import React from "react";
import "./styles.css";
import InputComponent from "./InputComponent";
import Logo from "./Logo";

import InfoCards from "./InfoCards";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      covidData: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchCovidData(name) {
    fetch(
      `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${name}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key": "20438f9eb4mshb2a68ca50196b46p1d55a5jsn2dbdc2b012cd"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          covidData: data.data
        });
      });
  }

  componentDidMount() {
    this.fetchCovidData("World");
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    this.setState({
      input: this.state.input
    });
    this.fetchCovidData(this.state.input);
    e.preventDefault();
  }

  render() {
    const { covidData } = this.state;
    return (
      <div className="App">
        <Logo />
        <InputComponent
          name="input"
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <InfoCards
          confirmed={covidData.confirmed}
          deaths={covidData.deaths}
          recovered={covidData.recovered}
        />
      </div>
    );
  }
}
