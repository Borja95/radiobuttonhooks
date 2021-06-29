import './App.css';
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FormGroup, Label, Input} from "reactstrap";

function App() {
  const[framework, setFramework] = useState(1);

  const cambioRadioFramework=e=>{
    setFramework(e.target.value);
  }

  return (
    <div className="App">
     <FormGroup>
      <h5>¿Qué Framework estás utilizando?</h5>

      <FormGroup className="formGroupRadios">
        <FormGroup>
          <Input
            id="radio1"
            type="radio"
            value="1"
            checked={framework == 1 ? true : false}
            onChange={cambioRadioFramework}
          />
          <Label for="radio1">
            React
          </Label>
        </FormGroup>

        <FormGroup>
          <Input
            id="radio2"
            type="radio"
            value="2"
            checked={framework == 2 ? true : false}
            onChange={cambioRadioFramework}
          />
          <Label for="radio2">
            Angular
          </Label>
        </FormGroup>

        <FormGroup>
          <Input
            id="radio3"
            type="radio"
            value="3"
            checked={framework == 3 ? true : false}
            onChange={cambioRadioFramework}
          />
          <Label for="radio3">
            Vue JS
          </Label>
        </FormGroup>

        <FormGroup>
          <Input
            id="radio4"
            type="radio"
            value="4"
            checked={framework == 4 ? true : false}
            onChange={cambioRadioFramework}
          />
          <Label for="radio4">
            Ember JS
          </Label>
        </FormGroup>

      </FormGroup>

     </FormGroup>

     <br />
     <p>El radio button seleccionado es: <b>{framework}</b></p>
    </div>
  );
}

export default App;
