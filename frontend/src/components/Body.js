import { Component } from "react";
import semester from "../components/icons/semester.png";
import Carousel from "react-elastic-carousel";
import "../App.css";
import female from "../components/icons/female.png";
import male from "../components/icons/male.png";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

class Body extends Component {
  render() {
    return (
      <div>
        {/* Background Image */}
        <div className="containerText">
          <div id="hb_image"></div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
        {/* Semester */}
        <div className="card-deck">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card">
                  <img className="card-img-top" src={semester} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Semester - 1</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <img className="card-img-top" src={semester} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Semester - 2</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <img className="card-img-top" src={semester} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Semester - 3</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <img className="card-img-top" src={semester} alt="Card cap" />
                  <div className="card-body">
                    <h5 className="card-title">Semester - 4</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty */}
        <h1
          style={{
            textAlign: "center",
            color: "#1C2B4B",
            marginBottom: "70px",
          }}
        >
          Our Faculties
        </h1>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <div>
              <img src={female} height="150px" width="150px" alt="Female" />
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                Mrs.Natasha
              </h3>
            </div>
            <div>
              <img src={male} height="150px" width="150px" alt="Male" />
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                Mr.David
              </h3>
            </div>
            <div>
              <img src={female} height="150px" width="150px" alt="Female" />
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                Mrs.Maria
              </h3>
            </div>
            <div>
              <img src={male} height="150px" width="150px" alt="Male" />
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                Mr.Steve
              </h3>
            </div>
            <div>
              <img src={female} height="150px" width="150px" alt="Female" />
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                Mrs.Peggy
              </h3>
            </div>
            <div>
              <img src={male} height="150px" width="150px" alt="Male" />
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                Mr.Tony
              </h3>
            </div>
            <div>
              <img src={female} height="150px" width="150px" alt="Female" />
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                Mrs.Wanda
              </h3>
            </div>
            <div>
              <img src={male} height="150px" width="150px" alt="Male" />
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "50px",
                }}
              >
                Mr.Clint
              </h3>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Body;
