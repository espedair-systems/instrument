import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyEditor from "./SurveyEditor";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

widgets.icheck(Survey, $);   
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

var gss = require("./survey/GSS.House.json");

 

class App extends Component {
 

  componentWillMount() {
    import("icheck");
    window["$"] = window["jQuery"] = $;
  }

  onValueChanged(result) {
    console.log("value changed!"  );
  }

  onComplete(result) {
    console.log("DONE");
    console.log("Complete! " + JSON.stringify(result.data, null, 2) );  
  }

  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(gss);
    return (
      <div className="App">
          <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          <h1>SurveyJS library in action:</h1>
          <Survey.Survey  model={model} onComplete={this.onComplete} onValueChanged={this.onValueChanged} />
         </div>      
      </div>
    );
  }
}
//          <SurveyEditor />

export default App;
