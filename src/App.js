import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {getList} from './list'
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [list, setList] = useState([]);


  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items.body.Items)
        }
      })
    return () => mounted = false;
  }, [])

console.log(list)



  return (

        <div>
                        
            <title>Paradise Donut Company</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma" />
            <style dangerouslySetInnerHTML={{__html: "\nbody,h1,h2,h3,h4,h5,h6 {font-family: \"Karma\", sans-serif}\n.w3-bar-block .w3-bar-item {padding:20px}\n" }} />
            ​
            {/* Sidebar (hidden by default) */}
            <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={{display: 'none', zIndex: 2, width: '40%', minWidth: '300px'}} id="mySidebar">
              <a href="javascript:void(0)" onclick="w3_close()" className="w3-bar-item w3-button">Close Menu</a>
              <a href="#donut" onclick="w3_close()" className="w3-bar-item w3-button">donut</a>
              <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button">About</a>
            </nav>
            ​
            {/* Top menu */}
            <hr id="home" />
            <div className="w3-top" style={{color:"blue"}}>
              <div className="w3-white w3-xlarge" style={{maxWidth: '1200px', margin: 'auto'}}>
                <div className="w3-button w3-padding-16 w3-left" onclick="w3_open()">☰</div>
                <div  className="w3-right w3-padding-16"> <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button">About</a></div>
                <div className="w3-center w3-padding-16"><a href="#home" onclick="w3_close()" className="w3-bar-item w3-button">Paradise Donut Company</a></div>
              </div>
            </div>
            {/* !PAGE CONTENT! */}
            <div className="w3-main w3-content" style={{maxWidth: '80%', marginTop: '100px'}}>
              ​
        
                {/* <div className="flex-container">   
                    <div>
                          {list.map(item => <img key={item.PK} src={item.URL} /> )}
                          {list.map(item => <h3 key={item.PK}><b>{item.Name} </b> </h3>)}
                    </div>
                </div> */}

          <div className="w3-center">
              <Container>
                <Row>
                  {list.map((item, id) => {
                      return (
                        <Col key={id} md="3" className="d-flex" >
                        <Card style={{ width: '20rem', marginBottom:"2rem"}}>
                            <Card.Img variant="top" src={item.URL} ></Card.Img>
                            <Card.Body>
                                <Card.Title><b>{item.Name}</b></Card.Title>
                                <br></br>
                                <Card.Text>
                                  Odio aenean sed adipiscing diam.  Nullam eget felis eget nunc lobortis mattis aliquam faucibus. 
                                </Card.Text>
                            </Card.Body>  
                        </Card>
                    </Col>
                      )
                  })}
                </Row>
              </Container>

          </div>


           ​
              {/* Pagination */}
              <div className="w3-center w3-padding-32">
                <div className="w3-bar">
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">«</a>
                  <a href="#" className="w3-bar-item w3-black w3-button">1</a>
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">2</a>
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">3</a>
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">4</a>
                  <a href="#" className="w3-bar-item w3-button w3-hover-black">»</a>
                </div>
              </div>



              <hr id="about" />
              {/* About Section */}
              <div className="w3-container w3-padding-32 w3-center">  
                <h3><b>Our Story</b></h3><br />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dunkin%27_Donuts%2C_W_Irlo_Bronson_Memorial_Highway%2C_Osceola_County.jpg/1200px-Dunkin%27_Donuts%2C_W_Irlo_Bronson_Memorial_Highway%2C_Osceola_County.jpg" alt="Me" className="w3-image" style={{display: 'block', margin: 'auto'}} width={800} height={533} />
                <div className="w3-padding-32">
                  <h4><b>I am Who I Am!</b></h4>
                  <h6><i>With Passion For Real, Good Donuts!</i></h6>
                  <p>Just me, myself and I, exploring the universe of unknownment searching for donuts around the world. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                </div>
              </div>
              <hr />
              {/* Footer */}
              <footer className="w3-row-padding w3-padding-32">
                <div className="w3-half">
                  <h3>I LOVE DONUTS</h3>
                  <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                </div>
                <div className="w3-half">
                  <h3>DONUT POSTS</h3>
                  <ul className="w3-ul w3-hoverable">
                    <li className="w3-padding-16">
                      <img src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_396,q_75,w_704/https://assets.simpleviewinc.com/simpleview/image/upload/crm/lafayette/Cajun-Market-Donut-69ff83cf5056b3a_69ff851a-5056-b3a8-49b98942484ff041.jpg" className="w3-left w3-margin-right" style={{width: '100px'}} />
                      <span className="w3-large">Lorem</span><br />
                      <span>Sed mattis nunc</span>
                    </li>
                    <li className="w3-padding-16">
                      <img src="https://www.cookingchanneltv.com/content/dam/images/cook/video/7/75/756/7566/7566919.jpg" className="w3-left w3-margin-right" style={{width: '100px'}} />
                      <span className="w3-large">Lorem</span><br />
                      <span>Sed mattis nunc</span>
                    </li>
                  </ul>
                </div>
                ​
               
              </footer>
              ​
              {/* End page content */}
            </div>
            ​
            ​
          </div>
        );
      }

export default App;
